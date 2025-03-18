import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"
import { fadeInUp } from "../Resources/animation/animation"

function ServicesPage() {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Customer Support */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={fadeInUp}
          className="service-card border-t border-gray-200 p-6 pt-8"
        >
          <div className="mb-4 flex flex-col items-start gap-2 md:flex-row lg:flex-row">
            <Image
              className=""
              alt=""
              src={
                "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/6734db6b63d29b612d1a8d19_Icons_Customer-Support.svg"
              }
              width={25}
              height={25}
            />
            <h2 className="text-xl font-semibold">Customer Support</h2>
          </div>
          <p className="mb-6 text-gray-600 md:mx-7 md:flex md:w-min md:flex-wrap md:text-left md:text-xl lg:w-full">
            span every interaction into a positive experience with customer-centric support that scales as you grow.
          </p>
          <a href="#" className="flex items-center font-medium text-black">
            Explore Customer Support
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>

        {/* Customer Experience */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={fadeInUp}
          className="service-card border-t border-gray-200 p-6 pt-8"
        >
          <div className="mb-4 flex flex-col items-start gap-2 md:flex-row lg:flex-row">
            <Image
              className=""
              alt=""
              src={
                "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c6675ce474a_Solutions%20Icon__Customer%20Service.svg"
              }
              width={25}
              height={25}
            />
            <h2 className="text-xl font-semibold">Customer Experience </h2>
          </div>
          <p className="mb-6 text-gray-600 md:mx-7 md:flex md:w-min md:flex-wrap md:text-left md:text-xl lg:w-full">
            Enhance every stage of your customer journey and scale confidently — from a single touchpoint to the entire
            lifecycle.
          </p>
          <a href="#" className="flex items-center font-medium text-black">
            Explore Customer Experience
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>

        {/* Technical Customer Support  */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={fadeInUp}
          className="service-card border-t border-gray-200 p-6 pt-8"
        >
          <div className="mb-4 flex items-center">
            <div className="mb-4 flex flex-col items-start gap-2 md:flex-row lg:flex-row">
              <Image
                className=""
                alt=""
                src={
                  "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cb1f3ce472c_Solutions%20Icon__Technical%20Support.svg"
                }
                width={25}
                height={25}
              />
              <h2 className="text-xl font-semibold">Technical Customer Support</h2>{" "}
            </div>
          </div>
          <p className="mb-6 text-gray-600 md:mx-7 md:flex md:w-min md:flex-wrap md:text-left md:text-xl lg:w-full">
            Outsource dedicated experts on your business to answer customer questions.
          </p>
          <a href="#" className="flex items-center font-medium text-black">
            Explore Technical Customer Support
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
        {/* Content Moderation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={fadeInUp}
          className="service-card border-t border-gray-200 p-6 pt-8"
        >
          <div className="mb-4 flex items-center">
            <div className="mb-4 flex flex-col items-start gap-2 md:flex-row lg:flex-row">
              <Image
                className=""
                alt=""
                src={
                  "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0ca966ce478f_icons%3DPencil.svg"
                }
                width={25}
                height={25}
              />
              <h2 className="text-xl font-semibold">Content Moderation</h2>{" "}
            </div>
          </div>
          <p className="mb-6 text-gray-600 md:mx-7 md:flex md:w-min md:flex-wrap md:text-left md:text-xl lg:w-full">
            Build a thriving online presence with a team specially trained to uphold your community standards.
          </p>
          <a href="#" className="flex items-center font-medium text-black">
            Explore Content Moderation
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>

        {/* Data Processing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={fadeInUp}
          className="service-card border-t border-gray-200 p-6 pt-8"
        >
          <div className="mb-4 flex items-center">
            <div className="mb-4 flex flex-col items-start gap-2 md:flex-row lg:flex-row">
              <Image
                className=""
                alt=""
                src={
                  "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c1b4ace4778_icons%3DData%20Processing.svg"
                }
                width={25}
                height={25}
              />
              <h2 className="text-xl font-semibold">Data Processing</h2>
            </div>
          </div>
          <p className="mb-6 text-gray-600 md:mx-7 md:flex md:w-min md:flex-wrap md:text-left md:text-xl lg:w-full">
            Receive analyzed data, specific to how you need it interpreted and presented.
          </p>
          <a href="#" className="flex items-center font-medium text-black">
            Explore Data Processing
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>

        {/* Finance & Accounting */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={fadeInUp}
          className="service-card border-t border-gray-200 p-6 pt-8"
        >
          <div className="mb-4 flex items-center">
            <div className="mb-4 flex flex-col items-start gap-2 md:flex-row lg:flex-row">
              <Image
                className=""
                alt=""
                src={
                  "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/66ab870287012990781761c9_66a94bdb23f9b933553ccdb1_Untitled%2520design%2520(40)%2520(1).png"
                }
                width={25}
                height={25}
              />
              <h2 className="text-xl font-semibold">Finance & Accounting</h2>
            </div>
          </div>
          <p className="mb-6 text-gray-600 md:mx-7 md:flex md:w-min md:flex-wrap md:text-left md:text-xl lg:w-full">
            Streamline your financial operations with expert accounting and bookkeeping services.
          </p>
          <a href="#" className="flex items-center font-medium text-black">
            Explore Finance & Accounting
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default ServicesPage
