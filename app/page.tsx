"use client"
import Link from "next/link"
import Navbar from "components/Navbar/Navbar"
import Topbar from "components/Navbar/Topbar"
import Outsourcing from "components/Section/Outsourcing"
import Footer from "components/Navbar/Footer"
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* import navbar components */}
      <Topbar />
      <Navbar />
      {/* Hero Section */}
      <section>
        <Outsourcing />
      </section>
      {/* Footer */}
      <Footer />
    </main>
  )
}
