import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="accent-line"></div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BLOG</h3>
            <div className="accent-line w-16 mb-4"></div>
            <p className="mb-4">Discover our latest articles and insights on various topics.</p>
            <Link href="/blog" className="text-[#F2811D] hover:underline">
              View All Posts
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">PODCAST</h3>
            <div className="accent-line w-16 mb-4"></div>
            <p className="mb-4">Listen to our podcasts covering interesting stories and discussions.</p>
            <Link href="/podcast" className="text-[#F2811D] hover:underline">
              All Episodes
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">TECHNOLOGY</h3>
            <div className="accent-line w-16 mb-4"></div>
            <p className="mb-4">Stay updated with the latest technology news and trends.</p>
            <Link href="/technology" className="text-[#F2811D] hover:underline">
              Tech News
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#F2811D]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} World Pulse Trends. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Link href="/about" className="hover:text-[#F2811D]">
                About
              </Link>
              <Link href="/contact" className="hover:text-[#F2811D]">
                Contact
              </Link>
              <Link href="/privacy" className="hover:text-[#F2811D]">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
