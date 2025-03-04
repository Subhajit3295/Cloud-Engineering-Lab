"use client";
import React, { useState, useEffect, use } from "react";
import axios from "axios";
import Image from "next/image";

interface Blog {
  title: string;
  id: number;
  content: string;
  tags: string;
  image: string,
  slug: string
}

const Page = ({ params }: { params: Promise<{ blogsid: string }> }) => {
  const unwrappedParams = use(params);
  const blogIndex = Number(unwrappedParams.blogsid);

  const [data, setData] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get("/blogs.json")
      .then((response) => {
        if (response.data.blogs && Array.isArray(response.data.blogs)) {
          setData(response.data.blogs);
        } else {
          console.error("Invalid data format");
        }
      })
      .catch((error) => console.error("Unable to fetch: " + error));
  }, []);

  return (
    <section className="h-[100%] mt-16 mb-5">
      {blogIndex > 0 && blogIndex <= data.length && data[blogIndex - 1] ? (
        <div
          key={data[blogIndex - 1].id}
          className="lg:w-[80%] w-[90%] mx-auto pt-10 flex flex-col gap-4"
        >
          {/* Blog Heading */}
          <p className="text-3xl lg:text-5xl text-black font-bold text-center">
            {data[blogIndex - 1].title}
          </p>

          {/* Blog Image */}
          <Image
            src={data[blogIndex -1].image}
            height={500}
            width={1000}
            alt={data[blogIndex -1].slug}
            className="w-full md:w-[80%] mx-auto my-10 aspect-video"
          />

          <p className="mt-3 text-lg">{data[blogIndex - 1].content}</p>
        </div>
      ) : (
        <div className="w-full flex flex-col justify-start items-center h-[100svh] mt-0">
          <Image
            src="/Cloud.png"
            alt="Loading Animation"
            width={500}
            height={500}
            unoptimized={true}
            className="animate-pulse"
          />
        </div>
      )}
    </section>
  );
};

export default Page;
