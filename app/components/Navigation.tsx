"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Logo = () => (
  <Link href="/" className="flex items-center gap-3 group">
    <div className="relative w-20 h-20">
      <Image 
        src="/images/logo.png" 
        alt="HG Transport Experts Logo" 
        width={80} 
        height={80}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  </Link>
);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Diensten", href: "/diensten" },
    { name: "Over Ons", href: "/over-ons" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-900/95 backdrop-blur-lg shadow-xl py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isActive(link.href)
                  ? "bg-yellow-500 text-zinc-900"
                  : "text-zinc-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 bg-yellow-500 hover:bg-yellow-400 text-zinc-900 px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105"
          >
            Offerte Aanvragen
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-zinc-900/95 backdrop-blur-lg mt-3 mx-6 rounded-2xl p-6 border border-zinc-700"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl text-center font-medium ${
                  isActive(link.href)
                    ? "bg-yellow-500 text-zinc-900"
                    : "text-zinc-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-yellow-500 text-zinc-900 px-6 py-3 rounded-xl font-semibold text-center mt-2"
            >
              Offerte Aanvragen
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
