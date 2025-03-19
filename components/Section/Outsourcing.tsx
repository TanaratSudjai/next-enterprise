import { motion } from "framer-motion"
import React from "react"
import Card from "./childSection/CardComponents/Card"
import Content from "./childSection/Content"
import Support from "./childSection/SupportBG/Support"
import { fadeInUp } from "../Section/childSection/Resources/animation/animation"
function Outsourcing() {
  return (
    <div className="">
      <section className="w-full bg-[url('/bg/wave-haikei-mobiles.svg')] bg-cover bg-top pt-30 pb-150 text-center md:bg-[url('/bg/wave-haikeies.svg')] md:pt-35 md:pb-[350px] lg:pt-32 lg:pb-[350px]">
        <div className="container mx-auto">
          <motion.div
            className="pb-20 md:pb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            variants={fadeInUp}
          >
            <h3 className="b mb-10 w-full text-lg font-light text-gray-700 md:mb-12 md:text-xl lg:text-3xl">
              Quickly and seamlessly scale your team with agile, highly <br /> customizable outsourcing solutions that
              power your growth.
            </h3>
            <h1 className="font-serif text-5xl text-gray-800 md:text-6xl lg:text-6xl xl:text-7xl">
              Outsourcing worth talking about
            </h1>
          </motion.div>
        </div>
        <div className="container mx-auto text-center sm:mx-auto md:px-0 lg:px-12 xl:px-12">
          <div className="pt-0 sm:pt-0 md:pt-30 lg:pt-12 xl:pt-12">
            <hr className="border-1 border-t-gray-400 pt-12" />
            <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
              Which outsourcing solutions are you looking for?
            </h2>
            <p className="font-blod text-gray-700">Choose as many as you need.</p>
          </div>
          <div className="flex justify-center py-15">
            <Card />
          </div>
          <div className="flex flex-col justify-center">
            <div className="">
              <button className="group xl-w-auto relative inline-flex w-full items-center rounded-full bg-[#ee4b4a] py-4 pr-20 pl-6 text-white transition-all duration-500 ease-out hover:cursor-pointer hover:bg-[#3f3f3f] hover:shadow-xl hover:ring-white/20 active:scale-95 sm:w-full md:w-full lg:w-auto">
                <span className="font-serif text-xl">Get Started</span>
                <div className="absolute top-1/2 right-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-all duration-500 ease-out group-hover:shadow-md">
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
            <div className="container mx-auto mt-20 sm:mt-20 sm:mb-20">
              <Support />
            </div>
          </div>
        </div>
      </section>
      <Content />
    </div>
  )
}

export default Outsourcing
