"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Features = () => {
  const [data, setData] = useState<Feature[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => {
        console.log("Fetched Data:", response.data);
        setData(response.data.featuredlabs);
        console.log(response.data.featuredlabs)
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading features...</p>;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Labs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data && data.length > 0 ? (
            data.map((feature) => (
              <div
                className="bg-gray-50 p-3 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow w-fit mx-auto"
                key={feature.title}
              >
                <div className="w-80 lg:w-100 h-50 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Image src={feature.image} alt={feature.title} className="w-[100%] h-[100%]" height={200} width={400}/>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No features available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
