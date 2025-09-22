"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  Building2,
  Calendar,
  User,
  Clock,
  Facebook,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [popularTags, setPopularTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch data from API
  useEffect(() => {
    fetch("http://10.10.13.52:7079/calendy/blog-data/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setBlogs(data.blogs);
        setFilteredBlogs(data.blogs);
        setCategories(data.categories);
        setPopularPosts(data.popularPosts);
        setPopularTags(data.popularTags);
      });
  }, []);

  // Search functionality
  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query)
    );
    setFilteredBlogs(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {filteredBlogs.map((post) => (
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

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <Link href={`/blog/${post.slug}`}>
                  <Button
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    Mehr lesen
                  </Button>
                </Link>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-3 h-0.5 bg-black mr-3"></span>
                Suche
              </h3>
              <div className="flex">
                <Input
                  type="text"
                  placeholder="Search ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-r-none border-r-0"
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <Button
                  className="bg-gray-900 hover:bg-gray-800 rounded-l-none px-4"
                  onClick={handleSearch}
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            {/* Popular Feeds */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-3 h-0.5 bg-black mr-3"></span>
                Feeds
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
                Kategorien
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
                    <span className="bg-gray-900 text-white text-sm px-3 py-1 rounded">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social & Tags */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-3 h-0.5 bg-black mr-3"></span>
                Verpassen Sie keine Neuigkeiten
              </h3>
              <div className="flex justify-start space-x-4">
                <Link
                  href={"https://www.facebook.com/contekuechen"}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition-colors"
                >
                  <Facebook className="w-5 h-5 text-gray-600" />
                </Link>
                <Link
                  href={"https://www.instagram.com/contekuechen"}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition-colors"
                >
                  <FaInstagram className="w-5 h-5 text-gray-600" />
                </Link>
              </div>

              {/* Popular Tags */}
              <div className="mt-6 flex flex-wrap gap-3">
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
  );
}
