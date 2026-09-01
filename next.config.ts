import type { NextConfig } from "next";

/** Hosts allowed to iframe chat-admin's /embed/* routes.
 *
 *  Env var override lets you add staging or local dev hosts without
 *  editing code. Comma-separated list, e.g.
 *    EMBED_ALLOWED_ORIGINS="https://staging.isrshipping.com,http://localhost:3000"
 */
function embedAllowedOrigins(): string[] {
  const envList = process.env.EMBED_ALLOWED_ORIGINS;
  const fromEnv = envList
    ? envList
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];
  // Default + env additions, deduped.
  return Array.from(
    new Set([
      "https://www.isrshipping.com",
      "https://isrshipping.com",
      ...fromEnv,
    ]),
  );
}

const nextConfig: NextConfig = {
  /** api.chatkit.cc is the public API hostname. The handlers live at
   *  /api/v1/* in this same app, but a dedicated API host should not make
   *  callers type /api twice, and the reference docs have always documented
   *  the shape https://<host>/v1/<resource>. This maps one onto the other.
   *
   *  Scoped by host on purpose. An unscoped /v1/:path* would quietly alias
   *  the same endpoints onto www.chatkit.cc, giving every route two public
   *  URLs and two sets of docs to keep honest.
   *
   *  Inert until api.chatkit.cc actually resolves to this Vercel project. */
  async rewrites() {
    return [
      {
        source: "/v1/:path*",
        has: [{ type: "host", value: "api.chatkit.cc" }],
        destination: "/api/v1/:path*",
      },
    ];
  },
  async headers() {
    const allowed = embedAllowedOrigins();
    // CSP frame-ancestors is the modern replacement for X-Frame-Options.
    // Browsers honor frame-ancestors when it's present.
    const frameAncestors = ["'self'", ...allowed].join(" ");
    return [
      {
        // Lock down every route by default — anything not under /embed
        // cannot be iframed at all. Belt-and-suspenders with X-Frame-Options
        // for older browsers / proxies that strip CSP.
        source: "/((?!embed).*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
        ],
      },
      {
        // /embed/* can be framed by the allowlist.
        source: "/embed/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `frame-ancestors ${frameAncestors}`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
