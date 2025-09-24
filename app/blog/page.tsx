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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { BlogPost } from "../../types/blog";

// Category + Tags Types
interface Category {
  name: string;
  count: number;
}
interface PopularTag {
  tag: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [popularPosts, setPopularPosts] = useState<BlogPost[]>([]);
  const [popularTags, setPopularTags] = useState<PopularTag[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts/`
        );
        const postsData: BlogPost[] = await postsRes.json();
        setBlogs(postsData);

        const categoriesRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/`
        );
        setCategories(await categoriesRes.json());

        const popularPostsRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/popular-posts/`
        );
        setPopularPosts(await popularPostsRes.json());

        const popularTagsRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/popular-tags/`
        );
        setPopularTags(await popularTagsRes.json());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // ✅ Filter blogs based on search
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ✅ Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* =================== MAIN CONTENT =================== */}
          <div className="lg:col-span-2 space-y-12">
            {currentPosts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Image
                  src="/images/no-post.jpg"
                  alt="No posts found"
                  width={120}
                  height={120}
                  className="opacity-50 mb-6 w-auto h-auto"
                />
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Keine Beiträge gefunden
                </h2>
                <p className="text-muted-foreground max-w-md">
                  Wir konnten keine Beiträge für Ihre Suche finden. <br />
                  Bitte versuchen Sie es mit einem anderen Suchbegriff.
                </p>
              </div>
            ) : (
              currentPosts.map((post) => (
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
                      <span>{post.read_time} min read</span>
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt?.slice(0, 100)}...
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
              ))
            )}

            {/* =================== PAGINATION =================== */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-12 pt-8 border-t">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>

                  {[...Array(totalPages)].map((_, i) => (
                    <Button
                      key={i}
                      variant={currentPage === i + 1 ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>

                {/* Page info */}
                <span className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
            )}
          </div>

          {/* =================== SIDEBAR =================== */}
          <div className="space-y-8">
            {/* ---------- Search ---------- */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-3 h-0.5 bg-black mr-3"></span>Suche
              </h3>
              <div className="flex">
                <Input
                  type="text"
                  placeholder="Search ..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1); // reset to page 1 when searching
                  }}
                  className="rounded-r-none border-r-0"
                  onKeyDown={(e) => e.key === "Enter" && setCurrentPage(1)}
                />
                <Button
                  className="bg-gray-900 hover:bg-gray-800 rounded-l-none px-4"
                  onClick={() => setCurrentPage(1)}
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            {/* ---------- Popular Feeds ---------- */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-3 h-0.5 bg-black mr-3"></span>Feeds
              </h3>
              <div className="space-y-4">
                {popularPosts.slice(0, 3).map((post, index) => (
                  <Link key={index} href={`/blog/${post.slug}`}>
                    <div className="flex space-x-4">
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
                          {/* fallback for created_at */}
                          {post.created_at
                            ? new Date(post.created_at).toLocaleDateString(
                                "de-DE",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                }
                              )
                            : ""}
                        </div>
                        <h4 className="font-semibold text-sm leading-tight hover:text-primary cursor-pointer">
                          {post.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>

            {/* ---------- Categories ---------- */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-3 h-0.5 bg-black mr-3"></span>Kategorien
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

            {/* ---------- Social ---------- */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-3 h-0.5 bg-black mr-3"></span>Verpassen Sie
                keine Neuigkeiten
              </h3>
              <div className="flex justify-start space-x-4">
                <Link
                  href="https://www.facebook.com/contekuechen"
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition-colors"
                >
                  <Facebook className="w-5 h-5 text-gray-600" />
                </Link>
                <Link
                  href="https://www.instagram.com/contekuechen"
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition-colors"
                >
                  <FaInstagram className="w-5 h-5 text-gray-600" />
                </Link>
              </div>
            </Card>

            {/* ---------- Popular Tags ---------- */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-3 h-0.5 bg-black mr-3"></span>Beliebte Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {popularTags.map((t, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="hover:bg-gray-900 hover:text-white transition-colors bg-transparent"
                  >
                    {t.tag}
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
