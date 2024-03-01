"use client";

import React from "react";
import Nav from "@/components/sections/Nav";
import { ProfileForm } from "@/components/sections/my-form";
import Footer from "@/components/sections/Footer";
import Image from "next/image";

import { ClockIcon } from "@radix-ui/react-icons";

import CodeBlock from "@/components/ui/codeBlock";

import Lottie from "react-lottie";
import animationData from "@/json/Lottie-animation-dark-mode.json";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle-mode";

const LottiePostPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="z-10 w-full items-center justify-between text-sm lg:flex pb-6">
        <Nav />
      </div>
      <div className="max-w-5xl px-6 lg:px-0">
        <p className="py-4">Blog post</p>
        <h1 className="text-3xl md:text-3xl xl:text-3xl font-bold tracking-tight pb-2">
          Enhancing UX/UI and Accessibility: Embracing Dark Mode on Your Website
        </h1>

        <small>Manuel Yemoh - Mar 01, 2024</small>

        <Image
          alt="Cover"
          className="aspect-video overflow-hidden rounded-lg object-cover mt-6 mb-2"
          src="/dark-mode-blog-image.webp"
          width={100}
          height={100}
          layout="responsive"
        />
        <div className="flex gap-2 items-center pb-14">
          <ClockIcon className="w-4 h-4" />
          <small className="relative top-[1px]">30 Minutes read</small>
        </div>
        <p>
          In recent years, dark mode has emerged as a popular feature across
          various digital platforms, providing users with a visually appealing
          and functional alternative to traditional light themes. From enhancing
          user experience (UX) and user interface (UI) to improving
          accessibility, incorporating dark mode capabilities into your website
          can offer numerous benefits.
        </p>
        <div className="py-12">
          <Lottie options={defaultOptions} height={150} width={300} />
        </div>
        <h2 className="text-left text-2xl md:text-3xl font-bold ">
          Enhancing User Experience (UX) and User Interface (UI)
        </h2>
        <ol className="list-decimal pl-8 py-6">
          <li className="mb-2">
            <b>Reduced Eye Strain:</b> Dark mode reduces the amount of blue
            light emitted by screens, which can help reduce eye strain,
            particularly during extended periods of screen time. This makes it
            more comfortable for users to browse your website, leading to
            increased engagement and retention.
          </li>
          <li className="mb-2">
            <b>Improved Readability:</b> Dark mode often utilizes lighter text
            colors, which contrast well with darker backgrounds, enhancing
            readability, especially in low-light environments. Users can browse
            content more comfortably without experiencing glare or discomfort.
          </li>
          <li className="mb-2">
            <b>Visual Appeal:</b> Dark mode offers a sleek and modern aesthetic
            that appeals to many users. It can provide a fresh look to your
            website, making it stand out and leaving a memorable impression on
            visitors.
          </li>
          <li className="mb-2">
            <b>Focus on Content:</b> By minimizing distractions and emphasizing
            content, dark mode allows users to focus more on the information
            presented on your website. This can lead to a more immersive
            browsing experience, encouraging users to explore your content
            further.
          </li>
        </ol>
        <h2 className="text-left text-2xl md:text-3xl font-bold ">
          Accessibility Considerations
        </h2>
        <ol className="list-decimal pl-8 py-6">
          <li className="mb-2">
            <b>Increased Accessibility:</b> Dark mode can improve accessibility
            for users with visual impairments or sensitivity to bright lights.
            By offering an alternative color scheme, you make your website more
            inclusive and accessible to a wider range of users.
          </li>
          <li className="mb-2">
            <b>Customization Options:</b> Providing dark mode as an option
            allows users to customize their browsing experience based on their
            preferences and needs. This flexibility promotes inclusivity and
            ensures that all users can interact with your website comfortably.
          </li>
          <li className="mb-2">
            <b>Compliance with Accessibility Standards: </b> Incorporating dark
            mode features aligns with accessibility standards and guidelines,
            such as Web Content Accessibility Guidelines (WCAG). By prioritizing
            accessibility, you demonstrate a commitment to providing equal
            access to information for all users.
          </li>
        </ol>

        <p className="pt-4">
          I&apos;m now going to take you through the steps to getting Shadcn
          installed with a Dark mode button with Next.js.
        </p>

        <h2 className="text-left text-2xl md:text-3xl font-bold pt-16 ">
          How to install with Next.js
        </h2>
        <p className="pt-4">
          So let&apos;s get into the crux of it, how to install lottie files
          with Next.js, we will go through the steps from start to finish and
          get you started with your first lottie animations.
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
        {/* <p className="pt-4">Once that&apos;s done we will be able to load our test server using the command below and accessing http://localhost:3000/ on our browser.</p>
        <CodeBlock
          code={
            "npm run dev"
          }
        /> */}
        <h3 className="text-left text-2xl md:text-2xl font-bold pt-16 ">
          Step 2. Install Shadcn
        </h3>
        <p className="pt-4">
          You&apos;ll need to run the NPM command to install Shadcn
        </p>
        <CodeBlock>{" npx shadcn-ui@latest init"}</CodeBlock>
        <p className="pt-4">
          You will be asked some questions about the installation, here are the
          settings I used:
        </p>
        <CodeBlock>
          {`
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Do you want to use CSS variables for colors? ›  yes
        `}
        </CodeBlock>
        <h3 className="text-left text-2xl md:text-2xl font-bold pt-16 ">
          Step 3. Let&apos;s add a dark mode toggle
        </h3>
        <p className="pt-4">We are now going to set up dark mode themes</p>
        <CodeBlock>{" npm install next-themes"}</CodeBlock>
        <p className="pt-4">Let&apos;s install all the dependancies</p>
        <CodeBlock>{` npx shadcn-ui@latest add dropdown-menu && npx shadcn-ui@latest add button && npm i @radix-ui/react-icons`}</CodeBlock>
        <p className="pt-4">
          We are now going to create a theme provider document add it here:{" "}
          <b>components/theme-provider.tsx</b>
        </p>
        <CodeBlock>{`
"use client"
 
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
 
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
        
          `}</CodeBlock>
        <p className="pt-4">
          Once that&apos;s done we need to wrap the ThemeProvider to our root layout,
          add it here: <b>app/layout.tsx</b>
        </p>
        <CodeBlock>{`
import { ThemeProvider } from "@/components/theme-provider"
 
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
        
          `}</CodeBlock>
        <p className="pt-4">
          Next let&apos;s create a toggle component I put the file here:{" "}
          <b>components/ui/toggle-mode.tsx</b>
        </p>
        <CodeBlock>{`
"use client"
 
import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 
export function ModeToggle() {
  const { setTheme } = useTheme()
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
        
          `}</CodeBlock>
        <p className="pt-4">
          Finally we can now add a Toggle button to any page I put mine in my{" "}
          <b>app/page.tsx</b>
        </p>
        <CodeBlock>{`
import { ModeToggle } from "@/components/ui/toggle-mode";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle />
    </main>
  );
}
        
          `}</CodeBlock>
        <h3 className="text-left text-2xl md:text-2xl font-bold pt-16 ">
          Step 4. Let&apos;s run the application
        </h3>
        <p className="pt-4">
          If all went well we can now run the command to start the server
        </p>
        <CodeBlock>{" npm run dev"}</CodeBlock>
        <div className="py-6">
          <ModeToggle />
        </div>
        <br></br>
        <p className="pt-0">
          Success you have now implimented your Dark mode component! it should
          look like the toggle button above and the beauty is it will
          automatically adjust all the colours on your page. For more components
          please visit the Shadcn documentation location{" "}
          <a
            className="text-blue-500 underline"
            href="https://ui.shadcn.com/docs/components/accordion"
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
            href="https://lottiefiles.com/DarkMuzishn"
            target="_blank"
          >
            Mohammad Turk for the Lottie animations
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
