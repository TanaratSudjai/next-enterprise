import { motion } from "framer-motion"
import React, { useState } from "react"
import { fadeInUp } from "../Resources/animation/animation"

interface Testimonial {
  quote: string
  author: string
  title: string
}

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "SupportNinja is really responsive and flexible based on our needs. But what we’re really, really happy about is the Ninjas and their commitment to the brand. They’re like an extension of our team!",
    author: "Sudip Dasgupta",
    title: "Head of Customer Experience, Product Madness",
  },
  {
    quote:
      "The SupportNinja team consistently delivers exceptional customer service. Their ability to understand our product and address customer concerns has significantly improved our satisfaction ratings.",
    author: "Emma Rodriguez",
    title: "Customer Success Manager, TechSolutions Inc.",
  },
  {
    quote:
      "Working with SupportNinja has transformed our customer support operations. Their team is highly skilled, proactive, and genuinely cares about our customers' experience.",
    author: "Michael Chang",
    title: "VP of Operations, GrowthLabs",
  },
  {
    quote:
      "SupportNinja provides the perfect balance of technical expertise and empathetic customer care. They've become an invaluable partner in our growth journey.",
    author: "Sarah Johnson",
    title: "COO, Startup Accelerate",
  },
]

function CardResoult() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [testimonials] = useState<Testimonial[]>(defaultTestimonials)

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  // This is safe because testimonials array is never empty
  const currentTestimonial = testimonials[activeIndex]

  if (!currentTestimonial) {
    return null
  }

  return (
    <div className="pt-16 font-serif md:px-20 lg:mx-auto lg:px-40 xl:px-40">
      <div className="flex flex-col justify-center px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={fadeInUp}
          className="mb-12 text-center font-serif text-4xl text-gray-900 md:text-5xl lg:text-7xl"
        >
          Why our clients stick with us
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={fadeInUp}
          className="container mx-auto max-w-7xl"
        >
          <div className="relative flex flex-col items-center justify-center rounded-4xl bg-[url('/bg/bg.svg')] bg-cover bg-center p-8 md:p-12">
            <motion.blockquote
              className="relative z-10 w-[60%]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "100px" }}
              variants={fadeInUp}
            >
              <p className="mb-8 text-center text-xl text-gray-800 italic md:text-2xl">"{currentTestimonial.quote}"</p>
              <footer className="text-center">
                <div className="font-bold text-gray-900">{currentTestimonial.author}</div>
                <div className="text-gray-600">{currentTestimonial.title}</div>
              </footer>
            </motion.blockquote>

            <div className="mt-12 flex w-full items-center justify-center gap-[50%] md:justify-between lg:justify-between">
              <div className="hidden space-x-2 font-bold text-gray-800 md:flex lg:flex">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 w-2 rounded-full ${index === activeIndex ? "bg-green-800" : "bg-gray-300"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="jus flex">
                <button
                  onClick={handlePrevious}
                  className="rounded-l-full bg-[#0c3a23] p-2 text-white hover:bg-green-800 focus:outline-none"
                  aria-label="Previous testimonial"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="rounded-r-full bg-[#0c3a23] p-2 text-white hover:bg-green-800 focus:outline-none"
                  aria-label="Next testimonial"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CardResoult
