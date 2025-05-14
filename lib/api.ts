// WordPress API helper functions

// Base API URL
const API_URL = "https://worldpulsetrends.com/wp-json/wp/v2"

// Fetch posts with category and featured media
export async function getPosts(category?: number, perPage = 6, page = 1) {
  let url = `${API_URL}/posts?_embed&per_page=${perPage}&page=${page}`

  if (category) {
    url += `&categories=${category}`
  }

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } })

    if (!res.ok) {
      throw new Error("Failed to fetch posts")
    }

    const posts = await res.json()
    return posts
  } catch (error) {
    console.error("Error fetching posts:", error)
    return []
  }
}

// Get a single post by slug
export async function getPostBySlug(slug: string) {
  try {
    const res = await fetch(`${API_URL}/posts?slug=${slug}&_embed`, { next: { revalidate: 3600 } })

    if (!res.ok) {
      throw new Error("Failed to fetch post")
    }

    const posts = await res.json()
    return posts[0]
  } catch (error) {
    console.error("Error fetching post:", error)
    return null
  }
}

// Get categories
export async function getCategories() {
  try {
    const res = await fetch(`${API_URL}/categories`, { next: { revalidate: 86400 } })

    if (!res.ok) {
      throw new Error("Failed to fetch categories")
    }

    const categories = await res.json()
    return categories
  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}

// Search posts
export async function searchPosts(searchTerm: string) {
  try {
    const res = await fetch(`${API_URL}/posts?_embed&search=${encodeURIComponent(searchTerm)}`, { cache: "no-store" })

    if (!res.ok) {
      throw new Error("Failed to search posts")
    }

    const posts = await res.json()
    return posts
  } catch (error) {
    console.error("Error searching posts:", error)
    return []
  }
}
