import Image from "next/image"
import Link from "next/link"
import React from "react"

interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <Link href={href} className="text-gray-800 transition-colors duration-200 hover:text-black">
    {children}
  </Link>
)

interface FooterColumnProps {
  title: string
  links: { name: string; href: string }[]
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className="flex flex-col space-y-3">
    <h3 className="mb-1 text-xl font-bold text-black">{title}</h3>
    {links.map((link) => (
      <FooterLink key={link.name} href={link.href}>
        {link.name}
      </FooterLink>
    ))}
  </div>
)

interface FooterProps {
  companyName?: string
  year?: number
}

const Footer: React.FC<FooterProps> = ({ companyName = "SupportNinja", year = 2025 }) => {
  const solutions = [
    { name: "Customer Experience", href: "/solutions/customer-experience" },
    { name: "Customer Conversion", href: "/solutions/customer-conversion" },
    { name: "Customer Onboarding", href: "/solutions/customer-onboarding" },
    { name: "Customer Support", href: "/solutions/customer-support" },
    { name: "Technical Customer Support", href: "/solutions/technical-support" },
    { name: "Customer Renewals", href: "/solutions/customer-renewals" },
    { name: "Content Moderation", href: "/solutions/content-moderation" },
    { name: "Data Processing", href: "/solutions/data-processing" },
    { name: "Finance & Accounting", href: "/solutions/finance-accounting" },
  ]

  const industries = [
    { name: "SaaS", href: "/industries/saas" },
    { name: "AI", href: "/industries/ai" },
    { name: "Ecommerce", href: "/industries/ecommerce" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Supply Chain & Logistics", href: "/industries/supply-chain" },
    { name: "Fintech", href: "/industries/fintech" },
  ]

  const resources = [
    { name: "Resources", href: "/resources" },
    { name: "FAQs", href: "/resources/faqs" },
    { name: "Glossary", href: "/resources/glossary" },
  ]

  const company = [
    { name: "How it Works", href: "/company/how-it-works" },
    { name: "About", href: "/company/about" },
    { name: "Careers", href: "/company/careers" },
    { name: "Contact", href: "/company/contact" },
  ]

  const social = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/supportninja" },
    { name: "YouTube", href: "https://www.youtube.com/supportninja" },
    { name: "Twitter", href: "https://twitter.com/supportninja" },
    { name: "Facebook", href: "https://www.facebook.com/supportninja" },
  ]

  const legal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Security Policy", href: "/security-policy" },
    { name: "Terms of Use", href: "/terms-of-use" },
  ]

  return (
    <footer className="border-t border-gray-200 bg-[#bfc1b9] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link href="/" className="flex items-center">
            <Image
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd45cce4719_Support%20Ninja%20%7C%20Full%20Logo.svg"
              alt={`${companyName} logo`}
              width={200}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-5 lg:grid-cols-5">
          <FooterColumn title="Solutions" links={solutions} />
          <FooterColumn title="Industries" links={industries} />
          <FooterColumn title="Resources" links={resources} />
          <FooterColumn title="Company" links={company} />
          <FooterColumn title="Follow" links={social} />
        </div>
        <button className="group relative mt-10 inline-flex w-auto items-center rounded-full bg-[#ee4b4a] py-3 pr-14 pl-6 text-white transition-all duration-500 ease-out hover:cursor-pointer hover:bg-[#3f3f3f] hover:shadow-xl hover:ring-white/20 active:scale-95 md:w-auto lg:w-auto">
          <span className="text-lg font-medium">Get Started</span>
          <div className="absolute top-1/2 right-1 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-all duration-500 ease-out group-hover:shadow-md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="#ee4b4a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>

        <div className="mt-8 flex flex-col border-t border-gray-200 pt-8 md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 text-center">
              Â© {year} {companyName}, a registered trademark of Ninja Partners, LLC
            </p>
          </div>
          <div className="flex space-x-6">
            {legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-600 transition-colors duration-200 hover:text-gray-800"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
