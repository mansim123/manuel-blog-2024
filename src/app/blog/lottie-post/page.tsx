"use client";

import React from "react";
import Nav from "@/components/sections/Nav";
import { ProfileForm } from "@/components/sections/my-form";
import Footer from "@/components/sections/Footer";
import Image from "next/image";

import {
  LinkedInLogoIcon,
  TwitterLogoIcon,
  Share1Icon,
  ClockIcon,
} from "@radix-ui/react-icons";

import CodeBlock from "@/components/ui/codeBlock";

import Lottie from "react-lottie";
import animationData from "@/json/Lottie-animation-cube.json";
import animationDataSquare from "@/json/Lottie-animation-squares.json";

const LottiePostPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsSquare = {
    loop: true,
    autoplay: true,
    animationData: animationDataSquare,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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

        <small>Manuel Yemoh - Feb 16, 2024</small>

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
        <Image
          alt="Cover image"
          className="aspect-video overflow-hidden rounded-lg object-cover mt-6 mb-2"
          src="/lottie-blog-image.webp"
        />
        <div className="flex gap-2 items-center pb-14">
          <ClockIcon className="w-4 h-4" />
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
        <Lottie options={defaultOptions} height={400} width={400} />
        <p className="pt-4">
          Leveraging the lightweight and versatile JSON-based format, Lottie
          files encapsulate complex animations created in popular design tools
          such as Adobe After Effects, allowing them to be rendered natively in
          web, iOS, and Android applications. This innovative approach bridges
          the gap between designers and developers, empowering both to
          collaborate efficiently and bring captivating animations to life
          across platforms.
        </p>
        <h2 className="text-left text-2xl md:text-3xl font-bold pt-16 ">
          How to install with Next.js 13
        </h2>
        <p className="pt-4">
          So let&apos;s get into the crux of it, how to install lottie files with
          Next.js 13, we will go through the steps from start to finish and get
          you started with your first lottie animations.
        </p>
        <p className="pt-4">
          I would suggest using{" "}
          <a
            className="text-blue-500 underline"
            href="https://code.visualstudio.com/"
            target="_blank"
          >
            visual studio code
          </a>{" "}
          as your coding IDE and also make sure you have the latest version of{" "}
          <a
            className="text-blue-500 underline"
            href="https://nodejs.org/en/download"
            target="_blank"
          >
            node
          </a>{" "}
          installed
        </p>
        <h3 className="text-left text-2xl md:text-2xl font-bold pt-16 ">
          Step 1. Install Next.js 13
        </h3>
        <p className="pt-4">
          Inside Visual Studio code open up your terminal and type the command
          below to install Next.js 13
        </p>
        <CodeBlock>{` npx create-next-app@latest`}</CodeBlock>
        <p className="pt-4">
          The terminal will give you some prompts in order to enable features
          such as Tailwind CSS and TypeScript. Below are the settings I used for
          this example.
        </p>
        <CodeBlock>
          {`
√ What is your project named? ... lottie-animation
√ Would you like to use TypeScript? ... Yes
√ Would you like to use ESLint? ... Yes
√ Would you like to use Tailwind CSS? ... Yes
√ Would you like to use "src/" directory? ... Yes
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to customize the default import alias (@/*)? ... No"
            `}
        </CodeBlock>
        <p className="pt-4">
          Now, let&apos;s navigate to the folder where we&apos;ll be working. You can do
          this by either going to &apos;File&apos; &#62; &apos;Open Folder&apos; and selecting the
          project we&apos;re working on, or you can use the following commands to
          navigate to the folder:
        </p>
        <CodeBlock>{" cd lottie-animation"}</CodeBlock>
        <p className="pt-4">Now, let&apos;s install the npm packages we need</p>
        <CodeBlock>{" npm install"}</CodeBlock>
        {/* <p className="pt-4">Once that&apos;s done we will be able to load our test server using the command below and accessing http://localhost:3000/ on our browser.</p>
        <CodeBlock
          code={
            "npm run dev"
          }
        /> */}
        <h3 className="text-left text-2xl md:text-2xl font-bold pt-16 ">
          Step 2. Install Lottie
        </h3>
        <p className="pt-4">
          You&apos;ll need to visit Lottie&apos;s website to either download a free Lottie
          file or purchase a premium one. For this example, I&apos;m using this
          Lottie file:{" "}
          <a
            className="text-blue-500 underline"
            href="https://lottiefiles.com/animations/quad-cube-sliders-v2-JTpuLQtXE1"
            target="_blank"
          >
            Download here
          </a>
          . (P.S. Don&apos;t forget to credit the author if you use a free Lottie
          file.){" "}
        </p>
        <p className="pt-4">Once you have the file, we will need to:</p>
        <ol className="list-decimal pl-8 py-6">
          <li className="mb-2">
            Go to your project&apos;s folder structure and create a folder named
            &quot;json&quot; inside the &quot;src&quot; directory. This is where your Lottie file
            will reside.
          </li>
          <li className="mb-2">
            Rename the Lottie file to &quot;Lottie-animation-cube.json&quot;.
          </li>
        </ol>
        <p className="pt-4">
          Okay let&apos;s get Lottie installed in our application
        </p>
        <CodeBlock>{" npm i react-lottie"}</CodeBlock>
        <p className="pt-4">
          Now let&apos;s get to coding, we only need to change 1 file which will be
          the page.tsx file to import Lottie and also start our first animation
        </p>
        <CodeBlock>
          {`
"use client";

import Lottie from "react-lottie";
import animationData from "@/json/Lottie-animation-cube.json";
          
export default function Home() {
          
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Lottie options={defaultOptions} height={400} width={400} />
    </main>
  );
}
        `}
        </CodeBlock>
        <h3 className="text-left text-2xl md:text-2xl font-bold pt-16 ">
          Step 3. Let&apos;s run the application
        </h3>
        <p className="pt-4">
          If all went well we can now run the command to start the server
        </p>
        <CodeBlock>{" npm run dev"}</CodeBlock>
        <p className="pt-4">
         Success you have now implimented your first Lottie animation! for more properties please visit the NPM documentation location <a className="text-blue-500 underline" href="https://www.npmjs.com/package/react-lottie" target="_blank">here</a>
        </p>
        <Lottie options={defaultOptionsSquare} height={400} width={400} />
        <small>Credits: <a className="text-blue-500 underline" href="https://lottiefiles.com/ision_industries" target="_blank">Ision Industries for the Lottie animations</a></small>
      </div>
      <div className="w-full py-14">
        <h2 className="text-center text-2xl md:text-3xl font-bold py-6 mx-auto px-6">
          Any questions? Get in touch with me
        </h2>
        <ProfileForm />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
};

export default LottiePostPage;
