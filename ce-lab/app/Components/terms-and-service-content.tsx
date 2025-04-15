"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

interface TermsAndService {
  id: string;
  title: string;
  content: string;
}

const TermsAndServiceContent = () => {
  const [data, setData] = useState<TermsAndService[]>([]);

  useEffect(() => {
    axios
      .get("/api/termsofService")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      {data.map((termsofService) => (
        <div key={termsofService.id} className="flex flex-col mb-5">
          <h1 className="text-3xl font-bold" id={termsofService.id}>
            {termsofService.title}
          </h1>
          <p className="text-gray-600 mt-2">
            {termsofService.content}
          </p>
        </div>
      ))}
    </>
  );
};

export default TermsAndServiceContent;
