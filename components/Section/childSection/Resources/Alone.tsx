import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"
import { fadeInUp } from "../Resources/animation/animation"

function Alone() {
  return (
    <div className="container mx-4 mt-[-50px] w-auto px-8 md:mx-auto md:mt-[0px] lg:mx-auto">
      <div className="flex w-auto flex-col-reverse items-start justify-start gap-6 py-12 lg:flex-row">
        {/* ข้อความ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={fadeInUp}
          className="lg:w-1.5/2 flex w-full flex-col justify-start space-y-4 md:w-[80%]"
        >
          <p className="text-left font-serif text-4xl leading-tight md:text-6xl lg:text-7xl">Don't grow it alone</p>
          <p className="text-left text-base md:text-3xl">
            Don't let headcount become a headache. We'll connect you with talent that meets your needs.
          </p>
          <p className="mt-4 text-left text-base md:mt-10 md:text-lg lg:mt-10">
            Your dedicated new team members will become experts in your world — your customers, your tech, your data,
            your systems — so they can expand on what you've built.
          </p>
        </motion.div>

        {/* รูปภาพ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={fadeInUp}
          className="flex w-full items-center justify-start md:w-1/2 md:justify-start lg:justify-end"
        >
          <Image
            src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4794ce4765_Illustration%3DPlant%201.svg"
            alt="Woman watering bar chart illustration"
            width={150}
            height={150}
            className="h-auto w-full max-w-[150px] object-contain"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Alone
