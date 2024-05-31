import React from "react";

const LensTitle = ({ text, className }) => {
  return (
    <h1
      className={` ${className} font-bold text-[2.5rem] text-center lg:text-[4rem] raleway`}
    >
      {text}
    </h1>
  );
};

export default LensTitle;
