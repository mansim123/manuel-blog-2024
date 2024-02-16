"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";


// import BlogData from "../../app/data/blog-data";

const BlogPost: React.FC = () => {


  return (
    <div className="flex flex-col gap-4 py-4 mx-auto pb-16 border-b w-full">
      <div className="max-w-5xl mx-auto">
        <p className="text-gray-500 font-bold dark:text-gray-400">
          13 February 2024 - Blog
        </p>
        <div className="space-y-2 pt-6 pb-6">
          <h1 className="text-3xl md:text-7xl xl:text-7xl font-bold tracking-tight">
            Enhancing Your Next.js Application with Lottie Files: Adding
            Eye-catching Animations Without Sacrificing Performance
          </h1>
        </div>
        <a href="/blog/lottie-post">
          <Image
            alt="Cover image"
            className="aspect-video overflow-hidden rounded-lg object-cover my-6"
            height={320}
            src="/lottie-blog-image.webp"
            width={640}
          />
        </a>
        <a href="/blog/lottie-post">
          <Button className="mb-12">Read more</Button>
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
