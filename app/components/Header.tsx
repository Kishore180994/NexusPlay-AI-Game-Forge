"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AIStarIcon from "./AIStarIcon";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-black bg-opacity-50 fixed top-0 w-full z-50 transition-transform duration-300 ${
        scrolled ? "transform -translate-y-12" : "transform translate-y-0"
      }`}
    >
      <div className="container mx-auto px-4 py-3 transition-all duration-300">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <div className="transform transition-transform duration-300 group-hover:scale-110">
              <AIStarIcon className="h-8 w-8 mr-2" />
            </div>
            <span className="font-bold text-xl">NexusPlay: AI Game Forge</span>
          </Link>
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                {pathname === "/" ? (
                  <button
                    onClick={() => scrollToSection("features")}
                    className="hover:text-purple-300 transition-colors duration-300"
                  >
                    Features
                  </button>
                ) : (
                  <Link
                    href="/#features"
                    className="hover:text-purple-300 transition-colors duration-300"
                  >
                    Features
                  </Link>
                )}
              </li>
              <li>
                {pathname === "/" ? (
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="hover:text-purple-300 transition-colors duration-300"
                  >
                    How It Works
                  </button>
                ) : (
                  <Link
                    href="/#how-it-works"
                    className="hover:text-purple-300 transition-colors duration-300"
                  >
                    How It Works
                  </Link>
                )}
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-purple-300 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  Get Started
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
