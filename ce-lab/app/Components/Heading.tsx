import React from "react";
import Link from "next/link";

const Heading = () => {
  return (
    <>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
        Cloud Solutions for<span className="text-blue-600"> Tomorrow&apos;s</span> Challenges
         
      </h1>
      <p className="text-lg text-gray-600 max-w-lg">
        Streamline your journey with our cutting-edge cloud infrastructure.
        Scale effortlessly, deploy faster, and stay ahead of the competition.
      </p>
      <div className="flex flex-wrap gap-4 pt-4">
        <Link
          href="/journey"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-md font-medium transition-colors"
        >
          Explore Journey
        </Link>
        <Link
          href="/contact"
          className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md text-md font-medium transition-colors"
        >
          Free Demo
        </Link>
      </div>
    </>
  );
};

export default Heading;
