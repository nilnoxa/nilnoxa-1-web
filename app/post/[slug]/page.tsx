import { getPostBySlug, getCategories } from "@/lib/api"
import { formatDate, decodeHtmlEntities } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Extract featured image URL
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg?height=800&width=1200"

  // Format the date
  const date = formatDate(post.date)

  // Decode HTML entities in title and content
  const title = decodeHtmlEntities(post.title.rendered)
  const content = post.content.rendered

  // Get categories
  const categories = await getCategories()
  const postCategories = post.categories.map((catId: number) => {
    const category = categories.find((cat: any) => cat.id === catId)
    return category ? category.name : "Uncategorized"
  })

  return (
    <article className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="text-sm text-[#F2811D] mb-2">{date}</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {postCategories.map((category: string, index: number) => (
                <span key={index} className="text-xs px-3 py-1 bg-black text-white">
                  {category.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <Image
              src={featuredImage || "/placeholder.svg"}
              alt={title}
              width={1200}
              height={800}
              className="w-full h-auto rounded"
            />
          </div>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />

          <div className="mt-12 pt-6 border-t border-[#F2811D]">
            <Link href="/" className="text-[#F2811D] hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
