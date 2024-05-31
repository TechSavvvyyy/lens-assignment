
import About from "./components/about-us";
import Services from "./components/services";
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
