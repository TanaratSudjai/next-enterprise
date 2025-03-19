import { motion } from "framer-motion"
import Image from "next/image"
import { fadeInUp } from "./animation/animation"
function Resources() {
  return (
    <div className="">
      <div className="flex w-full flex-col items-center justify-between gap-10 py-0 pb-15 md:w-auto md:flex-col lg:flex-col xl:flex-row">
        <motion.div
          className="flex w-full justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={fadeInUp}
        >
          <Image
            src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%20Illustration__Woman%20Watering%20Bar%20Chart.webp"
            alt="Woman watering bar chart illustration"
            width={1000}
            height={1000}
            className="h-auto w-full object-contain"
          />
        </motion.div>
        <motion.div
          className="flex w-full flex-col justify-center space-y-4 px-8 sm:px-10 md:px-4 lg:px-0 xl:px-25"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={fadeInUp}
        >
          <p className="font-serif text-4xl leading-tight sm:text-4xl md:text-left md:text-5xl lg:text-left lg:text-6xl xl:text-6xl">
            Free up resources, accelerate growth, and solve for scale.
          </p>
          <p className="pr-8 text-base font-light md:text-lg">
            At SupportNinja, we combine cutting-edge technology with value-centricity to foster high-performing,
            reliable teams that turn growing pains into efficient pathways to profitability.
          </p>
          <p className="mt-3 pr-8 text-base font-light md:mt-10 md:text-lg lg:mt-10">
            Our customized, agile, AI-enabled solutions don’t just deliver cost savings — they also help you achieve key
            business outcomes.
          </p>
          <p className="mt-3 pr-8 text-base font-light md:mt-10 md:text-lg lg:mt-10">
            We work closely with you to continually adjust strategies, realize efficiencies, and drive scale according
            to your unique needs. Plus, flexibility is baked in from day one, so you’re never locked into rigid,
            long-term contracts.
          </p>
          <p className="mt-3 pr-8 text-base font-light md:mt-10 md:text-lg lg:mt-10">
            Now that’s outsourcing worth talking about.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Resources
