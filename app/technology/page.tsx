import { getPosts, getCategories } from "@/lib/api"
import PostCard from "@/components/post-card"
import SectionHeader from "@/components/section-header"

export default async function TechnologyPage() {
  // Fetch categories to identify technology category
  const categories = await getCategories()
  const technologyCategory = categories.find((cat: any) => cat.name.toLowerCase() === "technology")?.id

  // Fetch technology posts
  const technologyPosts = await getPosts(technologyCategory, 12)

  return (
    <div className="section-black py-16">
      <div className="container mx-auto px-4">
        <SectionHeader title="Technology News" variant="dark" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologyPosts.map((post: any) => (
            <PostCard key={post.id} post={post} variant="dark" />
          ))}
        </div>
      </div>
    </div>
  )
}
