import Image from "next/image"
import Link from "next/link"
import { formatDate, decodeHtmlEntities, stripHtml } from "@/lib/utils"

interface PostCardProps {
  post: any
  variant?: "light" | "dark"
}

export default function PostCard({ post, variant = "light" }: PostCardProps) {
  // Extract featured image URL
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg?height=400&width=600"

  // Format the date
  const date = formatDate(post.date)

  // Decode HTML entities in title and excerpt
  const title = decodeHtmlEntities(post.title.rendered)
  const excerpt = decodeHtmlEntities(post.excerpt.rendered)

  // Remove HTML tags from excerpt
  const cleanExcerpt = stripHtml(excerpt)

  return (
    <Link
      href={`/post/${post.slug}`}
      className={`block glow-effect ${variant === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="overflow-hidden">
        <Image
          src={featuredImage || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-[#F2811D] mb-2">{date}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-4 text-sm opacity-80">{cleanExcerpt.substring(0, 120)}...</div>
        <div className="inline-block accent-line w-12 mt-2"></div>
      </div>
    </Link>
  )
}
