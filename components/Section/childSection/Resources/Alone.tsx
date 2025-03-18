import Image from "next/image"
import React from "react"

function Alone() {
  return (
    <div className="container mx-8 mt-[-50px] bg-amber-400 px-8 md:mt-[0px] w-auto">
      <div className="flex w-auto flex-col-reverse items-start justify-start gap-6 py-12 lg:flex-row">
        {/* ข้อความ */}
        <div className="lg:w-1.5/2 flex w-full flex-col justify-start space-y-4 md:w-[80%]">
          <p className="text-left font-serif text-4xl leading-tight md:text-5xl lg:text-5xl">Don't grow it alone</p>
          <p className="text-left text-base md:text-lg">
            Don't let headcount become a headache. We'll connect you with talent that meets your needs.
          </p>
          <p className="mt-4 text-left text-base md:mt-10 md:text-lg lg:mt-10">
            Your dedicated new team members will become experts in your world — your customers, your tech, your data,
            your systems — so they can expand on what you've built.
          </p>
        </div>

        {/* รูปภาพ */}
        <div className="flex w-full justify-start md:w-1/2 md:justify-start lg:justify-end">
          <Image
            src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4794ce4765_Illustration%3DPlant%201.svg"
            alt="Woman watering bar chart illustration"
            width={150}
            height={150}
            className="h-auto w-full max-w-[150px] object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Alone
