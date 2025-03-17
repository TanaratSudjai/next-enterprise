import Image from "next/image"
import React from "react"

function Alone() {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="mt-10 flex w-full max-w-6xl flex-col-reverse items-start justify-start gap-6 py-12 md:flex-row">
        {/* ข้อความ */}
        <div className="flex w-full flex-col justify-start space-y-4 md:w-1/2">
          <p className="text-left font-serif text-5xl leading-tight">Don't grow it alone</p>
          <p className="text-left text-base md:text-lg">
            Don't let headcount become a headache. We'll connect you with talent that meets your needs.
          </p>
          <p className="mt-10 text-left text-base md:text-lg">
            Your dedicated new team members will become experts in your world — your customers, your tech, your data,
            your systems — so they can expand on what you've built.
          </p>
        </div>

        {/* รูปภาพ */}
        <div className="flex w-full justify-start md:w-1/2 md:justify-end">
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
