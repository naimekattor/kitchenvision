"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "./ui/button";
import { PopupModal } from "react-calendly";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const root = document.getElementById("__next") ?? document.body;
    setRootElement(root);
  }, []);

  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setHeight = () => {
      const h = el.offsetHeight;
      document.documentElement.style.setProperty("--header-height", `${h}px`);
    };

    // initial set
    setHeight();

    // update on resize / element size changes
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(() => setHeight());
      ro.observe(el);
      window.addEventListener("resize", setHeight);
      // scroll listener for changing header color when sticky
      const onScroll = () => setIsScrolled(window.scrollY > 10);
      window.addEventListener("scroll", onScroll, { passive: true });

      return () => {
        ro.disconnect();
        window.removeEventListener("resize", setHeight);
        window.removeEventListener("scroll", onScroll);
      };
    }

    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("resize", setHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", setHeight);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // choose header colors depending on page and scroll state
  const baseCls = "w-full py-2 transition-colors duration-300";
  let colorCls = "bg-transparent text-black";
  if (!isHome) {
    // other pages: default black header with white text; when scrolled -> white bg with dark text
    colorCls = isScrolled ? "bg-white text-black shadow-md" : " text-white";
  } else {
    // home page: transparent by default, white bg when scrolled
    colorCls = isScrolled
      ? "bg-white text-black shadow-md"
      : "bg-transparent text-black";
  }

  return (
    <header ref={headerRef} className={`${baseCls} ${colorCls}`}>
      <div className="container mx-auto flex  items-center justify-between ">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            width={200}
            height={86}
            alt="conten Kuche & raum logo"
          />
          <span className="sr-only">Go to homepage</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex ">
          <Link
            href="/"
            className={`text-[18px]  ${
              pathname === "/home" ? "text-[#02618e]" : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`text-[18px] ${
              pathname === "/about" ? "text-[#02618e]" : ""
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`text-[18px] ${
              pathname === "/contact" ? "text-[#02618e]" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="md:block hidden">
          <Button className="h-12 w-[150px]" onClick={() => setShowModal(true)}>
            Book Now <ArrowRight />
          </Button>

          {showModal && rootElement && (
            <PopupModal
              url="https://calendly.com/contekuechen"
              onModalClose={() => setShowModal(false)}
              open={showModal}
              rootElement={rootElement}
            />
          )}
        </div>

        <div className="md:hidden block">
          <button
            aria-label="Toggle menu"
            className={`inline-flex items-center justify-center rounded-md p-2 
            ${
              isHome
                ? isScrolled
                  ? "text-black"
                  : "text-black"
                : isScrolled
                ? "text-black"
                : "text-white "
            }
             hover:bg-white/10 md:hidden`}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`absolute left-0 top-0 h-screen w-64 bg-black/90 transform transition-transform duration-300
${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex flex-col space-y-6 p-6 text-white">
            <Link href="/" onClick={() => setOpen(false)} className="text-lg">
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-lg"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-lg"
            >
              Contact
            </Link>
            <Button
              className="h-12 w-[150px]"
              onClick={() => setShowModal(true)}
            >
              Book Now <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
