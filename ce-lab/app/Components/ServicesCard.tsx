"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ServicesCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/services").then((response) => {
      setData(response.data); // Set the data state with the response data
    });
  }, []);

  return (
    <>
      {data &&
        data.map((service: any) => (
          <div
            key={service.title}
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
