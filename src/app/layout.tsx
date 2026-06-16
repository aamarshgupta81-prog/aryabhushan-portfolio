import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Advocate Aryabhushan | Legal Researcher & Litigation Associate",
  description: "Premium portfolio of Advocate Aryabhushan, a future Supreme Court practitioner. Dedicated to constitutional law, civil litigation, and corporate law.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} antialiased`}>
      <body className="bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-white selection:text-black min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
