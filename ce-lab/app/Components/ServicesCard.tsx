"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

// Define a type for the service data
interface Service {
  id: number;
  title: string;
  description: string;
}

const ServicesCard = () => {
  const [data, setData] = useState<Service[]>([]); // Type data as an array of `Service`

  useEffect(() => {
    axios.get("/api/services")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {data.map((service) => (
        <div
          key={service.id} // Use `id` instead of `title` as key (better for performance)
          className="flex flex-col gap-5 justify-start p-6 items-center aspect-square w-[90%] lg:w-[80%] hover:scale-102 duration-300 shadow-2xl transition-transform hover:bg-blue-700 active:bg-blue-700 active:text-white focus:bg-blue-700 focus:text-white text-black hover:text-white mx-auto rounded-md"
        >
          <p className="font-bold text-2xl">{service.title}</p>
          <p>{service.description}</p>
        </div>
      ))}
    </>
  );
};

export default ServicesCard;
