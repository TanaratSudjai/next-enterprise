import React from "react"

function Topbar() {
  return (
    <div className="flex items-center justify-center bg-[#ee4b4a] py-4 text-center text-[15px] text-white md:h-[50] md:text-[13px] lg:h-[50]">
      <p className="font-bold text-gray-300">
        The 2025 CX Outsourcing Report is Here!{" "}
        <span>
          <a href="" className="text-amber-400 underline">
            Access the Full Report
          </a>
        </span>
      </p>
    </div>
  )
}

export default Topbar
