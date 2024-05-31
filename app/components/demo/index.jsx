import React from 'react'
import LensTitle from "../common-used-components/LensTitle";
import Image from "next/image";

const Demo = () => {
  return (
      <div className={"mx-4  flex justify-between"}>
        <div className={"flex flex-col justify-center items-center lg:items-start gap-y-4  w-full py-8  lg:py-12  lg:w-[70%]  lg:pl-10 lg:pr-12  "}>
          <LensTitle text={"Get in touch with us"} className = "text-center lg:text-start lg:w-[70%] raleway "/>
          <p className="text-[1rem]">Send your enquiry now!</p>
          <form className={"bg-[#ededed] lg:w-[80%] rounded-[1.75rem] overflow-hidden flex justify-between lg:p-1 lg:pl-5"}>
              <input className="w-[60%] bg-[#ededed] p-2 pl-4 lg:p-0  " placeholder="Enter email address" required="" type="email" name="email" />
                  <button className={"bg-[#272e5c] rounded-[1.75rem] text-white px-4 py-2"} type="submit">Request Demo</button>
              
              </form>
        </div>
            <div className={"w-[50%]  hidden   relative  lg:flex justify-center items-center "} >
        <img src={"/images/map_2_white.webp"} className={"w-full "}  alt={"Clients"} />
            </div>
      </div>

  )
}

export default Demo