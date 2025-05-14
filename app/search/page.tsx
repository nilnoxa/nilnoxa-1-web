"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { searchPosts } from "@/lib/api"
import PostCard from "@/components/post-card"
import SectionHeader from "@/components/section-header"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchSearchResults() {
      if (query) {
        setLoading(true)
        const results = await searchPosts(query)
        setPosts(results)
        setLoading(false)
      } else {
        setPosts([])
        setLoading(false)
      }
    }

    fetchSearchResults()
  }, [query])

  return (
    <div className="section-white py-16">
      <div className="container mx-auto px-4">
        <SectionHeader title={`Search Results: ${query}`} variant="light" />

        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <PostCard key={post.id} post={post} variant="light" />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl">No results found for "{query}"</p>
            <p className="mt-4">Try a different search term or browse our categories.</p>
          </div>
        )}
      </div>
    </div>
  )
}
