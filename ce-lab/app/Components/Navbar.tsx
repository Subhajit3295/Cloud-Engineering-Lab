"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              {/* <CloudSvg/> */}
              <Image
              src="/cloud-logo.svg"
              width={100}
              height={100}
              alt=''
              />
              <span className="text-xl font-bold text-gray-900">Cloud Engineering Lab</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/products" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                Products
              </Link>
              <Link href="/solutions" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                Solutions
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/blog" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                Blog
              </Link>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Get Started
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-md shadow-md">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600">
            Products
          </Link>
          <Link href="/solutions" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600">
            Solutions
          </Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600">
            About
          </Link>
          <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600">
            Blog
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;