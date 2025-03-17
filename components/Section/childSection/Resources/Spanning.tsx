import Image from "next/image"
import React from "react"
import ButtonGetStartedGreen from "../ButtonGetStarted/ButtonGetStartedGreen"

const people = [
  {
    id: 1,
    image: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c9aa1ce47b2_Avatar__07.webp",
    name: "Avatar 07",
    top: "15%",
    left: "20%",
  },
  {
    id: 2,
    image: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c799cce47ab_Avatar__05.webp",
    name: "Avatar 05",
    top: "25%",
    left: "10%",
  },
  {
    id: 3,
    image: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc7dece47ad_Avatar__04.webp",
    name: "Avatar 04",
    top: "40%",
    left: "20%",
  },
  {
    id: 5,
    image: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c188ece47af_Avatar__06.webp",
    name: "Avatar 06",
    top: "20%",
    left: "70%",
  },
  {
    id: 6,
    image: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c87d2ce47ac_Avatar__03.webp",
    name: "Avatar 03",
    top: "55%",
    left: "15%",
  },
  {
    id: 7,
    image: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4f55ce47b0_Avatar__02.webp",
    name: "Avatar 02",
    top: "65%",
    left: "65%",
  },
  {
    id: 8,
    image: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c6221ce47b1_Avatar__08.webp",
    name: "Avatar 08",
    top: "50%",
    left: "70%",
  },
  {
    id: 9,
    image: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c514bce47ae_Avatar__01.webp",
    name: "Avatar 01",
    top: "52%",
    left: "75%",
  },
]

function Spanning() {
  return (
    <div className="relative flex w-full justify-center bg-[url('/bg/wave-haikei-2.svg')] bg-cover bg-top pb-[100px] text-center">
      <div className="container mx-auto flex max-w-7xl justify-center">
        <div className="flex max-w-lg flex-col justify-center pt-[350px]">
          <h2 className="mb-12 font-serif text-6xl text-gray-800">
            Spanning a wider <br />
            world of talent
          </h2>
          <p className="mb-10 text-left text-xl">
            What are the odds that the most qualified people in the world live in your zip code? We’ll help you see
            further.
          </p>
          <p className="mb-10 text-left text-xl">
            A global team extends your presence across time zones and languages—which means longer reach, constant
            uptime, and happier customers.
          </p>
          <p className="mb-10 text-left text-xl font-bold">It’s time to go international. No passport required.</p>

          <div className="flex w-full justify-center">
            <div className="w-[25%]">
              <ButtonGetStartedGreen />
            </div>
          </div>
        </div>
      </div>

      {/* Profile Images */}
      {people.map((person) => (
        <Image
          key={person.id}
          src={person.image}
          alt={person.name}
          width={80}
          height={80}
          className="absolute mt-[200px] hidden h-20 w-20 rounded-full border-4 border-red-500 object-cover lg:block"
          style={{ top: person.top, left: person.left }}
        />
      ))}
    </div>
  )
}

export default Spanning
