"use client";

import React from "react";
import Nav from "@/components/sections/Nav";
import { ProfileForm } from "@/components/sections/my-form";
import Footer from "@/components/sections/Footer";
import Image from "next/image";

import { ClockIcon } from "@radix-ui/react-icons";

import CodeBlock from "@/components/ui/codeBlock";

import Lottie from "react-lottie";
import animationData from "@/json/Lottie-animation-pyramid.json";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const LottiePostPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const animateRef = useRef(null);
  const lottieRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

  useEffect(() => {
    let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: animateRef.current,
        start: "top 70%", // when the top of the trigger hits the top of the viewport
        end: "+=300", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: false, //true if you wish to troubleshoot the document
      },
    });

    // add animations and labels to the timeline
    tl.from(animateRef.current, { autoAlpha: 0 }).to(animateRef.current, {
      autoAlpha: 1,
    });

    let t2 = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: lottieRef.current,
        start: "top 70%", // when the top of the trigger hits the top of the viewport
        end: "+=300", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: false, //true if you wish to troubleshoot the document
      },
    });

    // add animations and labels to the timeline
    t2.from(lottieRef.current, { autoAlpha: 0, scale: 0 }).to(
      lottieRef.current,
      {
        autoAlpha: 1,
        scale: 1,
      }
    );
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="z-10 w-full items-center justify-between text-sm lg:flex pb-6">
        <Nav />
      </div>
      <div className="max-w-5xl px-6 lg:px-0">
        <p className="py-4">Blog post</p>
        <h1 className="text-3xl md:text-3xl xl:text-3xl font-bold tracking-tight pb-2">
          Elevate Your Web Design: Unleashing GSAP ScrollTrigger for Dynamic
          Animations
        </h1>

        <small>Manuel Yemoh - Mar 15, 2024</small>

        <Image
          alt="Cover"
          className="aspect-video overflow-hidden rounded-lg object-cover mt-6 mb-2"
          src="/gsap-blog-image.webp"
          width={100}
          height={100}
          layout="responsive"
        />
        <div className="flex gap-2 items-center pb-14">
          <ClockIcon className="w-4 h-4" />
          <small className="relative top-[1px]">20 Minutes read</small>
        </div>
        <p>
          In today's digital landscape, captivating user experiences are
          paramount. Websites no longer serve as mere repositories of
          information; they are dynamic platforms that engage and interact with
          users on a deeper level. One of the most effective ways to achieve
          this level of engagement is through seamless and captivating
          animations.
        </p>
        <div className="py-12" ref={lottieRef}>
          <Lottie options={defaultOptions} height={300} width={325} />
        </div>
        <p className="pt-4">
          Enter GSAP ScrollTrigger – a powerful tool that revolutionizes the way
          animations are implemented on websites. GSAP, short for GreenSock
          Animation Platform, is renowned for its flexibility, performance, and
          ease of use. ScrollTrigger, an extension of GSAP, takes these
          capabilities to new heights by allowing developers to synchronize
          animations with the scroll position of the page.
        </p>
        <p className="pt-4">
          But why should you consider incorporating GSAP ScrollTrigger into your
          web design arsenal? Let's delve into the myriad benefits it offers:
        </p>
        <ol className="list-decimal pl-8 py-6">
          <li className="mb-2">
            <b>Enhance User Engagement:</b> Animations have the remarkable
            ability to guide users' attention and create memorable interactions.
            With GSAP ScrollTrigger, you can seamlessly integrate animations
            that respond to user scrolling, providing a dynamic and engaging
            browsing experience.
          </li>
          <li className="mb-2">
            <b>Improve User Experience:</b> Smooth and intuitive animations can
            significantly enhance the overall user experience of your website.
            By leveraging GSAP ScrollTrigger, you can create animations that not
            only delight users but also aid in navigation, storytelling, and
            conveying information effectively.
          </li>
          <li className="mb-2">
            <b>Boost Performance: </b> Performance is crucial in web
            development, especially when it comes to animations. GSAP
            ScrollTrigger is optimized for performance, ensuring that your
            animations run smoothly across devices and browsers without
            compromising speed or responsiveness.
          </li>
          <li className="mb-2">
            <b>Foster Creativity: </b> GSAP ScrollTrigger empowers developers to
            unleash their creativity and push the boundaries of web animation.
            Whether you're designing interactive parallax effects, scroll-based
            transitions, or immersive storytelling elements, GSAP ScrollTrigger
            provides the tools you need to bring your vision to life.
          </li>
          <li className="mb-2">
            <b>Enhance Brand Identity: </b> Animations play a vital role in
            shaping your brand's identity and personality online. By
            incorporating GSAP ScrollTrigger into your website, you can create
            animations that reflect your brand's aesthetic, values, and unique
            selling propositions, helping you stand out in a crowded digital
            landscape.
          </li>
        </ol>
        <p className="pt-4">
          In conclusion, GSAP ScrollTrigger offers a myriad of benefits for
          enhancing website animations. From improving user engagement and
          experience to boosting performance and fostering creativity, GSAP
          ScrollTrigger empowers developers to create immersive and memorable
          web experiences that leave a lasting impression on users.
        </p>
        <p className="pt-4">
          So why settle for static websites when you can elevate your designs
          with captivating animations powered by GSAP ScrollTrigger? Unlock the
          power of GSAP ScrollTrigger today and take your web animations to new
          heights!
        </p>

        <h2 className="text-left text-2xl md:text-3xl font-bold pt-16 ">
          How to install with Next.js
        </h2>
        <p className="pt-4">
          So let&apos;s get started with installing Gsap + Scrolltrigger with
          Next.js, we will go through the steps from start to finish and get you
          started with your first animations.
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
          Step 1. Install Next.js
        </h3>
        <p className="pt-4">
          Inside Visual Studio code open up your terminal and type the command
          below to install Next.js
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
          Now, let&apos;s navigate to the folder where we&apos;ll be working.
          You can do this by either going to &apos;File&apos; &#62; &apos;Open
          Folder&apos; and selecting the project we&apos;re working on, or you
          can use the following commands to navigate to the folder:
        </p>
        <CodeBlock>{" cd lottie-animation"}</CodeBlock>
        <p className="pt-4">Now, let&apos;s install the npm packages we need</p>
        <CodeBlock>{" npm install"}</CodeBlock>
        <h2 className="text-left text-2xl md:text-3xl font-bold pt-16 ">
          How to install Gsap and Scroll Trigger
        </h2>
        <p className="pt-4">
          First, you need to install GSAP in your Next.js project. You can do
          this using npm or yarn. Run one of the following commands in your
          terminal:
        </p>
        <CodeBlock>
          {`
npm install gsap
            `}
        </CodeBlock>
        <p className="pt-4">
          Next, we'll import GSAP and ScrollTrigger and register them in our
          document and add our first animation, you can replace your page.tsx
          inside your app folder with the below
        </p>
        <CodeBlock>
          {`
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const animateRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: animateRef.current,
        start: "top 70%", // when the top of the trigger hits the top of the viewport
        end: "+=300", // end after scrolling 300px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: false, //true if you wish to troubleshoot the document
      },
    });

    // add animations timeline
    tl.from(animateRef.current, { autoAlpha: 0 }).to(animateRef.current, {
      autoAlpha: 1,
    });
  }, []);

  return (
    <div className="w-40 h-40 pt-12 bg-secondary text-center" ref={animateRef}>
        Hello I'm your first scroll trigger animation
    </div>
  );
};

            `}
        </CodeBlock>
        <h3 className="text-left text-2xl md:text-2xl font-bold pt-16 ">
          Step 4. Let&apos;s run the application
        </h3>
        <p className="pt-4">
          If all went well we can now run the command to start the server
        </p>
        <CodeBlock>{" npm run dev"}</CodeBlock>
        <div
          className="w-40 h-40 pt-12 bg-secondary text-center"
          ref={animateRef}
        >
          Hello I'm your first scroll trigger animation
        </div>
        <br></br>
        <p className="pt-0">
          Great news! You've successfully implemented your GSAP ScrollTrigger
          animation. It should smoothly transition to full opacity as you
          scroll. For further information on ScrollTrigger, please refer to the
          documentation available{" "}{" "}
          <a
            className="text-blue-500 underline"
            href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
            target="_blank"
          >
            here
          </a>
        </p>
        <br></br>
        <small>
          Credits:{" "}
          <a
            className="text-blue-500 underline"
            href="https://lottiefiles.com/ision_industries"
            target="_blank"
          >
            Ision_industries for the Lottie animations
          </a>
        </small>
      </div>
      <div className="w-full py-14 px-6 lg:px-0">
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
