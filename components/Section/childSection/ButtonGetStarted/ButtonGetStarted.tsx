"use client"
import React from "react"
function ButtonGetStarted() {
  return (
    <div className="container mx-auto w-[90%] md:w-full lg:w-auto">
      <button className="group relative mt-10 inline-flex w-[100%] items-center rounded-full bg-[#ee4b4a] py-3 pr-14 pl-6 text-white transition-all duration-500 ease-out hover:cursor-pointer hover:bg-[#3f3f3f] hover:shadow-xl hover:ring-white/20 active:scale-95">
        <span className="text-lg font-medium">Get Started</span>
        <div className="absolute top-1/2 right-1 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-all duration-500 ease-out group-hover:shadow-md">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="#ee4b4a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
    </div>
  )
}

export default ButtonGetStarted
