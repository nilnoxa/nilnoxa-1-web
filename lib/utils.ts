import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Format date to "Month DD, YYYY" format
export function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

// Decode HTML entities
export function decodeHtmlEntities(html: string) {
  if (typeof window === "undefined") {
    // Server-side rendering
    return html
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
  } else {
    // Client-side rendering
    const txt = document.createElement("textarea")
    txt.innerHTML = html
    return txt.value
  }
}

// Remove HTML tags from string
export function stripHtml(html: string) {
  return html.replace(/<\/?[^>]+(>|$)/g, "")
}

// Get category name by ID from categories array
export function getCategoryName(categoryId: number, categories: any[]) {
  const category = categories.find((cat) => cat.id === categoryId)
  return category ? category.name : "Uncategorized"
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
