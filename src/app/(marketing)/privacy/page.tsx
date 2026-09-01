import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Chatkit",
  description:
    "How Montigate LLC collects, uses and protects your data in Chatkit and on chatkit.cc.",
};

/** Google's OAuth verification fetches this URL directly, so it must render
 *  without a database, a session or any env var. Everything below is static
 *  copy — no imports beyond metadata, nothing that can throw at request time. */
export const dynamic = "force-static";

const UPDATED = "1 September 2026";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl sm:text-3xl tracking-tight text-ink leading-tight font-normal">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[16px] leading-relaxed text-deep/80">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero — mirrors SupportHero so the page sits under the floating navbar */}
      <section className="relative bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-dotted-mist [mask-image:radial-gradient(ellipse_60%_70%_at_center,_black_0%,_transparent_85%)] [-webkit-mask-image:radial-gradient(ellipse_60%_70%_at_center,_black_0%,_transparent_85%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-28 sm:pt-32 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <p className="text-[14px] font-medium text-deep/60">Legal</p>
            <h1 className="mt-4 text-4xl sm:text-6xl tracking-tight text-ink leading-[1] font-normal">
              Privacy{" "}
              <span className="font-serif-italic text-deep">
                policy<span className="text-deep/40">.</span>
              </span>
            </h1>
            <p className="mt-5 text-deep/70 leading-relaxed text-[16px] max-w-[620px]">
              What Chatkit collects, why, who it goes to, and how to get rid of
              it. Written to be read, not to be survived.
            </p>
            <p className="mt-4 text-[14px] text-deep/60">
              Last updated {UPDATED}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-12">
        <div className="bg-mist rounded-[48px] border border-mist shadow-sm overflow-hidden">
          <div className="bg-white rounded-[40px] m-2 shadow-sm">
            <div className="p-8 md:p-10 lg:p-12 max-w-[760px] space-y-12">
              <Section id="who-we-are" title="Who we are">
                <p>
                  Chatkit is operated by <strong>Montigate LLC</strong>
                  {" ("}&ldquo;we&rdquo;, &ldquo;us&rdquo;{")"}. Chatkit is
                  drop-in chat support software: our customers embed it in their
                  own web and mobile apps so they can talk to their users.
                </p>
                <p>
                  This policy covers the Chatkit website at chatkit.cc, the
                  Chatkit dashboard, and the chat widget and SDKs we provide.
                  For anything in it, write to{" "}
                  <a
                    href="mailto:info@chatkit.cc"
                    className="text-ink underline underline-offset-4 hover:text-deep"
                  >
                    info@chatkit.cc
                  </a>
                  .
                </p>
                <p>
                  Two kinds of people appear in this policy, and it matters which
                  one you are. <strong>Customers</strong> sign up for a Chatkit
                  account and we decide how their account data is handled.{" "}
                  <strong>End users</strong>{" "}
                  are the people who chat inside a
                  customer&apos;s app — for that data the customer decides what
                  is collected and why, and we only process it on their
                  instructions. If you are an end user, contact the app you were
                  chatting in first; we will help them answer you.
                </p>
              </Section>

              <Section id="what-we-collect" title="What we collect">
                <p>
                  <strong>Account data.</strong> Your email address, a securely
                  hashed password, and the name of the workspace you create. If
                  you sign in with Google we receive your name, email address and
                  profile picture instead of a password.
                </p>
                <p>
                  <strong>Workspace data.</strong> Your workspace name and
                  identifier, your API keys, your plan, and any webhook URL or
                  sender address you configure.
                </p>
                <p>
                  <strong>Conversation data.</strong>{" "}
                  The messages, files and
                  images sent through Chatkit, plus the end-user details a
                  customer&apos;s app passes to us — an opaque user id, and
                  optionally a display name and email address so replies can be
                  routed and notified. Customers choose what to send us here; we
                  ask them not to send more than they need.
                </p>
                <p>
                  <strong>Technical data.</strong> Standard server logs — IP
                  address, browser user agent, timestamps and the URL requested —
                  kept to keep the service running, debug faults and block abuse.
                </p>
                <p>
                  We do not collect special-category data, we do not run
                  advertising or third-party tracking on chatkit.cc, and we never
                  sell personal data to anyone.
                </p>
              </Section>

              <Section id="google-data" title="If you sign in with Google">
                <p>
                  Signing in with Google is optional — email and password works
                  just as well. When you do use it, Google asks your permission
                  and then gives us three things from your Google account:{" "}
                  <strong>your name, your email address, and your profile
                  picture</strong> (the standard <code>openid</code>,{" "}
                  <code>email</code> and <code>profile</code> scopes).
                </p>
                <p>
                  We use them for exactly one purpose: to create your Chatkit
                  account and sign you into it, and to show your name and picture
                  to you and your teammates inside the dashboard. We do not use
                  Google account data for advertising, we do not sell or transfer
                  it, and we do not use it to train any AI or machine-learning
                  model. It is not shared with anyone beyond the infrastructure
                  providers listed below, who store it on our behalf.
                </p>
                <p>
                  Chatkit&apos;s use of information received from Google APIs
                  follows the{" "}
                  <a
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline underline-offset-4 hover:text-deep"
                  >
                    Google API Services User Data Policy
                  </a>
                  , including its Limited Use requirements.
                </p>
                <p>
                  You can revoke our access at any time at{" "}
                  <a
                    href="https://myaccount.google.com/permissions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline underline-offset-4 hover:text-deep"
                  >
                    myaccount.google.com/permissions
                  </a>
                  . Revoking stops future sign-ins; to delete the data we already
                  hold, delete your account or email us.
                </p>
              </Section>

              <Section id="how-we-use-it" title="How we use it">
                <p>
                  To run the service you asked for: authenticate you, deliver and
                  store messages, send notification emails, and show your inbox.
                  To keep it working and safe: rate limiting, abuse prevention,
                  backups, debugging. To bill you, where a paid plan applies. And
                  to reply when you contact support.
                </p>
                <p>
                  Our legal bases under the GDPR are performance of our contract
                  with you, our legitimate interest in a secure and functioning
                  service, and consent where the law requires it.
                </p>
              </Section>

              <Section id="who-we-share-with" title="Who we share it with">
                <p>
                  Only the processors that make Chatkit run, each bound to use
                  the data solely for us:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-deep/40">
                  <li>
                    <strong>Supabase</strong> — database, authentication and file
                    storage.
                  </li>
                  <li>
                    <strong>Vercel</strong> — application hosting and content
                    delivery.
                  </li>
                  <li>
                    <strong>Google</strong> — only if you choose to sign in with
                    Google.
                  </li>
                </ul>
                <p>
                  We also disclose data when the law compels us, and we would
                  transfer it to an acquirer if the business were sold — in which
                  case this policy travels with it. That is the whole list.
                </p>
              </Section>

              <Section id="cookies" title="Cookies">
                <p>
                  Chatkit sets cookies for one thing: keeping you signed in.
                  They are strictly necessary, they are not used to profile you,
                  and there are no advertising or analytics cookies on
                  chatkit.cc. Clearing them signs you out.
                </p>
              </Section>

              <Section id="retention" title="How long we keep it">
                <p>
                  Account and workspace data lives as long as your account does.
                  Conversation data is kept until the customer who owns it
                  deletes it or closes their workspace. Server logs roll off
                  within 30 days. When you delete your account we delete your
                  data and the conversations belonging to it, save for anything
                  we must keep for legal or accounting reasons; backups age out
                  on their own cycle within 30 days.
                </p>
              </Section>

              <Section id="security" title="Security">
                <p>
                  Data is encrypted in transit with TLS and at rest by our
                  infrastructure providers. Access to production data is limited
                  to the people who need it. Tenants are isolated at the database
                  level with row-level security, so one workspace cannot read
                  another&apos;s conversations. No system is perfect; if a breach
                  affects you, we will tell you and the relevant regulator within
                  the deadlines the law sets.
                </p>
              </Section>

              <Section id="your-rights" title="Your rights">
                <p>
                  Depending on where you live, you can ask us to give you a copy
                  of your data, correct it, delete it, restrict or object to how
                  we use it, or hand it over in a portable format. You can also
                  complain to your local data protection authority. We do not
                  sell personal information or share it for cross-context
                  behavioural advertising, so there is nothing to opt out of on
                  that front.
                </p>
                <p>
                  Email{" "}
                  <a
                    href="mailto:info@chatkit.cc"
                    className="text-ink underline underline-offset-4 hover:text-deep"
                  >
                    info@chatkit.cc
                  </a>{" "}
                  and we will respond within 30 days.
                </p>
              </Section>

              <Section id="transfers" title="International transfers">
                <p>
                  Our providers may process data outside your country, including
                  in the United States. Where that involves personal data from
                  the EEA or the UK, the transfer relies on the European
                  Commission&apos;s Standard Contractual Clauses.
                </p>
              </Section>

              <Section id="children" title="Children">
                <p>
                  Chatkit is a business tool and is not directed at children
                  under 13 (or under 16 where local law sets that bar). We do not
                  knowingly collect their data; if we learn we have, we delete
                  it.
                </p>
              </Section>

              <Section id="changes" title="Changes to this policy">
                <p>
                  If we change this policy we update the date at the top, and for
                  anything material we email account holders before it takes
                  effect.
                </p>
              </Section>

              <Section id="contact" title="Contact">
                <p>
                  Montigate LLC —{" "}
                  <a
                    href="mailto:info@chatkit.cc"
                    className="text-ink underline underline-offset-4 hover:text-deep"
                  >
                    info@chatkit.cc
                  </a>
                  . A real person reads it.
                </p>
              </Section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
