import type { Metadata } from "next";
import { Inter, Playfair_Display, Didact_Gothic } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavLinks from "@/components/NavLinks";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const didactGothic = Didact_Gothic({
  subsets: ["latin"],
  variable: '--font-didact-gothic',
  display: 'swap',
  weight: "400"
});

export const metadata: Metadata = {
  title: "Shay Compass | Premier Real Estate Development & Property Solutions",
  description: "Shay Compass specializes in residential and commercial property development, real estate investment, and comprehensive property management solutions. Transform your vision into reality with our expert team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${didactGothic.variable}`}>
        <Navbar>
          <NavLinks />
        </Navbar>
        {children}
        <Footer />
      </body>
    </html>
  );
}
