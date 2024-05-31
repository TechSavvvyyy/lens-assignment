import React from 'react'
import Image from "next/image";
import "./footer.css"
const Footer = () => {
  return (
      <footer >
          <div className={"flex flex-col pb-12 gap-y-8 items-center lg:py-16 lg:flex-row lg:w-[85%] m-auto lg:justify-between text-[1rem]  "} >
            <div className={"flex flex-col gap-y-2 items-center"}>
              <div className={"w-20 h-20 relative "}>
                <a href="#">

                  <Image src={"/images/nav_logo.webp"} fill={true}/>
                </a>

              </div>
            <div className={"lg:mb-12"}> Tomorrow's Vision, Today!</div>
              <div className={"flex gap-x-4"}>
                  <a href="https://www.facebook.com/solutions.lenscorp?mibextid=2JQ9oc" target="_blank"
                     rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                         role="img" className="facebookIcon" width="30" height="30"
                         viewBox="0 0 24 24">
                      <path fill="currentColor"
                            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                    </svg>

                </a>
                <a href="https://www.instagram.com/lens_corporation/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                       role="img" className="instagram_icon" width="30" height="30"
                       viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/lens-corporation/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                       role="img" className="linked-in-icon" width="30" height="30"
                       viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className={"text-[1rem] flex text-center flex-col gap-y-2 font-semibold "}>
              <span className={"mb-8"}>SITEMAP</span>
              <a target="blank" href="https://makemyweb.ai/">MakeMyWeb</a>
              <a href="#services">Services</a>
              <span>Products</span>
              <a href="#blogs">Blogs</a>
              <a href="/about">Life at LENS</a>
            </div>
            <div className={"text-[1rem] flex text-center flex-col gap-y-2 font-semibold "}>
              <span className={"mb-8"} >CONNECT</span>
              <a href="tel:+1-517-9300-792">+1-517-9300-792</a>
              <a href="tel:+91-9990-736-796" >+91-9990-736-796</a>
              <a href="mailto:solutions@lenscorp.ai" >solutions@lenscorp.ai</a>
            </div>
          </div>
        <div className={"bg-[#272E5C] py-[2.5rem] flex justify-center " }>
          <div className= {"w-[85%] flex flex-col lg:flex-row gap-y-2  justify-between"}>
            <span className="text-[1rem] text-[#999999] ">2023 <span className={"text-white"} >LENS, Inc. </span>All rights reserved.</span>
            <div className={"text-white"}><a  target="_blank">Code of conduct </a><a  target="_blank">Sustainability Goals</a></div>
          </div>
        </div>
      </footer>
      )
}

export default Footer