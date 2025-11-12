import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

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
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
        <Navbar>
          <NavLinks />
        </Navbar>
        {children}
        <Footer />
      </body>
    </html>
  );
}
