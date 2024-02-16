'use client';
import React from "react";
import { Button } from "../ui/button";

import {
  LinkedInLogoIcon,
  TwitterLogoIcon,
  Share1Icon,
} from "@radix-ui/react-icons";

import BlogData from "../../app/data/blog-data";

const BlogPost: React.FC = () => {

  const shareOnLinkedIn = (url: string, title: string) => {
    const encodedUrl = encodeURIComponent(url);
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${title}`;
    window.open(shareUrl, '_blank');
  };
  
  const shareToTwitter = () => {
    const tweetText = encodeURIComponent('Check out this blog post: ' + window.location.href);
    const url = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(url, '_blank');
  };

  const postUrl = 'https://manuelyemohblog.netlify.app/blog/lottie-post';
  const postTitle = 'Enhancing Your Next.js Application with Lottie Files: Adding Eye-catching Animations Without Sacrificing Performance';

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
          <img
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
        <div className="flex items-center gap-4">
          <button onClick={() => shareOnLinkedIn(postUrl, postTitle)} className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full hover:scale-[1.1] transition-all">
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
