"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Blog {
  title: string;
  id: number;
  image: string, 
  slug: string
}

const BlogsCardContainer = () => {
  const [data, setData] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get("/blogs.json")
      .then((response) => {
        setData(response.data.blogs);
      })
      .catch((error) => console.error("unable to fetch: " + error));
  }, []);

  return (
    <div
      className={
        data && data.length > 0
          ? "blogscard-container px-4 grid lg:grid-cols-3 md:grid-cols-2 gap-5 w-full"
          : "px-4 grid grid-cols-1 w-full"
      }
    >
      {data.length > 0 ? (
        data.map((blog, index) => (
          <div
            className="bg-gray-50 p-3 rounded-xl border-gray-300 border hover:shadow-lg hover:scale-105 transition-all duration-300 w-fit mx-auto flex flex-col"
            key={index}
          >
            <Image
              src={blog.image}
              height={400}
              width={800}
              alt={blog.slug}
              className="w-full aspect-video"
            />
            <p className="title text-xl my-4 font-bold">{blog.title}</p>
            <p className="description my-3"></p>
            <div className="gap-5 items-center flex">
              <a
                href={`blog/${blog.id}`}
                className="bg-blue-700 hover:bg-blue-800 border rounded-md py-2 px-5 hover:cursor-pointer text-white focus:bg-blue-800"
              >
                Read
              </a>
              <a
                href={`blog/${blog.id}`}
                target="_blank"
                className="rounded-md h-fit w-fit hover:cursor-pointer hover:text-blue-800 focus:text-blue-800"
              >
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
            </div>
          </div>
        ))
      ) : (
        <div className="w-[100%] flex flex-col justify-start items-center h-[100svh] relative mt-0">
          <Image
            src="/Cloud.png"
            alt="Animated GIF"
            width={500}
            height={500}
            unoptimized={true}
            className="animate-pulse"
          />
        </div>
      )}
    </div>
  );
};

export default BlogsCardContainer;
