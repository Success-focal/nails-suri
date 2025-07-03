import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Youtube,
  MapPin,
} from "lucide-react";
import { quickLinks } from "@/lib/data/navLinks";

export default function Footer() {
  return (
    <footer className="relative w-full bg-muted/50 pt-28 pb-4 px-6 md:px-12 lg:px-20 text-sm text-muted-foreground backdrop-blur-md overflow-hidden">
      {/* Decorative Top Divider */}
      <div className="absolute -top-[1px] left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-[200%] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
            className="fill-[oklch(98.6%_0.012_20)]"
          />
        </svg>
      </div>

      {/* Content Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 gap-y-16 items-start max-w-7xl mx-auto z-10">
        {/* Logo + About */}
        <div className="space-y-4 text-center md:text-left">
          <div className="relative w-[150px] h-[150px] mx-auto md:mx-0 rounded-full overflow-hidden mb-2">
            <Image
              src="/logo/Footer.png"
              alt="Suri Nails Logo"
              fill
              sizes="(max-width: 768px) 100px, 150px"
              className="object-cover"
            />
          </div>

          <p className="text-xs leading-relaxed max-w-xs mx-auto md:mx-0 font-mono">
            Suri Nails: Where artistry meets elegance. Luxurious nail and beauty
            care, loved by thousands.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3 text-center md:text-left">
          <h4 className="text-foreground font-semibold text-base font-sans">
            Quick Links
          </h4>
          <ul className="space-y-1">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-foreground font-semibold text-base font-sans">
            Contact Us
          </h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@surinails.com" className="hover:text-accent">
                info@surinails.com
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+9779818554412" className="hover:text-accent">
                +977 9818554412
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="h-4 w-4" />
              <span>Gwarko, Nepal</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 hover:text-accent transition-colors" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 hover:text-accent transition-colors" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5 hover:text-accent transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border mt-16 pt-6 text-center text-xs text-muted-foreground font-mono relative z-10">
        © {new Date().getFullYear()} Suri Nails. All rights reserved.
      </div>
    </footer>
  );
}
