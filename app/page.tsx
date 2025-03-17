"use client"
import Footer from "components/Navbar/Footer"
import Navbar from "components/Navbar/Navbar"
import Topbar from "components/Navbar/Topbar"
import Outsourcing from "components/Section/Outsourcing"
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
