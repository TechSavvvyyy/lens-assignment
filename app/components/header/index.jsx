"use client"
import React from 'react'
import {useState} from "react";
import {Drawer} from "@mantine/core";
import { useHeadroom } from '@mantine/hooks';

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const pinned = useHeadroom({ fixedAt: 120 });

  const toggleMenu = () => setToggle(!toggle)
  return (
      <header className={`bg-white flex items-center transition-all duration-500 fixed top-0  ${(pinned && !toggle) ? "translate-y-[0rem]" : "translate-y-[-110rem]"} z-[999] w-screen `}>
        <div className="px-4 py-2  flex items-center justify-between w-full md:w-[85%] md:m-auto">
          <img className="h-16 md:h-20 mt-1 " src = {"/images/nav_logo.webp"}></img>
          <button className=" block md:hidden " onClick={toggleMenu}>
            <img src = {"/images/hamburger-menu.svg"} className={"h-12"} />
          </button>
          <nav className={`hidden md:block text-[1rem] font-[400] `}>
            <div className="flex items-center gap-x-8 ">
            <div>
                <a className="nav__link" target="_blank" href="https://makemyweb.ai/" >
                  MakeMyWeb
                </a>
              </div>
              <div>
                <a className="nav__link" href="/" style={{color: 'black'}}>
                  Home
                </a>
              </div>
              <div>
                <a className="nav__link" href="/about" style={{color: 'black'}}>
                  Company
                </a>
              </div>
              <div>
                <a className="nav__link" href="/blogs" style={{color: 'black'}}>
                  Blogs
                </a>
              </div>
            </div>
          </nav>
        </div>
        <Drawer  opened={toggle} position={"right"} radius="md" onClose={() => setToggle(!toggle)} size="100%">
          <nav className={` text-[1rem] font-[400] `}>
            <div className="flex flex-col items-center gap-y-8 ">
              <div>
                <a className="nav__link" target="_blank" href="https://makemyweb.ai/">
                  MakeMyWeb
                </a>
              </div>
              <div>
                <a className="nav__link" href="/" style={{color: 'black'}}>
                  Home
                </a>
              </div>
              <div>
                <a className="nav__link" href="/about" style={{color: 'black'}}>
                  Company
                </a>
              </div>
              <div>
                <a className="nav__link" href="/blogs" style={{color: 'black'}}>
                  Blogs
                </a>
              </div>
            </div>
          </nav>

        </Drawer>
      </header>)
}

export default Header