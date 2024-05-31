import React from 'react'
import Image from "next/image";
import {Button} from "@mantine/core";
import LensButton from "../common-used-components/LensButton";

const FrontPage = () => {
  return (
      <div className={"h-screen grid place-content-center relative  "}>
        <Image src={"/images/Desktop_-_23_u3ypg0 (1).webp"} className={" absolute "} style={{height : "100%", objectFit : "cover"}} fill={true} alt={"Front gradient"} />
        <div className={" flex flex-col items-center z-20 w-full px-2 text-center gap-y-2 lg:w-[30rem] lg:mr-32 lg:items-start lg:text-start "}>
            <h1 className={" font-semibold text-[2rem] mb-4 lg:mb-0 lg:text-[4rem] leading-none  raleway"}>We are at the forefront of AI</h1>
            <p className={"text-[1.2rem]  font-[500] hidden lg:block my-5 "}>From Conserving Wildlife to Automatically Generating Caricatures</p>
           <LensButton text = "Learn More" />
        </div>
      </div>
  )
}

export default FrontPage
