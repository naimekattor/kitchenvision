"use client";

import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 w-full border-b 
        
          border-white/10 bg-white text-black
          
       backdrop-blur-xl py-2"
    >
      <div className="container mx-auto flex  items-center justify-between px-4 ">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            width={200}
            height={86}
            alt="conten Kuche & raum logo"
          />
          <span className="sr-only">Go to homepage</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#Home" className="text-[18px]  ">
            Home
          </Link>

          <Link href="#about" className="text-[18px] ">
            About
          </Link>
          <Link href="#services" className="text-[18px] ">
            Services
          </Link>
          <Link href="#blog" className="text-[18px] ">
            Blog
          </Link>
          <Link
            href="#contact"
            className="flex items-center gap-1 text-[18px] "
          >
            Contact
          </Link>
        </nav>

        <div className="md:block hidden">
          <Button className="h-12 w-[150px]">
            Book Now <ArrowRight />
          </Button>
        </div>

        <div className=" ">
          <button
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-md p-2 
              text-white
             hover:bg-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/70 md:hidden">
          <div
            className="container mx-auto grid gap-2 px-4 py-3"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              const target = e.target as HTMLElement;
              const link = target.closest("a");
              if (link) {
                const href = link.getAttribute("href");
                console.log("click link href", href);
                setOpen(false);
              }
            }}
          >
            <Link href="/" className="py-1 text-sm text-slate-200">
              About
            </Link>
            <Link href="/creator" className="py-1 text-sm text-slate-200">
              Skills
            </Link>
            <Link href="/faq" className="py-1 text-sm text-slate-200">
              Experience
            </Link>
            <Link href="/privacy" className="py-1 text-sm text-slate-200">
              Projects
            </Link>
            <Link href="/privacy" className="py-1 text-sm text-slate-200">
              Reviews
            </Link>
            <Link href="/privacy" className="py-1 text-sm text-slate-200">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
