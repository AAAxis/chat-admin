import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Auth gating, written so it can never take the site down.
 *
 * Anything this function throws becomes MIDDLEWARE_INVOCATION_FAILED for every
 * path the matcher covers. That is what happens when the Supabase env vars are
 * absent: `!` assertions are erased at compile time, so createServerClient()
 * receives undefined and throws on the very first request.
 *
 * Two defences. The matcher at the bottom keeps public pages out of here
 * entirely, and the failure paths below never throw.
 *
 * So every failure path here is explicit, and it resolves the same way:
 *   - gated routes fail CLOSED  — send them to /login rather than let them in
 *   - everything else fails OPEN — a marketing page must not 500 because
 *     Supabase is unreachable
 */

const GATED_PREFIX = "/dashboard";

const toLogin = (request: NextRequest, path: string) => {
  const url = request.nextUrl.clone();
  url.pathname = "/login";
  url.searchParams.set("next", path);
  return NextResponse.redirect(url);
};

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Misconfiguration, not a user error. Say so once in the log rather than
  // throwing an opaque 500 at every visitor.
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error(
      "middleware: NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY are not set — " +
        "auth gating is disabled and gated routes redirect to /login",
    );
    return path.startsWith(GATED_PREFIX) ? toLogin(request, path) : NextResponse.next({ request });
  }

  let response = NextResponse.next({ request });

  try {
    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    });

    // Refreshes session if expired and writes cookies back. This is a network
    // call to Supabase, so it can fail for reasons that have nothing to do with
    // whoever is browsing.
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (path.startsWith(GATED_PREFIX) && !user) return toLogin(request, path);

    // Inverse: signed-in users hitting /login or /signup → /dashboard.
    if ((path === "/login" || path === "/signup") && user) {
      const url = request.nextUrl.clone();
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }

    return response;
  } catch (error) {
    // Supabase unreachable, a malformed cookie, an SDK change — none of it is a
    // reason to serve 500 to someone reading the home page.
    console.error("middleware: auth check failed", error);
    return path.startsWith(GATED_PREFIX) ? toLogin(request, path) : NextResponse.next({ request });
  }
}

/**
 * Only the routes that actually need to know who you are.
 *
 * This used to match every path via a negative lookahead, which gave the
 * marketing pages — including / — a hard dependency on Supabase they never
 * needed: one throw in here and the whole site returned
 * MIDDLEWARE_INVOCATION_FAILED. The public pages query nothing, so they are now
 * simply not matched, and no database has to be reachable to serve the home
 * page.
 *
 * Narrowing this does not weaken the gate: dashboard/layout.tsx does its own
 * getUser() and redirects to /login on its own. The check here is the cheap
 * first pass, not the lock.
 */
export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
};
