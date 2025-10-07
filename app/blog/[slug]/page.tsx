import { notFound } from "next/navigation";
import Image from "next/image";
import { User, Building2, Clock } from "lucide-react";
import Sidebar from "./Sidebar";
import { BlogPost } from "@/types/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts/${slug}/`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    notFound();
  }

  const post: BlogPost = await res.json();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white">
              <Image
                width={1024}
                height={1024}
                src={post.image_url || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
              />

              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
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

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Content paragraphs */}
              <div className="prose prose-lg max-w-none">
                {post.excerpt ? (
                  post.excerpt.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-muted-foreground leading-relaxed mb-6"
                    >
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-muted-foreground italic">
                    No content available.
                  </p>
                )}
              </div>
            </article>
          </div>

          {/* Sidebar as a client component */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
