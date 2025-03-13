import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import "./animation.css";
import Navbar from "@/app/Components/Navbar";
import Footer from "../Components/Footer";
import { ReactLenis } from "@/app/(ROOT)/lenis";
import { Roboto } from 'next/font/google';

export const metadata: Metadata = {
  title: "Cloud Engineering Lab",
  description: "Generated by create next app",
};

const roboto = Roboto({subsets: ['latin']});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Cloud.png" sizes="32x32" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://unpkg.com/lenis@1.2.3/dist/lenis.css"
        ></link>
      </head>

      <ReactLenis root>
        <body className={roboto.className}>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </body>
      </ReactLenis>
    </html>
  );
}
