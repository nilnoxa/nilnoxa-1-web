"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, Menu, X } from "lucide-react"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            WORLD PULSE TRENDS
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/blog" className="hover:text-[#F2811D] transition-colors">
              BLOG
            </Link>
            <Link href="/podcast" className="hover:text-[#F2811D] transition-colors">
              PODCAST
            </Link>
            <Link href="/football" className="hover:text-[#F2811D] transition-colors">
              FOOTBALL
            </Link>
            <Link href="/technology" className="hover:text-[#F2811D] transition-colors">
              TECHNOLOGY
            </Link>
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="hover:text-[#F2811D] transition-colors">
              <Search size={20} />
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="search-container mt-4 w-full md:w-1/2 mx-auto">
            <input type="text" placeholder="Search..." className="w-full" autoFocus />
          </div>
        )}

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
            <Link href="/blog" className="hover:text-[#F2811D] transition-colors">
              BLOG
            </Link>
            <Link href="/podcast" className="hover:text-[#F2811D] transition-colors">
              PODCAST
            </Link>
            <Link href="/football" className="hover:text-[#F2811D] transition-colors">
              FOOTBALL
            </Link>
            <Link href="/technology" className="hover:text-[#F2811D] transition-colors">
              TECHNOLOGY
            </Link>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-[#F2811D] transition-colors flex items-center"
            >
              <Search size={20} className="mr-2" /> Search
            </button>
          </div>
        )}
      </div>
      <div className="accent-line"></div>
    </header>
  )
}
