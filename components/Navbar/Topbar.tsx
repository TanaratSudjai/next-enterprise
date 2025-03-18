import React from "react"

function Topbar() {
  return (
    <div className="flex text-[10px] md:text-lg h-[40px] md:h-[50] lg:h-[50] items-center justify-center bg-[#ee4b4a] text-white">
      <p>
        The 2025 CX Outsourcing Report is Here{" "}
        <span>
          <a href="" className="text-yellow-300 underline">
            Access the Full Report
          </a>
        </span>
      </p>
    </div>
  )
}

export default Topbar
