"use client";
import Link from "next/link";
import { Facebook, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaInstagram } from "react-icons/fa";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const handleSend = () => {
    if (!email) return;
    window.location.href = `mailto:${email}?subject=Hello from My App&body=Hi ${email},%0D%0A%0D%0AThis is a test message.`;
  };
  return (
    <footer
      className={`bg-black text-white pb-16 ${isHome ? "pt-16" : "pt-64"} px-4`}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="inline-block mb-4">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    priority={false}
                    src="/images/logo.png"
                    width={200}
                    height={86}
                    alt="conten Kuche & raum logo"
                    className="w-[200px] h-[86px]"
                  />
                  <span className="sr-only">Go to homepage</span>
                </Link>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              It is a long established fact that a reader will be distracted
            </p>

            {/* Email Subscription */}
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#191919] px-2 focus:outline-none text-white placeholder:text-gray-400 rounded-r-none"
              />
              <Button
                onClick={handleSend}
                className="bg-[#333333] hover:bg-gray-600 rounded-l-none px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <Link
                href={"https://www.facebook.com/contekuechen"}
                className="w-10 h-10 bg-[#191919] hover:bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href={"https://www.instagram.com/contekuechen"}
                className="w-10 h-10 bg-[#191919] hover:bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xl font-bold mb-6"> Links</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Über uns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kontakt
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="https://www.contekuechen.de/kontakt/impressum.html"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Impressum und Datenschutz
                </a>
              </li>
            </ul>
          </div>

          {/* More Service Column */}
          <div>
            <h4 className="text-xl font-bold mb-6">More Service</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  SpaceCraft Studio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Interiorscape Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Architecture Plus
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dream Home Designs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Interior Perfection
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xl font-bold mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Adresse</p>
                  <p className="text-white font-medium">
                    Hauptstraße 36, 83527 Haag in Oberbayern
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone Number</p>
                  <p className="text-white font-medium">08072/6869555</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email Address</p>
                  <p className="text-white font-medium">info@contekuechen.de</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © Conte Kuche & Raum 2025 | All Rights Reserved
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Trams & Condition
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
