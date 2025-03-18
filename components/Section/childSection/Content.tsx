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
import { motion } from "framer-motion"
import { fadeInUp, fadeIn, staggerChildren } from "../childSection/Resources/animation/animation"
function Content() {
  return (
    <motion.div
      className="mt-[-150px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "100px" }}
      variants={fadeInUp}
    >
      <Rescoures />
      <Alone />
      <Service />
      <CardResoult />
      <Spanning />
      <CustomizedApproach />
      <Passionate />
      <CareerPage />
      <Better />
    </motion.div>
  )
}

export default Content
