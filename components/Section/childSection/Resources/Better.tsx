import Image from "next/image"
import React from "react"
import ButtonGetStarted from "../ButtonGetStarted/ButtonGetStarted"

function Better() {
  return (
    <div className="">
      <Image
        className="w-full"
        src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c211cce4793_Section%20Curve%2003.svg"
        alt=""
      />
      <div className="w-full bg-[#f7e1d2]">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <section className="flex flex-col-reverse items-center justify-between gap-[100] py-16 md:flex-col-reverse lg:flex-row">
            <div className="w-full space-y-6 md:w-2/2">
              <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl">
                We’re better together. Start building your dream team.
              </h1>
              <div className="space-y-4">
                <p className="text-xl">Design a custom outsourcing solution that drives results.</p>
              </div>
              <div>
                <ButtonGetStarted />
              </div>
            </div>

            <div className="w-full md:w-2/2">
              <Image
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc4e1ce4794_Character%20Illustration__Footer-CTA.webp"
                loading="lazy"
                sizes="100vw"
                alt="An illustration of A woman holding a clipboard, a woman planting, and a man holding a cup and and phone"
                className="full-width-image"
              ></Image>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Better
