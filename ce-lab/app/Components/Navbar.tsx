"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // Optional for cleaner class management

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              {/* <CloudSvg/> */}
              <Image
                src="/Logo.png"
                width={200}
                height={100}
                alt=""
                className="w-[150px] h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/"
                className={clsx(
                  "px-3 py-2 rounded-md text-sm font-medium",
                  pathname === "/"
                    ? "text-blue-600 font-bold"
                    : "text-gray-900 hover:text-blue-600"
                )}
              >
                Home
              </Link>
              {/* <Link
                href="/products"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
              >
                Products
              </Link> */}
              <Link
                href="/blog"
                className={clsx(
                  "px-3 py-2 rounded-md text-sm font-medium",
                  pathname === "/blog"
                    ? "text-blue-600 font-bold"
                    : "text-gray-900 hover:text-blue-600"
                )}
              >
                Blogs
              </Link>
              <Link
                href="/services"
                className={clsx(
                  "px-3 py-2 rounded-md text-sm font-medium",
                  pathname === "/services"
                    ? "text-blue-600 font-bold"
                    : "text-gray-900 hover:text-blue-600"
                )}
              >
                Services
              </Link>
              <Link
                href="/about"
                className={clsx(
                  "px-3 py-2 rounded-md text-sm font-medium",
                  pathname === "/about"
                    ? "text-blue-600 font-bold"
                    : "text-gray-900 hover:text-blue-600"
                )}
              >
                About
              </Link>
              {/* <Link href="/blog" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                Blog
              </Link> */}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <SidebarProvider className="md:hidden">
            <AppSidebar />
            <main>
              <SidebarTrigger className="absolute top-2 right-2" />
            </main>
          </SidebarProvider>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
    </nav>
  );
};

export default Navbar;
