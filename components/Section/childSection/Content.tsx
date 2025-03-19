import { motion } from "framer-motion"
import React from "react"
import Alone from "./Resources/Alone"
import Better from "./Resources/Better"
import CardResoult from "./Resources/CardResoult"
import CareerPage from "./Resources/CareerPage"
import CustomizedApproach from "./Resources/CustomizedApproach"
import Passionate from "./Resources/Passionate"
import Rescoures from "./Resources/Rescoures"
import Service from "./Resources/Service"
import Spanning from "./Resources/Spanning"
import { fadeInUp } from "../childSection/Resources/animation/animation"
function Content() {
  return (
    <div className="">
      <motion.div
        className="mt-[-150px] w-auto  sm:mx-6 md:mx-15 lg:mx-50 xl:mx-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "100px" }}
        variants={fadeInUp}
      >
        <Rescoures />
        <Alone />
        <Service />
        <CardResoult />
      </motion.div>
      <Spanning />
      <CustomizedApproach />
      <Passionate />
      <CareerPage />
      <Better />
    </div>
  )
}

export default Content
