import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Chatkit",
  description:
    "The terms that govern your use of Chatkit and chatkit.cc, operated by Montigate LLC.",
};

/** Static for the same reason /privacy is: the footer links here from every
 *  page, and a legal page that depends on a database is a legal page that can
 *  404 when the database has a bad day. */
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

export default function TermsPage() {
  return (
    <>
      <section className="relative bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-dotted-mist [mask-image:radial-gradient(ellipse_60%_70%_at_center,_black_0%,_transparent_85%)] [-webkit-mask-image:radial-gradient(ellipse_60%_70%_at_center,_black_0%,_transparent_85%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-28 sm:pt-32 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <p className="text-[14px] font-medium text-deep/60">Legal</p>
            <h1 className="mt-4 text-4xl sm:text-6xl tracking-tight text-ink leading-[1] font-normal">
              Terms of{" "}
              <span className="font-serif-italic text-deep">
                service<span className="text-deep/40">.</span>
              </span>
            </h1>
            <p className="mt-5 text-deep/70 leading-relaxed text-[16px] max-w-[620px]">
              The deal between you and us: what you may build, what we owe you,
              and what happens when either side wants out.
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
              <Section id="agreement" title="1. The agreement">
                <p>
                  These terms are a contract between you and{" "}
                  <strong>Montigate LLC</strong> {"("}&ldquo;we&rdquo;,
                  &ldquo;us&rdquo;{")"}, covering Chatkit — the dashboard at
                  chatkit.cc, the REST API, the chat widget and the SDKs. By
                  creating an account or calling the API you accept them. If you
                  are accepting on behalf of a company, you are confirming you
                  can bind that company.
                </p>
              </Section>

              <Section id="account" title="2. Your account">
                <p>
                  Keep your credentials and API keys to yourself — anything done
                  with your keys is treated as done by you. Tell us at{" "}
                  <a
                    href="mailto:info@chatkit.cc"
                    className="text-ink underline underline-offset-4 hover:text-deep"
                  >
                    info@chatkit.cc
                  </a>{" "}
                  if you think a key has leaked and we will rotate it. You must
                  be old enough to enter a contract where you live.
                </p>
              </Section>

              <Section id="acceptable-use" title="3. What you may not do">
                <p>Do not use Chatkit to:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-deep/40">
                  <li>
                    send spam, bulk unsolicited messages, or anything the
                    recipient did not ask for;
                  </li>
                  <li>
                    harass, threaten, defraud or impersonate anyone, or transmit
                    malware;
                  </li>
                  <li>
                    break the law that applies to you or to the people you are
                    messaging, including data-protection and
                    electronic-communications rules;
                  </li>
                  <li>
                    probe, overload or reverse-engineer the service, or work
                    around rate limits and quotas;
                  </li>
                  <li>
                    resell Chatkit as a standalone competing product, as opposed
                    to embedding it in your own.
                  </li>
                </ul>
                <p>
                  We may suspend an account that is actively harming the service
                  or other customers. Where the situation allows it, we tell you
                  first and give you a chance to fix it.
                </p>
              </Section>

              <Section id="your-data" title="4. Your data stays yours">
                <p>
                  You own the conversations, messages and end-user records you
                  put into Chatkit. You grant us only the permission needed to
                  run the service: to store, transmit and display that content
                  to you and the people you are talking to. We do not sell it and
                  we do not use it to train AI models.
                </p>
                <p>
                  For your end users&apos; personal data you are the controller
                  and we are the processor. You are responsible for having a
                  lawful basis to collect it and for telling your users what you
                  collect. How we handle data is set out in our{" "}
                  <a
                    href="/privacy"
                    className="text-ink underline underline-offset-4 hover:text-deep"
                  >
                    privacy policy
                  </a>
                  , which forms part of these terms.
                </p>
              </Section>

              <Section id="availability" title="5. Availability and changes">
                <p>
                  We work to keep Chatkit up and fast, but we do not promise a
                  specific uptime percentage unless we have signed a separate
                  agreement with you that says so. Maintenance, third-party
                  outages and incidents happen.
                </p>
                <p>
                  The API may evolve. We avoid breaking changes to a published,
                  stable endpoint without notice; where a breaking change is
                  unavoidable we give reasonable warning at the address on your
                  account.
                </p>
              </Section>

              <Section id="payment" title="6. Plans and payment">
                <p>
                  Paid plans are billed in advance for the period shown at
                  checkout and renew automatically until you cancel. Cancel any
                  time and you keep access until the end of the period you have
                  paid for; we do not pro-rate partial periods unless the law
                  where you live requires it. Prices can change, but not in the
                  middle of a period you have already paid for. Fees exclude
                  taxes, which are yours to pay.
                </p>
              </Section>

              <Section id="ip" title="7. Intellectual property">
                <p>
                  Chatkit, its software and its branding belong to Montigate LLC.
                  These terms grant you a limited, non-exclusive,
                  non-transferable right to use the service while your account is
                  in good standing — nothing more. Our SDKs are separately
                  licensed; where an SDK ships its own licence, that licence
                  governs the SDK.
                </p>
              </Section>

              <Section id="warranty" title="8. Warranties and liability">
                <p>
                  Chatkit is provided &ldquo;as is&rdquo;. To the fullest extent
                  the law allows, we disclaim implied warranties of
                  merchantability, fitness for a particular purpose and
                  non-infringement.
                </p>
                <p>
                  Neither side is liable for indirect, incidental or
                  consequential damages, or for lost profits or lost data. Our
                  total liability arising out of these terms is capped at what
                  you paid us in the twelve months before the claim, or USD 100
                  if you are on a free plan. Nothing here limits liability that
                  cannot lawfully be limited — fraud or death and personal injury
                  caused by negligence, for instance. Some jurisdictions do not
                  allow these exclusions, in which case they apply to you only as
                  far as the law permits.
                </p>
              </Section>

              <Section id="termination" title="9. Ending the agreement">
                <p>
                  You can close your account at any time. We can terminate for a
                  material breach that you have not fixed after notice, or if we
                  stop offering the service — in which case we give reasonable
                  warning and refund any unused prepaid time. On termination your
                  right to use Chatkit ends, and we delete your data on the
                  schedule in the privacy policy. Export anything you want to
                  keep before you close the account.
                </p>
              </Section>

              <Section id="changes" title="10. Changes to these terms">
                <p>
                  We may update these terms. The date at the top changes, and for
                  material changes we email account holders before they take
                  effect. Continuing to use Chatkit after that means you accept
                  the new version.
                </p>
              </Section>

              <Section id="contact" title="11. Contact">
                <p>
                  Montigate LLC —{" "}
                  <a
                    href="mailto:info@chatkit.cc"
                    className="text-ink underline underline-offset-4 hover:text-deep"
                  >
                    info@chatkit.cc
                  </a>
                  .
                </p>
              </Section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
