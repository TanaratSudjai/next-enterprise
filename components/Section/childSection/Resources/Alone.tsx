import React from "react"

function Alone() {
  return (
    <div className="">
      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col items-center justify-between gap-16 px-4 py-12 md:flex-row">
        <div className="flex w-full flex-col justify-center space-y-4 md:w-1/2">
          <p className="font-serif text-5xl leading-tight">Don’t grow it alone</p>
          <p className="text-base md:text-lg">
            Don't let headcount become a headache. We’ll connect you with talent that meets your needs.
          </p>
          <p className="mt-10 text-base md:text-lg">
            Your dedicated new team members will become experts in your world — your customers, your tech, your data,
            your systems — so they can expand on what you’ve built.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4794ce4765_Illustration%3DPlant%201.svg"
          alt="Woman watering bar chart illustration"
          className="h-auto w-full max-w-[150px] object-contain md:w-1/2"
        />
      </div>
    </div>
  )
}

export default Alone
