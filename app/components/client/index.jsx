import React from "react";
import StatsCard from "./card/StatsCard";
const AllClients = () => {
  return (
    <div class="w-full flex flex-col items-center ">
      <h1
        className="text-[2rem] font-semibold mb-16 text-center
           raleway"
      >
        We Work With Amazing Clients
      </h1>

      <div class="flex flex-col gap-y-8   lg:flex-row gap-x-8 mb-16 overflow-hidden horizontal_scroll_animation ">
        <div>
          <img src={"/images/gloabal.webp"} className={"h-32 aspect-auto"} />
        </div>
        <div>
          <img src={"/images/coreIp.webp"} className={"h-32 aspect-auto"} />
        </div>
        <div>
          <img src={"/images/zktec.webp"} className={"h-32 aspect-auto"} />
        </div>
        <div>
          <img src={"/images/groveoz.webp"} className={"h-32 aspect-auto"} />
        </div>
      </div>
      <div
        className={
          "bg-[#272E5C] w-full py-[4rem] flex flex-col justify-center items-center "
        }
      >
        <div className="text-[2rem] text-white font-medium mb-10">
          By the numbers
        </div>
        <div className=" gap-x-2  w-full px-4 items-center gap-y-4 lg:gap-x-16 lg:w-[70%] flex flex-col   lg:flex-row  justify-center">
          <StatsCard number={15} subTitle={"Solutions for Global crises"} />
          <div className="w-[2px] h-[116px] hidden lg:block bg-white"></div>

          <StatsCard number={10} subTitle={"University Collaborations"} />
          <div className="w-[2px] h-[116px] hidden lg:block bg-white"></div>

          <StatsCard number={25} subTitle={"Employees Worldwide"} />
        </div>
      </div>
    </div>
  );
};

export default AllClients;
