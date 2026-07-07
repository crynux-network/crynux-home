import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const title = "Crynux - Decentralized Orchestration Layer on EdgeAI";
const description =
  "Permissionless AI inference, fine-tuning and training, powered by a global network of edge devices.";

export const metadata: Metadata = {
  metadataBase: new URL("https://crynux-home.imalfect.workers.dev"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://crynux-home.imalfect.workers.dev",
    siteName: "Crynux",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Crynux" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.className} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh flex-col">
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
