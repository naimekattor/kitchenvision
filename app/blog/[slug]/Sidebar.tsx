"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Facebook } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Category {
  name: string;
  count: number;
}

interface PopularTag {
  tag: string;
}

export default function Sidebar() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [popularTags, setPopularTags] = useState<PopularTag[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const catRes = await fetch(`${API_BASE}/categories/`);
        if (!catRes.ok) throw new Error("Categories fetch failed");
        const catData = await catRes.json();
        setCategories(catData);

        const tagRes = await fetch(`${API_BASE}/popular-tags/`);
        if (!tagRes.ok) throw new Error("Tags fetch failed");
        const tagData = await tagRes.json();
        setPopularTags(tagData);
      } catch (error) {
        console.error("Sidebar fetch error:", error);
      }
    };
    fetchData();
  }, []);
  console.log(categories);

  return (
    <div className="space-y-8">
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

      {/* Never Miss News */}
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <span className="w-3 h-0.5 bg-black mr-3"></span>
          Verpassen Sie keine Neuigkeiten
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

      {/* Popular Tags */}
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <span className="w-3 h-0.5 bg-black mr-3"></span>
          Beliebte Tags
        </h3>
        <div className="flex flex-wrap gap-3">
          {popularTags.map((tag, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="hover:bg-gray-900 hover:text-white transition-colors bg-transparent"
            >
              {tag.tag}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
}
