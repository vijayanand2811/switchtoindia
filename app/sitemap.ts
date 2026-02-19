import { MetadataRoute } from 'next'
import alternatives from "@/data/alternatives.json"
import products from "@/data/products.json"
import categories from "@/data/categories.json"

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = "https://switchtoindia.vercel.app"

  const alternativePages = alternatives.map((alt: any) => ({
    url: `${baseUrl}/alternative/${alt.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const productPages = products.map((p: any) => ({
    url: `${baseUrl}/product/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const categoryPages = categories.map((c: any) => ({
    url: `${baseUrl}/category/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...alternativePages,
    ...productPages,
    ...categoryPages,
  ]
}
