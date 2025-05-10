import ServicesCard from "@/app/Components/ServicesCard";
import React from "react";

const page = () => {
  return (
    <section className="relative top-16 px-10 max-w-7xl mx-auto min-h-screen pb-20">
      <div className="w-[100%] mt-8 h-[150px] md:h-[200px] lg:h-[250px] rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 flex justify-center items-center">
        <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-white">
          Services
        </p>
      </div>
      <div className="flex flex-col gap-2 my-10 w-[90%] mx-auto items-center">
        <p className="font-bold text-blue-700">Our Services</p>
        <p className="mt-0 text-xl md:text-3xl font-bold">
          Your satisfaction is our mission
        </p>
      </div>
      <div className="card-container w-[100%] h-[100%] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 mb-15">
        <ServicesCard />
      </div>
      <div className="start_journey text-white h-25 md:h-40 xl:h-60 xl:rounded-xl w-[100%] bg-gradient-to-tl from-blue-900 to-blue-600 rounded-md flex flex-col items-center justify-evenly">
        <p className="font-bold text-md md:text-2xl lg:text-4xl">
          Start your journey with us
        </p>
        <a href="mailto: cloudengineeringlab@gmail.com">
          <button className="border-1 border-white px-2 py-1 md:px-4 md:py-3 rounded-sm md:rounded-lg hover:cursor-pointer hover:bg-white hover:text-blue-700 transition-transform duration-600">
            Contact us
          </button>
        </a>
      </div>
    </section>
  );
};

export default page;
