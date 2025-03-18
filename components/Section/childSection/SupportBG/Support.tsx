import Image from "next/image"
import React from "react"

function Support() {
  return (
    <div className="flex w-full flex-col items-center justify-between rounded-3xl bg-[#bfc1b9] px-7 py-7 lg:flex-row xl:flex-row">
      <div className="flex w-full items-center justify-center p-3 lg:justify-start xl:justify-start">
        <h2 className="text-center text-sm font-light text-gray-800 md:text-center md:text-2xl lg:text-left lg:text-2xl">
          <b>
            Driving better business results <br /> for 200+ companies.
          </b>
        </h2>
      </div>

      <div className="grid w-full grid-cols-3 items-center justify-center gap-6 py-2 sm:w-full md:flex md:grid-cols-3">
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0380ce484b_B%26MG_foundation.svg"
          alt="Company Logo"
          width={100}
          height={100}
          className="h-6 object-contain"
        />
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64f9e7ede9b6df55f6f1a029_Midjourney%20Logo%20(1).svg"
          alt="Company Logo"
          width={100}
          height={100}
          className="h-6 object-contain"
        />
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/65a7f1f93afe1bee1bb429a4_Happy%20Socks%20Logo.svg"
          alt="Company Logo"
          width={100}
          height={100}
          className="h-6 object-contain"
        />
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0a86ce483a_Customer%20Logo__Vidyard.svg"
          alt="Company Logo"
          width={100}
          height={100}
          className="h-6 object-contain"
        />
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd632ce484a_redweek.svg"
          alt="Company Logo"
          width={100}
          height={100}
          className="h-6 object-contain"
        />
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd161ce4839_Customer%20Logo__Product%20Madness.svg"
          alt="Company Logo"
          width={100}
          height={100}
          className="h-6 object-contain"
        />
      </div>
    </div>
  )
}

export default Support
