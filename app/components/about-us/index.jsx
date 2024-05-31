import React from "react";
import LensTitle from "../common-used-components/LensTitle";
import Image from "next/image";
import LensButton from "../common-used-components/LensButton";
import GradientLine from "../common-used-components/GradientLine";
import UnfilledLensButton from "../common-used-components/UnfilledLensButton";

const About = () => {
  return (
    <div className={"mx-4 mb-6 flex flex-col items-center gap-y-12  "}>
      <div className={"flex flex-col items-center"}>
        <LensTitle text="About Us" />
        <GradientLine />
      </div>
      <div className="flex  flex-col lg:w-[80%] lg:flex-row-reverse lg:items-center p-4 bg-[#e2f2ff] rounded-[1rem] lg:px-12 lg:py-8 lg:hover:scale-110 transition-all">
        <div
          className={"bg-white h-fit   p-[0.75rem] relative rounded-[0.75rem] "}
        >
          <div className={"relative    h-[20rem]  lg:w-[27rem]"}>
            <Image
              src={"/images/groupPhoto.webp"}
              className={"rounded-[0.75rem] lg:overflow-y-clip object-cover "}
              fill={true}
              alt={"Company group photo"}
            />
          </div>
        </div>

        <div
          className={
            "flex flex-col gap-y-8 mt-8 text-center lg:text-start items-center lg:items-start "
          }
        >
          <h3 className={"text-[2.25rem] lg:text-[2.8rem] font-semibold"}>
            Welcome To LENS
          </h3>
          <p className={"text-[1rem] font-[400] w-[75%] text-[#393939E6] "}>
            We put our hearts, souls and sweat into designing and developing
            custom AI - powered solutions for your business so you dont have to.
          </p>
          <UnfilledLensButton className="mb-20" text="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
