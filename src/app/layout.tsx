import type { Metadata } from "next";
import { Almarai, Instrument_Serif } from "next/font/google";
import "./globals.css";

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  title: "Chatkit",
  description: "Drop-in chat infrastructure for delivery and marketplace apps.",
  // Google Search Console ownership verification. Google will not approve the
  // OAuth consent screen until chatkit.cc is verified to the same account, and
  // the "HTML tag" method needs this meta tag in <head>. Set
  // GOOGLE_SITE_VERIFICATION in Vercel to the token Search Console shows; with
  // the var unset nothing is emitted, which is the correct no-op.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${almarai.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
