import { ModeToggle } from "@/components/ui/toggle-mode";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export default function Nav() {
  return (
    <div className="py-14 bg-secondary border-b w-full">
      <div className="max-w-5xl sm:flex sm:flex-row items-center justify-between px-6 lg:px-0 m-auto">
        <div className="w-full sm:w-1/2">
          <a href="/">
            <h1 className="scroll-m-20 text-center sm:text-left text-3xl font-extrabold tracking-tight lg:text-3xl">
              UX/UI JOURNEY
            </h1>
          </a>
        </div>
        <div className="w-full pt-6 sm:pt-0 sm:w-1/2 flex justify-center sm:justify-end items-center gap-5">
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
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
