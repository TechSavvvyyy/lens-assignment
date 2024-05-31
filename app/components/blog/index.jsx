import React from 'react'
import LensSubTitle from "../common-used-components/LensSubTitle";
import BlogCard from "./card/BlogCard";

const Blog = () => {
  return (
      <div className="flex flex-col items-center my-16  py-4 bg-gray-100  ">
          <LensSubTitle text="OUR BLOGS"/>
          <h1 className="text-[2.25rem] text-center lg:text-[3.625rem] font-semibold mb-16 ">Inhouse Mindscape</h1>
          <div className={"flex flex-col px-4 lg:flex-row gap-8 w-full lg:w-[70%] "}  >
              <BlogCard isNew = {true} hoverBgColor = {"hover:bg-[#FFFBEA]"} bgColor = {"bg-[#FFF6CD]"} blogLink={"https://lenscorp.ai/blogs/How%20AI%20is%20Optimizing%20Your%20Taxi%20Rides"} blogHeading={"How AI is Optimizing Your Taxi Rides"} smallDesc={"Discover how Artificial Intelligence is revolutionising the taxi app landscape, leading to improved efficiency, shorter wait times, and a more satisfying user experience...."} />
              <BlogCard hoverBgColor = {"hover:bg-[#F3F9FF]"} bgColor = {"bg-[#F3F9FF]"} blogLink={"https://lenscorp.ai/blogs/How%20AI%20is%20Revolutionizing%20Your%20Shopping%20Experience"} date = {"May 15, 2024"} blogHeading={"How AI is Revolutionizing Your Shopping Experience"} smallDesc={"From personalized recommendations to frictionless checkout, AI is transforming the way you shop.Discover the future of retail and how AI is making shopping faster, easier, and more enjoyable...."
                  } />
          </div>

     </div>
  )
}

export default Blog