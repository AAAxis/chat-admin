import Image from "next/image";
import Link from "next/link";

function LogoIcon() {
  return (
    <Image
      src="/tclogo.png"
      alt="Chatkit"
      width={36}
      height={36}
      className="h-9 w-9"
    />
  );
}

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Docs", href: "/sdk" },
      { label: "API reference", href: "/api-reference" },
      { label: "SDKs", href: "/sdk" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Support", href: "/support" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

function FooterCard() {
  return (
    <div className="w-full">
      <div className="bg-mist rounded-[48px] border border-mist shadow-sm overflow-hidden">
        <div className="bg-white rounded-[40px] m-2 shadow-sm">
          <div className="p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-8">
              <Link href="/" className="flex items-center gap-2.5 w-fit">
                <LogoIcon />
                <span className="text-[26px] tracking-tight text-ink">
                  Chatkit
                </span>
              </Link>

              <p className="text-deep/70 leading-relaxed text-[16px] font-normal max-w-[320px]">
                Drop-in chat support for React Native and web. Paste, ship,
                reply.
              </p>
            </div>

            {/* Link columns */}
            {COLUMNS.map((col) => (
              <div key={col.title} className="space-y-6">
                <h4 className="text-[14px] font-medium text-deep/60">
                  {col.title}
                </h4>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[15px] font-medium text-deep hover:text-ink transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom legal bar (inside outer mist, outside white box) */}
        <div className="px-6 sm:px-12 md:px-16 lg:px-20 py-5 flex flex-col md:flex-row justify-between items-center gap-6 text-[15px]">
          <p className="text-deep/70 font-medium">
            © {new Date().getFullYear()} Montigate LLC. All rights reserved.
          </p>
          <div className="flex gap-8 text-deep/70 font-medium items-center">
            <a href="/privacy" className="hover:text-ink transition-colors">
              Privacy
            </a>
            <div className="w-[1px] h-4 bg-deep/20" />
            <a href="/terms" className="hover:text-ink transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl pt-10 pb-10 px-4 sm:px-6">
      <FooterCard />
    </footer>
  );
}
