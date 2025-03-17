import Link from 'next/link';
import { useState } from 'react';

function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <nav className="fixed z-50 w-full bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-black">
                SupportNinja
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden space-x-8 md:flex">
              <div className="group relative">
                <button className="font-medium text-gray-700 hover:text-blue-900">Solutions</button>
                <div className="absolute mt-2 hidden w-48 rounded-lg bg-white py-2 shadow-lg group-hover:block">
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Customer Support
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Customer Experience
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Technical Support
                  </Link>
                </div>
              </div>
              <div className="group relative">
                <button className="font-medium text-gray-700 hover:text-blue-900">Industries</button>
                <div className="absolute mt-2 hidden w-48 rounded-lg bg-white py-2 shadow-lg group-hover:block">
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    SaaS
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    E-commerce
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Healthcare
                  </Link>
                </div>
              </div>
              <Link href="#" className="font-medium text-gray-700 hover:text-blue-900">
                Resources
              </Link>
              <Link href="#" className="font-medium text-gray-700 hover:text-blue-900">
                Company
              </Link>
            </div>

            <div className="hidden items-center space-x-4 md:flex">
              <button className="block w-full rounded-full bg-blue-900 px-4 py-2 font-medium text-white">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="py-4 md:hidden">
              <Link href="#" className="block py-2 text-gray-700">
                Solutions
              </Link>
              <Link href="#" className="block py-2 text-gray-700">
                Industries
              </Link>
              <Link href="#" className="block py-2 text-gray-700">
                Resources
              </Link>
              <Link href="#" className="block py-2 text-gray-700">
                Company
              </Link>
              <div className="mt-4 space-y-2">
                <button className="block w-full rounded-full bg-green-900 px-4 py-2 font-medium text-white">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default page
