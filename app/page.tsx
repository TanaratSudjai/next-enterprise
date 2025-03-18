"use client"
import Footer from "components/Navbar/Footer"
import Navbar from "components/Navbar/Navbar"
import Topbar from "components/Navbar/Topbar"
import Outsourcing from "components/Section/Outsourcing"
export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffd2b4]">
      <Topbar />
      <Navbar />
      <section>
        <Outsourcing />
      </section>
      <Footer />
    </main>
  )
}
