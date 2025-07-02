"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Booking" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background backdrop-blur-3xl border-b border-border">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="w-14 sm:w-16">
            <Image
              src="/logo/NailsbySuri.png"
              alt="Evergreen Logo"
              width={64}
              height={64}
              priority
              className="block h-auto w-full object-contain"
            />
          </Link>
        </div>

        {/* Middle: Nav (Desktop Only) */}
        <nav className="hidden md:flex gap-6 font-sans text-xs lg:text-sm md:font-medium text-foreground uppercase">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Phone number + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+9779818554412"
            className="hidden sm:inline-flex items-center gap-2 text-xs lg:text-sm font-medium font-sans text-foreground border border-primary bg-primary/30 px-4 py-2 rounded-full hover:bg-primary/20 hover:text-accent transition-colors"
          >
            📞 +977 9818554412
          </a>

          {/* Mobile Menu Toggle */}
          <Button
            className="md:hidden bg-transparent hover:bg-background"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-6 space-y-4">
          <div className="flex flex-col items-start gap-4 text-sm font-sans">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <a
            href="tel:+9779818554412"
            className="block mt-4 text-sm text-foreground font-medium"
          >
            📞 +977 9818554412
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
