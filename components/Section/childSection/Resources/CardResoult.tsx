import React, { useState } from "react"
function CardResoult() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "SupportNinja is really responsive and flexible based on our needs. But what we're really, really happy about is the Ninjas and their commitment to the brand. They're like an extension of our team!",
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
  ] as any

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }
  return (
    <div className="bg-white py-16 font-light">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl text-gray-900 md:text-5xl">
          <b className="font-light">Why our clients stick with us</b>
        </h2>

        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-lg bg-[#f9e8d9] p-8 md:p-12">
            <div className="absolute top-4 right-4 left-4">
              <svg className="h-16 w-16 text-gray-300 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>

            <blockquote className="relative z-10">
              <p className="mb-8 text-center text-xl text-gray-800 italic md:text-2xl">
                "{testimonials[activeIndex].quote}"
              </p>

              <footer className="text-center">
                <div className="font-bold text-gray-900">{testimonials[activeIndex].author}</div>
                <div className="text-gray-600">{testimonials[activeIndex].title}</div>
              </footer>
            </blockquote>

            <div className="mt-12 flex items-center justify-between">
              <div className="flex space-x-2">
                {testimonials.map((_: any, index: any) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 w-2 rounded-full ${index === activeIndex ? "bg-green-800" : "bg-gray-300"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex">
                <button
                  onClick={handlePrevious}
                  className="rounded-l-full bg-green-900 p-2 text-white hover:bg-green-800 focus:outline-none"
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
                  className="rounded-r-full bg-green-900 p-2 text-white hover:bg-green-800 focus:outline-none"
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
        </div>
      </div>
    </div>
  )
}

export default CardResoult
