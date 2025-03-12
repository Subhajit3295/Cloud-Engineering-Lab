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
      <div className="card-container w-[100%] h-[100%] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        <ServicesCard />
      </div>
    </section>
  );
};

export default page;
