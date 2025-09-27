"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Folder } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "../types/blog"; // ✅ use your BlogPost type

const Blog = () => {
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const blogFetch = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`
        );
        //console.log("API Base URL:", process.env.NEXT_PUBLIC_API_BASE_URL);
        const data: BlogPost[] = await res.json();
        console.log(data);

        setBlogPosts(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    blogFetch();
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-start mb-12">
          <p className="text-sm text-muted-foreground mb-4 font-medium">
            Blog & News
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Räume schaffen, die Ihre Persönlichkeit widerspiegeln.
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{
              el: ".team-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="team-swiper py-8"
          >
            {/* ✅ Map API posts */}
            {blogPosts.slice(0, 4).map((blog, indx) => (
              <SwiperSlide key={indx}>
                <div className="relative bg-white rounded overflow-visible py-16">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    width={800}
                    height={320}
                    className="w-full h-80 object-cover rounded"
                  />
                  <div className="absolute bottom-6 left-4 right-4 bg-[#F8F8F8] px-4 py-3 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <Folder size={16} />
                      <p>{blog.category}</p>
                    </div>
                    <h4 className="font-bold text-lg">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* ✅ You can keep these static slides if needed */}
            {/* <SwiperSlide>
              <div className="relative bg-white rounded overflow-visible py-16">
                <Image
                  src={`/images/blog2.jpg`}
                  width={800}
                  height={320}
                  alt="Blog Image"
                  className="w-full h-80 object-cover rounded"
                />
                <div className="absolute bottom-6 left-4 right-4 bg-[#F8F8F8] px-4 py-3 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <Folder size={16} />
                    <p>CONTE Haag</p>
                  </div>
                  <h4 className="font-bold text-lg">
                    <Link href="http://localhost:3001/blog/ST-ONE-natural-stone-in-its-most-beautiful-form">
                      ST-ONE – Naturstein in seiner schönsten Form...
                    </Link>
                  </h4>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>

          {/* Pagination Dots */}
          <div
            ref={paginationRef}
            className="team-pagination flex justify-center mt-8 space-x-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
