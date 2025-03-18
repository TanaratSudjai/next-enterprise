import { motion } from "framer-motion"
import Image from "next/image"
import { fadeInUp } from "../Resources/animation/animation"

export default function CareerPage() {
  return (
    <div className="container mx-auto mt-[-200px] mb-40 max-w-7xl md:mt-0 md:mb-25 lg:mt-0">
      <div className="mx-8 flex flex-col-reverse items-center justify-center gap-[120px] md:mx-0 md:flex-col-reverse lg:mx-0 lg:flex-row">
        <div className="relative flex w-full md:flex-col md:justify-center lg:flex-row">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            variants={fadeInUp}
            className="flex w-full justify-center"
          >
            <Image
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%20Image__Conference%20Room.webp"
              alt="Team meeting"
              width={750}
              height={750}
              className="rounded-lg"
            />
            <div className="lf absolute top-[70%] bottom-0 left-10 flex h-30 w-30 justify-center rounded-lg bg-[#f7e1d2] p-4 shadow-lg md:top-[80%] md:left-[15%] md:h-40 md:w-40">
              <Image
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c34dace47c3_Tile%20Illustrations__Document%202.webp"
                alt="Icon"
                width={700}
                height={700}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={fadeInUp}
          className="w-full md:p-10"
        >
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            variants={fadeInUp}
            className="font-serif text-5xl leading-tight text-gray-900 md:text-5xl"
          >
            Grow your career and unleash your potential.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            variants={fadeInUp}
            className="mt-4 text-lg font-semibold text-gray-800"
          >
            Ready to expand your horizons at a truly global company?
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            variants={fadeInUp}
            className="mt-2 text-gray-600"
          >
            At SupportNinja, we prioritize your progress, celebrate your wins, and provide a supportive environment
            where you can thrive. Check out our openings today.
          </motion.p>
          <motion.button className="hover:text--[#0c3a23] mt-10 w-auto rounded-full border-2 border-[#0c3a23] bg-[#0c3a23] px-4 py-2 font-medium text-white transition-all duration-300 hover:cursor-pointer hover:bg-transparent">
            View open roles
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
