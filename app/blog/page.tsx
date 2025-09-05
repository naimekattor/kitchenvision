"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Search,
  Building2,
  Calendar,
  User,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    slug: "creating-masterpieces-one-room-at-a-time",
    title: "Creating Masterpieces One Room At A Time",
    excerpt:
      "There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable. If you are going to use a passage of Lorem Ipsum.",
    image: "/images/blog-post-kitchen-1.png",
    author: "Windstripe",
    category: "Space Craft Studio",
    readTime: "0 minutes read",
    date: "31 May",
  },
  {
    id: 2,
    slug: "crafting-spaces-that-reflect-your-style",
    title: "Crafting Spaces That Reflect Your Style",
    excerpt:
      "There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable. If you are going to use a passage of Lorem Ipsum.",
    image: "/images/blog-post-kitchen-2.png",
    author: "Windstripe",
    category: "Space Craft Studio",
    readTime: "0 minutes read",
    date: "31 May",
  },
  {
    id: 3,
    slug: "creating-timeless-interiors-cherishing-memories",
    title: "Creating Timeless Interiors Cherishing Memories",
    excerpt:
      "There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable. If you are going to use a passage of Lorem Ipsum.",
    image: "/images/blog-post-kitchen-3.png",
    author: "Windstripe",
    category: "Space Craft Studio",
    readTime: "0 minutes read",
    date: "31 May",
  },
]

const categories = [
  { name: "Space Craft Studio", count: 4 },
  { name: "Architecture Plus", count: 3 },
  { name: "Dream Home Designs", count: 7 },
  { name: "Urban Oasis", count: 6 },
  { name: "Interior Perfection", count: 3 },
  { name: "Blueprint Builders", count: 3 },
]

const popularPosts = [
  {
    title: "Crafting Spaces That Reflect Your Style",
    image: "/images/blog-post-kitchen-1.png",
    date: "31 May",
  },
  {
    title: "Redefining The Concept Of The Most Living",
    image: "/images/blog-post-kitchen-2.png",
    date: "31 May",
  },
  {
    title: "Building Dreams, One Room At A The Time",
    image: "/images/blog-post-kitchen-3.png",
    date: "31 May",
  },
]

const popularTags = ["Interiors", "The Design", "Blueprint", "Builders", "Modern", "Living", "Spacers"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                    width={1000}
                    height={1024}
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-64 md:h-80 object-cover rounded-lg mb-6 hover:opacity-95 transition-opacity"
                    />
                  </Link>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Building2 className="w-4 h-4" />
                      <span>{post.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>

                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground bg-transparent">
                      Read More
                    </Button>
                  </Link>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                <Button variant="default" size="sm" className="bg-gray-900 text-white">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  <ChevronRight className="w-4 h-4 ml-1" />
                  Next
                </Button>
              </div>
              <span className="text-sm text-muted-foreground">Page 1 of 2</span>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-3 h-0.5 bg-black mr-3"></span>
                Search
              </h3>
              <div className="flex">
                <Input type="text" placeholder="Search ..." className="rounded-r-none border-r-0" />
                <Button className="bg-gray-900 hover:bg-gray-800 rounded-l-none px-4">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            {/* Popular Feeds */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-3 h-0.5 bg-black mr-3"></span>
                Popular Feeds
              </h3>
              <div className="space-y-4">
                {popularPosts.map((post, index) => (
                  <div key={index} className="flex space-x-4">
                    <Image
                    width={1024}
                    height={1024}
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                      <h4 className="font-semibold text-sm leading-tight hover:text-primary cursor-pointer">
                        {post.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Categories */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-3 h-0.5 bg-black mr-3"></span>
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                      {category.name}
                    </span>
                    <span className="bg-gray-900 text-white text-sm px-3 py-1 rounded">{category.count}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Never Miss News */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-3 h-0.5 bg-black mr-3"></span>
                Never Miss News
              </h3>
              <div className="flex justify-center space-x-4">
                <div className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Facebook className="w-5 h-5 text-gray-600" />
                </div>
                <div className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Twitter className="w-5 h-5 text-gray-600" />
                </div>
                <div className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Instagram className="w-5 h-5 text-gray-600" />
                </div>
                <div className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </div>
                <div className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Youtube className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </Card>

            {/* Popular Tags */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-3 h-0.5 bg-black mr-3"></span>
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {popularTags.map((tag, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="hover:bg-gray-900 hover:text-white transition-colors bg-transparent"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
