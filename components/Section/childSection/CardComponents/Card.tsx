"use client"
import Image from 'next/image';
import { FC, useState } from 'react';
import { CheckSquare, Square } from "lucide-react"

interface Service {
  id: number
  title: string
  image: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Customer Experience",
    image:
      "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg",
  },
  {
    id: 2,
    title: "Customer Support",
    image:
      "https://images-ext-1.discordapp.net/external/izQhJ9nTkgmpFpcDehAE5XQYGPlFHI7k2dZMiOrhhRk/https/cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cd6fece4b65_filled_customer_success.webp?format=webp",
  },
  {
    id: 3,
    title: "Technical Customer Support",
    image:
      "https://images-ext-1.discordapp.net/external/fZPCg1A4z94W4SX0ly7ue8NUSRwO0J9kfYMlw3smT78/https/cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c3491ce4b63_filled_technical_support.webp?format=webp",
  },
  {
    id: 4,
    title: "Content Moderation",
    image:
      "https://images-ext-1.discordapp.net/external/Bj2YudCfiSh4V1nvWMYw7B1fvEqBern-PG95dU3_9lQ/https/cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cce61ce4b6b_filled_content_moderation.webp?format=webp",
  },
  {
    id: 5,
    title: "Data Processing",
    image:
      "https://images-ext-1.discordapp.net/external/-AISXr6I3MjHaaeX0OGcLswXFD_RWgFIWQis7DM1avw/https/cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c1bd3ce4b69_filled_data_processing.webp?format=webp",
  },
  {
    id: 6,
    title: "Finance & Accounting",
    image:
      "https://images-ext-1.discordapp.net/external/uN7Wl-2n07uy6nyUKe8guVHjK--vyfms9aSZt3j7L4c/https/cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/66ab870287012990781761a1_649438d904b97f8a9692a85a_Solution%25253DE-mail%252520Support%25252C%252520State%25253DHover.webp?format=webp",
  },
]

function Card() {
  const [selected, setSelected] = useState<number[]>([])
  const toggleSelection = (id: number) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="container flex justify-center gap-4">
      {services.map((service) => (
        <div
          key={service.id}
          className={`hover:shadow-4xl relative w-52 cursor-pointer rounded-xl border-2 bg-[#ffefe4] p-4 shadow-md transition-all duration-300 hover:bg-white ${
            selected.includes(service.id) ? "shadow-4xl bg-white" : "border-transparent"
          }`}
          onClick={() => toggleSelection(service.id)}
        >
          <div className="absolute top-2 right-2 text-gray-700">
            {selected.includes(service.id) ? <CheckSquare size={20} className="text-black" /> : <Square size={20} />}
          </div>

          <div className="mb-4 h-28 w-full">
            <Image
              src={service.image}
              alt={service.title}
              width={112}
              height={112}
              className="h-full w-full object-contain"
            />
          </div>

          <h3 className="text-center font-semibold">{service.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default Card
