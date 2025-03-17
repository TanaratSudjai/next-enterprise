import Image from "next/image"

export default function CareerPage() {
  return (
    <div className="container mx-auto mb-10 max-w-7xl">
      <div className="flex flex-col-reverse items-center justify-center gap-[120px] md:flex-col-reverse lg:flex-row">
        <div className="relative flex w-full md:flex-col md:justify-center lg:flex-row">
          <div className="flex w-full justify-center">
            <Image
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%20Image__Conference%20Room.webp"
              alt="Team meeting"
              width={600}
              height={600}
              className="rounded-lg"
            />
            <div className="absolute top-[60%] bottom-0 left-[15%] flex h-45 w-32 justify-center rounded-lg bg-[#f7e1d2] p-4 shadow-lg md:w-40">
              <Image
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c34dace47c3_Tile%20Illustrations__Document%202.webp"
                alt="Icon"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>

        <div className="w-full p-6 md:p-10">
          <p className="font-serif text-5xl leading-tight font-semibold text-gray-900">
            Grow your career and <br /> unleash your potential.
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
