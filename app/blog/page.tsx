import { getPosts, getCategories } from "@/lib/api"
import PostCard from "@/components/post-card"
import SectionHeader from "@/components/section-header"

export default async function BlogPage() {
  // Fetch categories to identify blog category
  const categories = await getCategories()
  const blogCategory = categories.find((cat: any) => cat.name.toLowerCase() === "blog")?.id

  // Fetch blog posts (more posts for dedicated page)
  const blogPosts = await getPosts(blogCategory, 12)

  return (
    <div className="section-white py-16">
      <div className="container mx-auto px-4">
        <SectionHeader title="Blog" variant="light" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post: any) => (
            <PostCard key={post.id} post={post} variant="light" />
          ))}
        </div>
      </div>
    </div>
  )
}
