"use client";
import React from "react";
import Heading from "../Components/Heading";
import Features from "../Components/Features";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-[100%] bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 h-[100svh] flex">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 slide-right">
            <Heading />
          </div>
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl slide-left">
            {/* Replace with your actual hero image */}

            <Image 
              src="/homepage-cloud.jpg"
              alt=""
              width={2000}
              height={1000}
              className="w-[100%] h-64 md:h-96"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="md:flex items-center justify-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to transform your cloud infrastructure?
              </h2>
              <p className="text-blue-100">
                Get started with Cloud Engineering lab today and experience the
                difference. Our team is ready to help you design a custom
                solution.
              </p>
            </div>
            <div>
              {/* <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md text-md font-medium transition-colors"
              >
                Schedule a Consultation
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
