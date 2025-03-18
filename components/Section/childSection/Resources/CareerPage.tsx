import Image from "next/image"

export default function CareerPage() {
  return (
    <div className="container mx-auto mt-[-200px] mb-40 max-w-7xl  md:mt-0 md:mb-25 lg:mt-0">
      <div className="mx-8 flex flex-col-reverse items-center justify-center gap-[120px] md:mx-0 md:flex-col-reverse lg:mx-0 lg:flex-row">
        <div className="relative flex w-full md:flex-col md:justify-center lg:flex-row">
          <div className="flex w-full justify-center">
            <Image
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%20Image__Conference%20Room.webp"
              alt="Team meeting"
              width={750}
              height={750}
              className="rounded-lg"
            />
            <div className="absolute top-[70%] bottom-0 left-10 lf md:left-[15%] md:top-[80%]  flex h-30 w-30 justify-center rounded-lg bg-[#f7e1d2] p-4 shadow-lg md:w-40 md:h-40">
              <Image
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c34dace47c3_Tile%20Illustrations__Document%202.webp"
                alt="Icon"
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>

        <div className="w-full md:p-10">
          <p className="font-serif text-5xl leading-tight text-gray-900 md:text-5xl">
            Grow your career and unleash your potential.
          </p>
          <p className="mt-4 text-lg font-semibold text-gray-800">
            Ready to expand your horizons at a truly global company?
          </p>
          <p className="mt-2 text-gray-600">
            At SupportNinja, we prioritize your progress, celebrate your wins, and provide a supportive environment
            where you can thrive. Check out our openings today.
          </p>
          <button className="hover:text--[#0c3a23] mt-10 w-auto rounded-full border-2 border-[#0c3a23] bg-[#0c3a23] px-4 py-2 font-medium text-white transition-all duration-300 hover:cursor-pointer hover:bg-transparent">
            View open roles
          </button>
        </div>
      </div>
    </div>
  )
}
