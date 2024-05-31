"use client";
import React from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const StatsCard = ({ number, subTitle }) => {
  const showRunningCount = () => {
    setRunningCount(true);
  };
  const closeRunningCount = () => {
    setRunningCount(false);
  };
  const [runningCount, setRunningCount] = React.useState(false);
  return (
    <ScrollTrigger
      onEnter={showRunningCount}
      className="text-white w-[10rem] flex flex-col items-center  "
    >
      <div className="text-[2rem] lg:text-[2.5rem] font-semibold">
        {runningCount && (
          <CountUp start={0} end={number} duration={2} delay={0} />
        )}

        <span className="ml-1 text-blue-500 ">+</span>
      </div>
      <div className="text-[1rem] lg:text-[1.125rem] text-center">
        {subTitle}
      </div>
    </ScrollTrigger>
  );
};
export default StatsCard;
