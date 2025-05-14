import { getPosts, getCategories } from "@/lib/api"
import PostCard from "@/components/post-card"
import SectionHeader from "@/components/section-header"
import Link from "next/link"

export default async function Home() {
  // Fetch categories to identify blog, podcast, football, and technology categories
  const categories = await getCategories()

  // Find category IDs (you may need to adjust these based on your actual WordPress categories)
  const blogCategory = categories.find((cat: any) => cat.name.toLowerCase() === "blog")?.id
  const podcastCategory = categories.find((cat: any) => cat.name.toLowerCase() === "podcast")?.id
  const footballCategory = categories.find((cat: any) => cat.name.toLowerCase() === "football")?.id
  const technologyCategory = categories.find((cat: any) => cat.name.toLowerCase() === "technology")?.id

  // Fetch posts for each category
  const blogPosts = await getPosts(blogCategory, 3)
  const podcastPosts = await getPosts(podcastCategory, 3)
  const footballPosts = await getPosts(footballCategory, 3)
  const technologyPosts = await getPosts(technologyCategory, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="section-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">WORLD PULSE TRENDS</h1>
            <div className="accent-line w-32 mx-auto mb-6"></div>
            <p className="text-xl mb-8">Your source for the latest blogs, podcasts, football and technology news</p>
          </div>
        </div>
      </section>

      {/* Blog Section - White Background */}
      <section className="section-white py-16">
        <div className="container mx-auto px-4">
          <SectionHeader title="Latest Blog Posts" variant="light" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post: any) => (
              <PostCard key={post.id} post={post} variant="light" />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-block border-2 border-black px-6 py-3 font-bold hover:bg-black hover:text-white transition-colors"
            >
              VIEW ALL BLOG POSTS
            </Link>
          </div>
        </div>
      </section>

      {/* Podcast Section - Black Background */}
      <section className="section-black py-16">
        <div className="container mx-auto px-4">
          <SectionHeader title="Featured Podcasts" variant="dark" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {podcastPosts.map((post: any) => (
              <PostCard key={post.id} post={post} variant="dark" />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/podcast"
              className="inline-block border-2 border-white px-6 py-3 font-bold hover:bg-white hover:text-black transition-colors"
            >
              LISTEN TO ALL EPISODES
            </Link>
          </div>
        </div>
      </section>

      {/* Football Section - White Background */}
      <section className="section-white py-16">
        <div className="container mx-auto px-4">
          <SectionHeader title="Football News" variant="light" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {footballPosts.map((post: any) => (
              <PostCard key={post.id} post={post} variant="light" />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/football"
              className="inline-block border-2 border-black px-6 py-3 font-bold hover:bg-black hover:text-white transition-colors"
            >
              MORE FOOTBALL NEWS
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Section - Black Background */}
      <section className="section-black py-16">
        <div className="container mx-auto px-4">
          <SectionHeader title="Technology Updates" variant="dark" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologyPosts.map((post: any) => (
              <PostCard key={post.id} post={post} variant="dark" />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/technology"
              className="inline-block border-2 border-white px-6 py-3 font-bold hover:bg-white hover:text-black transition-colors"
            >
              EXPLORE TECH NEWS
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
