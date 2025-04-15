"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Testimonials = () => {
  interface Testimonial {
    comment: string;
    id: number;
  }

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    axios
      .get("/testimonials.json")
      .then((response) => {
        setTestimonials(response.data.testimonials);
      })
      .catch((error) => console.error("unable to fetch: " + error));
  }, []);

  return (
    <>
      {testimonials.length > 0 &&
        testimonials.map((test, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md">
            <p className="text-gray-700 italic">&quot;{test.comment}&quot;</p>
          </div>
        ))}
    </>
  );
};

export default Testimonials;
