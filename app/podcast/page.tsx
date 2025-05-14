import { getPosts, getCategories } from "@/lib/api"
import PostCard from "@/components/post-card"
import SectionHeader from "@/components/section-header"

export default async function PodcastPage() {
  // Fetch categories to identify podcast category
  const categories = await getCategories()
  const podcastCategory = categories.find((cat: any) => cat.name.toLowerCase() === "podcast")?.id

  // Fetch podcast posts
  const podcastPosts = await getPosts(podcastCategory, 12)

  return (
    <div className="section-black py-16">
      <div className="container mx-auto px-4">
        <SectionHeader title="Podcast" variant="dark" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {podcastPosts.map((post: any) => (
            <PostCard key={post.id} post={post} variant="dark" />
          ))}
        </div>
      </div>
    </div>
  )
}
