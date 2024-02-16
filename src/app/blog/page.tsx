import Nav from "@/components/sections/Nav";
import CoverImage from "@/components/sections/Cover-image";
import BlogPost from "@/components/sections/blog-post";
import { ProfileForm } from "@/components/sections/my-form";
import Footer from "@/components/sections/Footer";

export default function Blog() {

  const heroDescription = "Welcome to the journey of Manuel Yemoh, a Senior Front End developer who specializes in UX/UI and Animation Development. Your go-to destination for insightful discussions, practical tips, and inspiring ideas in the dynamic world of UX/UI design and development!";

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="z-10 w-full items-center justify-between text-sm lg:flex">
        <Nav/>
      </div>
      <div className="py-14 w-full">
        <CoverImage imageUrl={"manuel.jpg"} description={heroDescription} imageWidth={150} imageHeight={150}/>
      </div>
      <div className="w-full">
        <BlogPost/>
      </div>
      <div className="w-full py-14">
        <h2 className="text-center text-2xl md:text-3xl font-bold py-6 mx-auto px-6">Get in touch with me</h2>
        <ProfileForm/>
      </div>
      <div className="w-full">
        <Footer/>
      </div>
    </main>
  );
}
