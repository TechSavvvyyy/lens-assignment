import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/footer";
import About from "./components/about-us";
import Services from "./components/services";
import WebsiteBuilder from "./components/website-builder";
import Vision from "./components/vision";
import Blog from "./components/blog";
import Client from "./components/client";
import FAQ from "./components/faq";
import Demo from "./components/demo";
import FrontPage from "./components/frontpage";

export default function Home() {
  return (


    <div className="flex flex-col gap-y-8">
        <FrontPage />
        <About />
        <Services />
        <Blog />
        <Client />
        <FAQ />
        <Demo />

      </div>


  );
}
