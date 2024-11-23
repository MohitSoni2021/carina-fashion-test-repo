"use client"

import React, { useState, useEffect } from "react";


const ScrollingElement = () => {
  const [navVisibility, setNavVisibility] = useState("opacity-100")

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", () => {
        setNavVisibility("opacity-0")
      });
    }
    watchScroll();

    setTimeout(() => {
      setNavVisibility("opacity-100")
      console.log("visible nav")
    }, 500);

  });

  return (
        <div className={`sticky top-0 ${navVisibility} transition-all duration-150 ease-linear`}>
          <nav className='p-2 m-2 rounded-lg bg-red-500 border-2'>This is the navbar of the website</nav>
        </div>
      )
};


export default ScrollingElement;
