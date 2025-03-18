import { motion } from "framer-motion"
import React from "react"
import ButtonGetStarted from "./childSection/ButtonGetStarted/ButtonGetStarted"
import Card from "./childSection/CardComponents/Card"
import Content from "./childSection/Content"
import Support from "./childSection/SupportBG/Support"
import { fadeInUp } from "../Section/childSection/Resources/animation/animation"
function Outsourcing() {
  return (
    <div className="">
      <section className="w-full bg-[url('/bg/wave-haikei-mobiles.svg')] bg-cover bg-center pt-32 pb-[350px] text-center md:bg-[url('/bg/wave-haikeis.svg')] md:pb-[350px] lg:pb-[350px]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            variants={fadeInUp}
          >
            <p className="mb-5 w-full font-light text-gray-800 md:mb-12 md:text-xl lg:mb-12 lg:text-2xl">
              <b>
                Quickly and seamlessly scale your team with agile, highly <br /> customizable outsourcing solutions that
                power your growth.
              </b>
            </p>
            <p className="mb-8 font-serif text-4xl font-bold text-gray-800 md:text-6xl lg:text-6xl xl:text-7xl">
              Outsourcing worth talking about
            </p>
          </motion.div>
        </div>
        <div className="text-center">
          <div className="mb-8 px-4">
            <hr className="mx-8 mt-20 mb-5 border-gray-400" />
            <h2 className="text-1xl mb-6 font-bold text-gray-900 md:text-2xl">
              Which outsourcing solutions are you looking for?
            </h2>
            <p className="text-xl text-black">Choose as many as you need.</p>
          </div>
          <div className="flex justify-center">
            <Card />
          </div>
          <div className="flex w-auto justify-center md:w-full">
            <ButtonGetStarted />
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
