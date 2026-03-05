import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "DC Duggu | Professional Chaos Engineer",
  description:
    "The digital universe of DC Duggu - coding weird things and breaking software accidentally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${orbitron.variable} font-sans antialiased bg-[#050505] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
