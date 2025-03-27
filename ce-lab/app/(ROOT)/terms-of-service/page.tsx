import React from "react";
import TermsAndServiceContent from "@/app/Components/terms-and-service-content";

const page = () => {
  return (
    <div className="w-[90%] mx-auto relative top-16">
      <div className="w-[100%] mt-8 h-[150px] md:h-[200px] lg:h-[250px] rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 flex justify-center items-center">
        <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-white">
          Terms of Service
        </p>
      </div>
      <main className="pb-20 sticky top-0">
        <div className=" w-[100%] my-20 h-[100svh] flex">
          <ol className="sidebar list-decimal list-inside md:flex flex-col gap-4 mt-8 w-fit hidden">
            <li className="hover:text-blue-800 font-bold transition-colors">
              <a href="#introduction">Introduction</a>
            </li>
            <li className="hover:text-blue-800 font-bold transition-colors">
              <a href="#use-of-services">Use of Services</a>
            </li>
            <li className="hover:text-blue-800 font-bold transition-colors">
              <a href="#user-accounts">User Accounts</a>
            </li>
            <li className="hover:text-blue-800 font-bold transition-colors">
              <a href="#intellectual-property">Intellectual Property</a>
            </li>
            <li className="hover:text-blue-800 font-bold transition-colors">
              <a href="#limitation-of-liability">Limitation of Liability</a>
            </li>
            <li className="hover:text-blue-800 font-bold transition-colors">
              <a href="#privacy-policy">Privacy Policy</a>
            </li>
            <li className="hover:text-blue-800 font-bold transition-colors">
              <a href="#modifications-to-terms">Modifications to Terms</a>
            </li>
            <li className="hover:text-blue-800 font-bold transition-colors">
              <a href="#termination">Termination</a>
            </li>
            <li className="hover:text-blue-800 font-bold transition-colors">
              <a href="#governing-law">Governing Law</a>
            </li>
            <li className="hover:text-blue-800 font-bold transition-colors">
              <a href="#contact-us">Contact Us</a>
            </li>
          </ol>

          <section className="content w-[100%] p-8 overflow-y-scroll">
            <TermsAndServiceContent />
          </section>
        </div>
      </main>
    </div>
  );
};

export default page;
