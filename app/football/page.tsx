import { getPosts, getCategories } from "@/lib/api"
import PostCard from "@/components/post-card"
import SectionHeader from "@/components/section-header"

export default async function FootballPage() {
  // Fetch categories to identify football category
  const categories = await getCategories()
  const footballCategory = categories.find((cat: any) => cat.name.toLowerCase() === "football")?.id

  // Fetch football posts
  const footballPosts = await getPosts(footballCategory, 12)

  return (
    <div className="section-white py-16">
      <div className="container mx-auto px-4">
        <SectionHeader title="Football News" variant="light" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footballPosts.map((post: any) => (
            <PostCard key={post.id} post={post} variant="light" />
          ))}
        </div>
      </div>
    </div>
  )
}
