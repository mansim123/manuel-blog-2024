import { LinkedInLogoIcon, GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <div className="py-14 bg-secondary w-full">
      <div className="max-w-5xl flex flex-row items-center justify-between px-6 m-auto">
        <div className="w-1/2">
          <h1 className="scroll-m-20 text-1xl font-extrabold tracking-tight lg:text-1xl">
            © 2024 Manuel Yemoh
          </h1>
        </div>
        <div className="w-1/2 flex justify-end items-center gap-5">
          <a href="https://github.com/mansim123" target="_blank">
            <GitHubLogoIcon className="h-[1.4rem] w-[1.4rem] hover:scale-[1.1] transition-all " />
          </a>
          <a href="https://www.linkedin.com/in/manuel-yemoh-800a7b37/">
            <LinkedInLogoIcon className="h-[1.4rem] w-[1.4rem] hover:scale-[1.1] transition-all" />
          </a>
          <a href="https://twitter.com/ManuelYemoh" target="_blank">
            <TwitterLogoIcon className="h-[1.4rem] w-[1.4rem] hover:scale-[1.1] transition-all" />
          </a>
          {/* <InstagramLogoIcon /> */}
        </div>
      </div>
    </div>
  );
}
