"use client";

import React from "react";
import Nav from "@/components/sections/Nav";
import { ProfileForm } from "@/components/sections/my-form";
import Footer from "@/components/sections/Footer";
import Image from "next/image";

import { ClockIcon } from "@radix-ui/react-icons";

import CodeBlock from "@/components/ui/codeBlock";

import Lottie from "react-lottie";
import animationData from "@/json/Lottie-animation-ui.json";
import animationDataSquare from "@/json/Lottie-animation-squares.json";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
      <div className="max-w-5xl px-6 lg:px-0">
        <p className="py-4">Blog post</p>
        <h1 className="text-3xl md:text-3xl xl:text-3xl font-bold tracking-tight pb-2">
          Shadcn and Next.js: Tailoring UI Components to Your Project's Needs
        </h1>

        <small>Manuel Yemoh - Feb 22, 2024</small>

        <Image
          alt="Cover"
          className="aspect-video overflow-hidden rounded-lg object-cover mt-6 mb-2"
          src="/shadcn-blog-image.webp"
          width={100}
          height={100}
          layout="responsive"
        />
        <div className="flex gap-2 items-center pb-14">
          <ClockIcon className="w-4 h-4" />
          <small className="relative top-[1px]">20 Minutes read</small>
        </div>
        <p>
          In the past, I've utilized various component libraries, including MUI,
          Chakra UI, Bootstrap, Next UI, and Tailwind UI. While I've
          consistently found them to be reliable and easy to use, one
          significant drawback has always nagged at me: limited customization
          options and unnecessary bloat from downloading entire packages with
          components that often go unused.
        </p>
        <div className="py-12">
          <Lottie options={defaultOptions} height={200} width={325} />
        </div>
        <p className="pt-4">
          Enter{" "}
          <a
            className="text-blue-500 underline"
            href="https://ui.shadcn.com/"
            target="_blank"
          >
            Shadcn
          </a>
          , an open-source component library that has truly transformed my
          approach to working with components.
        </p>
        <p className="pt-4 italic">So, what's all the hype about?</p>
        <p className="pt-4">
          For me, it's the ability to install only what you need and enjoy full
          customization capabilities.
        </p>
        <p className="pt-4">
          Imagine needing just a button. No problem – install the button
          component, and you're all set! Need to customize the button? Dive into
          the UI folder, locate the button, and tweak it to your heart's
          content.
        </p>
        <p className="pt-4">
          Furthermore, Shadcn offers pre-made themes and a convenient dark/light
          mode out of the box.
        </p>
        <p className="pt-4">
          For a live demonstration of Shadcn in action, look no further than
          this very blog website, which I constructed entirely using Shadcn with
          remarkable ease. To streamline the process even further, I employed an
          AI tool called v0, akin to ChatGPT but tailored for components. Simply
          describe what you need – say, a form with username and password fields
          and a submit button – and it generates the necessary code for seamless
          integration into your application.
        </p>

        <Image
          className="aspect-video overflow-hidden rounded-lg object-cover my-12"
          alt="v0 example"
          src="/v0-login.png"
          width={100}
          height={100}
          layout="responsive"
        />
        <p className="pt-4">See below the finished product from v0</p>
        <Card className="my-14 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Password"
                required
                type="password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Sign in</Button>
          </CardFooter>
        </Card>
        <p className="pt-4">And here is the code:</p>
        <CodeBlock>
          {`
          npx v0 add NkBUGndCQB2
          `}
        </CodeBlock>

        <CodeBlock>
          {`

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import {
  Label
} from "@/components/ui/label";
import {
  Input
} from "@/components/ui/input";
import {
  Button
} from "@/components/ui/button";

<Card className="my-14 max-w-2xl mx-auto">
<CardHeader>
  <CardTitle className="text-2xl">
    Login
  </CardTitle>
  <CardDescription>
    Enter your email below
    to login to your account.
  </CardDescription>
</CardHeader>
<CardContent className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input
      id="email"
      placeholder="m@example.com"
      required
      type="email"
    />
  </div>
  <div className="space-y-2">
    <Label htmlFor="password">
      Password
    </Label>
    <Input
      id="password"
      placeholder="Password"
      required
      type="password"
    />
  </div>
</CardContent>
<CardFooter>
  <Button className="w-full">
    Sign in
  </Button>
</CardFooter>
</Card>
            `}
        </CodeBlock>

        <p className="pt-4">
          I'm now going to take you through the steps to getting Shadcn
          installed with Next.js.
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
          You will be asked some questions about the installation, here are the settings I used:
        </p>
        <CodeBlock>
          {`
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Do you want to use CSS variables for colors? ›  yes
        `}
        </CodeBlock>
        <h3 className="text-left text-2xl md:text-2xl font-bold pt-16 ">
          Step 3. Let&apos;s add some UI components
        </h3>
        <p className="pt-4">We are now going to add a button to our document</p>
        <CodeBlock>{" npx shadcn-ui@latest add button"}</CodeBlock>
        <p className="pt-4">inside your page.tsx add this code</p>
        <CodeBlock>{`
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
        
          `}</CodeBlock>
        <p className="pt-4">
          Upon inspecting your folder structure, you'll notice the addition of a "ui" folder, with "button.tsx" now present. This indicates the successful installation of that particular component.
        </p>
        <h3 className="text-left text-2xl md:text-2xl font-bold pt-16 ">
          Step 4. Let&apos;s run the application
        </h3>
        <p className="pt-4">
          If all went well we can now run the command to start the server
        </p>
        <CodeBlock>{" npm run dev"}</CodeBlock>
        <Button className="my-6">Click here</Button><br></br>
        <p className="pt-4">
          Success you have now implimented your first shadcn component! it should look like the button above, for more
          components please visit the Shadcn documentation location{" "}
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
            href="https://lottiefiles.com/l5un1auardsd8xz9"
            target="_blank"
          >
            M.Tasnimul Hoque for the Lottie animations
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
