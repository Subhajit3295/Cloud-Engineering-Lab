import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"

import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
export const metadata: Metadata = {
  title: "Cloud Engineering Lab",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/Cloud.png" sizes="32x32"/>
      <body>
        <Navbar/>
        {children}
        <Footer/>
        <Analytics/>
      </body>
      
    </html>
  );
}
