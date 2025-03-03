"use client"
import React from 'react';
import Link from 'next/link';
import Heading from './Components/Heading';
import axios from 'axios';
import Features from './Components/Features';


export default function Home() {

  




  return (
    <div className="min-h-screen w-[100%] bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
          <Heading/>
          </div>
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
            {/* Replace with your actual hero image */}
            
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
            
              <div className="flex items-center space-x-3 overflow-hidden">
                
                <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
              </div>
              
            </div>
            
            
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features/>

    

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your cloud infrastructure?</h2>
              <p className="text-blue-100">
                Get started with Cloud Engineering lab today and experience the difference. Our team is ready to help you design a custom solution.
              </p>
            </div>
            <div>
              <Link href="/contact" className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md text-md font-medium transition-colors">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
}