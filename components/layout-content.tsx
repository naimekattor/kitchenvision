"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/site-header";
import Footer from "./site-footer";
import dynamic from "next/dynamic";
import HeroContent from "./HeroContent";
import NotFound from "./NotFound";
import { usePathname } from "next/navigation";
import CtaBanner from "./CtaBanner";
import TopHeader from "./TopHeader";
import CookieBanner from "./CookieBanner";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "/";
  const isHome = pathname === "/";

  const ALLOWED_ROUTES = [
    "/",
    "/about",
    "/contact",
    "/blog",
    "/service",
    "/privacy-policy",
  ];
  const isAllowed = ALLOWED_ROUTES.some(
    (r) => pathname === r || pathname.startsWith(r + "/")
  );

  // If current path isn't in the allowlist, render only the NotFound page (no header/footer/etc.)
  if (!isAllowed) {
    return <NotFound />;
  }

  return (
    <>
      <ToastContainer />

      <AnimatedCursor
        color="228,0,75"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2.7}
        outerAlpha={0.2}
        outerStyle={{ mixBlendMode: "exclusion" }}
      />
      {isHome && <TopHeader />}

      {/* Sticky Header */}
      <header className="sticky top-0 z-50">
        <Header />
      </header>

      {/* HeroContent only on non-home pages */}
      {!isHome && (
        <section className="relative w-full">
          <div className="relative -mt-[var(--header-height)] z-0">
            <HeroContent />
          </div>
        </section>
      )}

      {/* Main content */}
      <main className={!isHome ? "pt-[var(--header-height)]" : ""}>
        <CookieBanner />
        {children}
      </main>

      {/* Footer with CTA banner on non-home pages */}
      <footer className="relative">
        {!isHome && (
          <div className="relative z-10  mx-auto -mb-40">
            <CtaBanner />
          </div>
        )}

        <Footer />
      </footer>
    </>
  );
}
