import React from "react";
import Nav from "@/components/sections/Nav";
import { ProfileForm } from "@/components/sections/my-form";
import Footer from "@/components/sections/Footer";
import {
  LinkedInLogoIcon,
  TwitterLogoIcon,
  Share1Icon,
  ClockIcon,
} from "@radix-ui/react-icons";

// import Lottie from 'react-lottie';
// import animationData from '../../../../public/lottie-blog/Lottie-animation-cube.json';

export function LottiePost () {

// const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     };
    

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="z-10 w-full items-center justify-between text-sm lg:flex pb-6">
        <Nav />
      </div>
      <div className="max-w-5xl">
        <p className="py-4">Blog post</p>
        <h1 className="text-3xl md:text-3xl xl:text-3xl font-bold tracking-tight pb-2">
          Enhancing Your Next.js Application with Lottie Files: Adding
          Eye-catching Animations Without Sacrificing Performance
        </h1>

        <small>Manuel Yemoh - Feb 14, 2024</small>

        <div className="flex items-center gap-4 py-6">
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
        <img
          alt="Cover image"
          className="aspect-video overflow-hidden rounded-lg object-cover mt-6 mb-2"
          src="/lottie-blog-image.webp"
        />
        <div className="flex gap-2 items-center pb-6">
            <ClockIcon className="w-4 h-4"/>
            <small className="relative top-[1px]">15 Minutes read</small>
        </div>

        <p>
          In the dynamic realm of web and mobile development, animations play a
          crucial role in enhancing user experience and conveying information
          effectively. However, implementing animations traditionally has often
          been a complex and time-consuming endeavor, requiring expertise in
          both design and development. Enter Lottie files, a revolutionary
          solution that streamlines the integration of high-quality animations
          into digital projects with remarkable ease. Lottie, developed by
          Airbnb and now maintained by the open-source community, offers
          developers a powerful toolset to incorporate vibrant animations
          seamlessly.
        </p>
        <p className="pt-4">
          Leveraging the lightweight and versatile JSON-based format, Lottie
          files encapsulate complex animations created in popular design tools
          such as Adobe After Effects, allowing them to be rendered natively in
          web, iOS, and Android applications. This innovative approach bridges
          the gap between designers and developers, empowering both to
          collaborate efficiently and bring captivating animations to life
          across platforms.
        </p>
      </div>
      <div>
      {/* <Lottie options={defaultOptions} /> */}
      </div>
      <div className="w-full py-14">
        <h2 className="text-center text-2xl md:text-3xl font-bold py-6 mx-auto px-6">
          Get in touch with me
        </h2>
        <ProfileForm />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
};