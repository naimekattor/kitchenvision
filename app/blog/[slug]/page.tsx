"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  User,
  Building2,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

const blogPosts = {
  "Three-Conte-kitchens-nominated-we-are-proud": {
    title: "Drei Küchen von Conte nominiert – wir sind stolz",
    content: `Drei Küchen von Conte nominiert – wir sind stolz, auch in diesem Jahr Teil dieses besonderen Events zu sein

Wir freuen uns sehr, dass auch 2025 wieder drei außergewöhnliche Conte Küchen für die Global Kitchen Design nominiert wurden. Die Teilnahme an diesem internationalen Wettbewerb ist für uns längst eine geschätzte Tradition – und gleichzeitig immer wieder ein Highlight.

Unsere eingereichten Küchenprojekte repräsentieren das, wofür Conte Küche & Raum GmbH steht:

individuelles Küchendesign, das perfekt auf die Bedürfnisse unserer Kunden zugeschnitten ist

die Kombination aus modernster Technik und zeitloser Ästhetik

meisterhafte Handwerkskunst, die jedes Detail zu einem Erlebnis macht

Die Global Kitchen Design ist mehr als nur ein Wettbewerb – sie ist eine Plattform, auf der sich die besten Küchenstudios weltweit präsentieren und inspirieren lassen. Für uns bedeutet die Teilnahme Anerkennung unserer Arbeit und gleichzeitig Motivation, unseren hohen Anspruch an Qualität und Design auch in Zukunft konsequent fortzuführen.

Wir sind gespannt auf die diesjährigen Ergebnisse`,
    image: "/images/Blog1.png",
    secondImage: "/images/Blog1.png",
    author: "Team-Conte",
    category: "CONTE Haag",
    readTime: "0 minutes read",
    date: "31 May",
  },
  "ST-ONE-natural-stone-in-its-most-beautiful-form": {
    title: "ST-ONE natural stone in its most beautiful form",
    content: `ST-ONE – Naturstein in seiner schönsten Form

Ein einzigartiges Meisterstück für unsere Kunden

Abb.: ST-ONE High-End Luxury Monolith aus Naturstein – von uns bei einem unserer Kunden montiert.

Die ST-ONE ist weit mehr als nur eine Küche – sie ist ein architektonisches Statement und ein Naturunikat. Jede ST-ONE wird aus massivem Naturstein gefertigt und ist damit absolut einzigartig. Kein Stück gleicht dem anderen – jeder Monolith erzählt seine eigene Geschichte, geprägt durch Millionen Jahre Erdgeschichte.

Dieses Meisterwerk entsteht in enger Zusammenarbeit von Schreinern und Steinmetzmeistern, die mit höchster Präzision und Leidenschaft ein Unikat erschaffen. Das Ergebnis ist eine luxuriöse Küche, die Ästhetik und Funktionalität in vollendeter Form vereint.

Wir durften dieses besondere Stück jüngst bei einem unserer Kunden setzen und verewigen. Es war uns eine Freude, Teil dieses außergewöhnlichen Projekts zu sein – und wir wünschen unserem Kunden viele unvergessliche Momente mit seiner neuen ST-ONE.

Die ST-ONE steht sinnbildlich für unsere Philosophie: Einzigartige Materialien, meisterhafte Verarbeitung und zeitloses Design – für Menschen, die das Außergewöhnliche suchen.`,
    image: "/images/Blog2.jpg",
    secondImage: "/images/Blog2.jpg",
    author: "Team-Conte",
    category: "CONTE Haag",
    readTime: "0 minutes read",
    date: "31 May",
  },
  "May-we-introduce-Zoodles": {
    title: "Dürfen wie vorstellen: Zoodles. ",
    content: `Dürfen wie vorstellen: Zoodles. 
Neudeutsch für Nudeln aus Zucchini und ein neuer Genuss für den Gaumen. Kalorienarm, no carb, gesund und lecker. Sie brauchen einen Spiralschneider und natürlich Zucchini. Das beste und einfachste Rezept ist Zoodles aglio e olio: Einfach Knoblauch in Olivenöl sanft schmoren, die rohen Zoodles dazu, kurz durchschwenken, salzen und pfeffern. Fertig.`,
    image: "/images/Blog3picture1.jpg",
    secondImage: "/images/Blog3picture2.jpg",
    author: "Team-Conte",
    category: "CONTE Haag",
    readTime: "0 minutes read",
    date: "31 May",
  },
};

const categories = [
  { name: "Space Craft Studio", count: 4 },
  { name: "Architecture Plus", count: 3 },
  { name: "Dream Home Designs", count: 7 },
  { name: "Urban Oasis", count: 6 },
  { name: "Interior Perfection", count: 3 },
  { name: "Blueprint Builders", count: 3 },
];

const popularTags = [
  "Interiors",
  "The Design",
  "Blueprint",
  "Builders",
  "Modern",
  "Living",
  "Spacers",
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white">
              <Image
                width={1024}
                height={1024}
                src={post.image || "/placeholder.svg"}
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
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                {post.title}
              </h1>

              <div className="prose prose-lg max-w-none">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed mb-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Second Image */}
              <Image
                width={1024}
                height={1024}
                src={post.secondImage || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg my-8"
              />
            </article>

            {/* Pagination */}
            {/* <div className="flex items-center justify-between mt-12 pt-8 border-t">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  <ChevronLeft className="w-4 h-4 mr-1" />
                </Button>
                <Button variant="outline" size="sm">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                </Button>
                <Button variant="default" size="sm" className="bg-gray-900 text-white">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
                <Button variant="outline" size="sm">
                  <ChevronRight className="w-4 h-4 ml-1" />
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <span className="text-sm text-muted-foreground">Page 1 of 2</span>
            </div> */}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
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
  );
}
