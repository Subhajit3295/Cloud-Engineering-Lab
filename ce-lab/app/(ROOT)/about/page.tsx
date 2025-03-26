"use client";
import React from "react";
import Image from "next/image";
import Testimonials from "../../Components/Testimonials";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white mt-16">
      {/* Hero Section */}
      <div className="py-16 px-8 md:px-16 lg:px-24 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-blue-600">Mission</span> and{" "}
            <span className="text-blue-600">Values</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Pioneering cloud solutions to empower businesses in the digital
            transformation journey
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              We, Cloud Engineering Lab(CES) in merger with Shyamala Systems since 1998,
              working together by providing and
              demonstrating new ideas to a wide range of customers throughout
              the globe. We deliver software products based on customer needs .
              Our leaders have wide range of experience from leading MNCS. We
              provide end to end solutions to customers starting from
              analysis,design,planning and execution phases. We work on front
              end and back end technologies,frameworks . Over a couple of years,
              we are pioneer in Cloud Computing, Aws Solution Architect, Web
              technologies,Web development, Deploying and managing software
              products in Aws Cloud Environment. We upgrade ourself as per the
              latest market need and Cloud market is No-1 market in terms of
              growth for both freshers and experienced candidates and we are
              pioneer for that. We provide online training,corporate training,
              Free Counselling/Seminars for Colleges/Fresh Graduates,
              Professional Trainings to College Students,Freshers and those who
              want to upskill their career. We provide internships to graduates
              who will work under our mentorship.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden h-fit shadow-xl">
            <div className="bg-gray-200 w-full relative aspect-video h-fit">
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <Image
                src="/homepage-cloud.jpg"
                alt=""
                height={400}
                width={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 px-8 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                icon: "🚀",
                description:
                  "We constantly push boundaries to discover new and better ways to solve complex cloud challenges.",
              },
              {
                title: "Reliability",
                icon: "🛡️",
                description:
                  "We build solutions you can trust, with uptime and security as our top priorities.",
              },
              {
                title: "Collaboration",
                icon: "🤝",
                description:
                  "We believe in working closely with our clients, becoming an extension of their team.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Our Approach Section with Visual */}
      <div className="py-16 px-8 md:px-16 lg:px-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <p className="mb-4">
              We believe in a consultative approach that starts with
              understanding your unique business challenges before proposing any
              technical solutions.
            </p>
            <p className="mb-6">
              Our methodology combines cutting-edge technology with proven
              processes to deliver cloud infrastructure that scales with your
              needs.
            </p>

            <div className="space-y-4">
              {["Discover", "Design", "Deploy", "Optimize"].map(
                (step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold mr-3">
                      {index + 1}
                    </div>
                    <span className="text-lg">{step}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="bg-blue-700 p-8 rounded-lg">
            <div className="bg-blue-900 h-64 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/process_diagram.png"
                height={800}
                width={1600}
                alt="Process Diagram"
                className="text-white w-[100%] h-[100%]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Testimonials />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-8 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Cloud Infrastructure?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how our team can help you solve tomorrow&apos;s challenges
            today.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="mailto: info@cloudengineeringlab.com">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors hover:cursor-pointer">
                Contact Us
              </button>
            </a>
            {/* <Link href="/get-started">
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
                Schedule a Demo
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
