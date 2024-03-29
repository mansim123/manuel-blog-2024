import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const BlogPost: React.FC = () => {
  const blogPosts = [
    {
      blogData: "15 March 2024 - Blog",
      blogTitle:
        "Elevate Your Web Design: Unleashing GSAP ScrollTrigger for Dynamic Animations",
      blogURL: "/blog/gsap-post",
      blogImage: "/gsap-blog-image.webp",
    },
    {
      blogData: "01 March 2024 - Blog",
      blogTitle:
        "Enhancing UX/UI and Accessibility: Embracing Dark Mode on Your Website",
      blogURL: "/blog/dark-mode-post",
      blogImage: "/dark-mode-blog-image.webp",
    },
    {
      blogData: "22 February 2024 - Blog",
      blogTitle:
        "Shadcn and Next.js: Tailoring UI Components to Your Project's Needs",
      blogURL: "/blog/shadcn-post",
      blogImage: "/shadcn-blog-image.webp",
    },
    {
      blogData: "16 February 2024 - Blog",
      blogTitle:
        "Enhancing Your Next.js Application with Lottie Files: Adding Eye-catching Animations Without Sacrificing Performance",
      blogURL: "/blog/lottie-post",
      blogImage: "/lottie-blog-image.webp",
    },
    
  ];

  // Map function to create blog post components
  const blogPostComponents = blogPosts.map((post, index) => (
    <div key={index} className="flex flex-col gap-4 py-4 mx-auto pb-16 w-full">
      <div className="max-w-5xl mx-auto">
        <p className="text-gray-500 font-bold dark:text-gray-400">
          {post.blogData}
        </p>
        <div className="space-y-2 pt-6 pb-6">
          <a href={post.blogURL}>
            <h1 className="text-3xl md:text-7xl xl:text-7xl font-bold tracking-tight">
              {post.blogTitle}
            </h1>
          </a>
        </div>
        <a href={post.blogURL}>
          <Image
            alt=""
            className="aspect-video overflow-hidden rounded-lg object-cover my-6"
            height={320}
            src={post.blogImage}
            width={640}
          />
        </a>
        <a href={post.blogURL}>
          <Button className="mb-12">Read more</Button>
        </a>
      </div>
    </div>
  ));

  return <>{blogPostComponents}</>;
};

export default BlogPost;
