import React from "react"
import Content from "./childSection/Content"
import Card from "./childSection/CardComponents/Card"
import ButtonGetStarted from "./childSection/ButtonGetStarted/ButtonGetStarted"
import Support from "./childSection/SupportBG/Support"
function Outsourcing() {
  return (
    <div className="">
      <section className="w-full bg-[url('/bg/wave-haikei.svg')] bg-cover bg-center pt-32 pb-[300px] text-center">
        <div className="container mx-auto px-4">
          <div className="mx-auto">
            <p className="mb-12 w-full text-2xl font-light text-gray-800">
              <b>
                Quickly and seamlessly scale your team with agile, highly <br /> customizable outsourcing solutions that
                power your growth.
              </b>
            </p>
            <p className="mb-8 font-serif text-3xl text-gray-800 md:text-6xl">Outsourcing worth talking about</p>
          </div>
          <hr className="mt-15" />
        </div>
        <div className="text-center">
          <div className="mb-8 px-4">
            <h2 className="text-1xl mb-6 font-bold md:text-2xl">Which outsourcing solutions are you looking for?</h2>
            <p className="text-xl text-black">Choose as many as you need.</p>
          </div>
          <div className="flex justify-center">
            <Card />
          </div>
          <div className="flex justify-center">
            <ButtonGetStarted />
          </div>
          <div className="flex justify-center">
            <Support />
          </div>
        </div>
      </section>
      <Content />
    </div>
  )
}

export default Outsourcing
