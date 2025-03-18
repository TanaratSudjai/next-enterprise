import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"
import { fadeInUp } from "../Resources/animation/animation"

function Better() {
  return (
    <div className="mt-10">
      <Image
        src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c211cce4793_Section%20Curve%2003.svg"
        className="w-full"
        alt=""
        width={100}
        height={100}
      />
      <div className="w-full bg-[#f7e1d2]">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <section className="flex flex-col-reverse items-center justify-between gap-[100] py-16 md:flex-col-reverse lg:flex-row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "100px" }}
              variants={fadeInUp}
              className="w-full space-y-6 md:w-2/2"
            >
              <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl">
                We’re better together. Start building your dream team.
              </h1>
              <div className="space-y-4">
                <p className="text-xl">Design a custom outsourcing solution that drives results.</p>
              </div>
              <div className="">
                <button className="group relative mt-10 inline-flex w-full items-center rounded-full bg-[#E33D3D] py-3 pr-14 pl-6 text-white transition-all duration-500 ease-out hover:cursor-pointer hover:bg-[#3f3f3f] hover:shadow-xl hover:ring-white/20 active:scale-95 md:w-[100%] lg:w-auto">
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
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "100px" }}
              variants={fadeInUp}
              className="w-full md:w-2/2"
            >
              <Image
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc4e1ce4794_Character%20Illustration__Footer-CTA.webp"
                loading="lazy"
                sizes="100vw"
                alt="An illustration of A woman holding a clipboard, a woman planting, and a man holding a cup and and phone"
                className="full-width-image"
                width={1000}
                height={1000}
              ></Image>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Better
