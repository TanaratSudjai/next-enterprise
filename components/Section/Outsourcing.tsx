import { motion } from "framer-motion"
import React from "react"
import Card from "./childSection/CardComponents/Card"
import Content from "./childSection/Content"
import Support from "./childSection/SupportBG/Support"
import { fadeInUp } from "../Section/childSection/Resources/animation/animation"
function Outsourcing() {
  return (
    <div className="">
      <section className="w-full bg-[url('/bg/wave-haikei-mobiles.svg')] bg-cover bg-bottom pt-30 pb-[460px] text-center md:bg-[url('/bg/wave-haikeies.svg')] md:pt-35 md:pb-[350px] lg:pt-32 lg:pb-[350px]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            variants={fadeInUp}
          >
            <p className="mb-5 w-full font-light text-gray-700 md:mb-12 md:text-xl lg:mb-12 lg:text-2xl">
              <b>
                Quickly and seamlessly scale your team with agile, highly <br /> customizable outsourcing solutions that
                power your growth.
              </b>
            </p>
            <p className="mb-8 font-serif text-4xl text-gray-800 md:text-6xl lg:text-6xl xl:text-7xl">
              Outsourcing worth talking about
            </p>
          </motion.div>
        </div>
        <div className="text-center">
          <div className="mb-8 px-4">
            <hr className="mx-8 mt-20 mb-5 border-gray-300" />
            <h2 className="mb-6 text-lg font-bold text-gray-900 md:text-2xl">
              Which outsourcing solutions are you looking for?
            </h2>
            <p className="text-xl text-black">Choose as many as you need.</p>
          </div>
          <div className="flex justify-center">
            <Card />
          </div>
          <div className="flex w-auto justify-center md:w-full">
            <button className="group relative mx-7 mt-10 inline-flex w-[100%] items-center rounded-full bg-[#E33D3D] py-3 pr-14 pl-6 text-white transition-all duration-500 ease-out hover:cursor-pointer hover:bg-[#3f3f3f] hover:shadow-xl hover:ring-white/20 active:scale-95 md:mx-9 md:w-[100%] lg:w-auto">
              <span className="text-lg font-medium">Get Started</span>
              <div className="absolute top-1/2 right-1 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-all duration-500 ease-out group-hover:shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="#E33D3D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="flex justify-center">
            <Support />
          </div>
        </div>
      </section>
      <Content />
    </div>
  )
}

export default Outsourcing
