import React from 'react';
import { Button } from "../ui/button";

import { LinkedInLogoIcon, TwitterLogoIcon, Share1Icon } from "@radix-ui/react-icons";


const BlogPost: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-4 mx-auto px-6 pb-16 border-b w-full">
      <div className='max-w-5xl mx-auto'>
      <p className="text-gray-500 font-bold dark:text-gray-400">13 February 2024 - Blog</p>
      <div className="space-y-2 pt-6 pb-6">
        <h1 className="text-3xl md:text-7xl xl:text-8xl font-bold tracking-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      </div>
      <img
        alt="Cover image"
        className="aspect-video overflow-hidden rounded-lg object-cover my-6"
        height={320}
        src="/futrue-of-coding.webp"
        width={640}
      />
      <Button className='mb-12'>Read more</Button>
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full hover:scale-[1.1] transition-all">
          <LinkedInLogoIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
        <button className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full hover:scale-[1.1] transition-all">
          <TwitterLogoIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
        <button className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full hover:scale-[1.1] transition-all">
          <Share1Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
      </div>
    </div>
  );
};

export default BlogPost;
