import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import scetLogo from "@/assets/scet-logo.jpg";

interface NavbarProps {
  onOpenRules: () => void;
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Guests", href: "#guests" },
  { label: "Brochure", href: "#brochure" },
  { label: "Tracks", href: "#tracks" },
  { label: "Process", href: "#process" },
  { label: "Prizes", href: "#prizes" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ onOpenRules }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (!target) return;

    const navOffset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 h-14 md:h-16 flex items-center relative">
        {/* LEFT LOGO */}
        <a href="#" className="flex items-center gap-2 z-10">
          <img
            src={scetLogo}
            alt="SCET Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
          <span className="hidden min-[360px]:inline font-display text-base sm:text-lg font-bold text-primary text-glow-blue">
            VISION-X
          </span>
        </a>

        {/* CENTER NAV LINKS */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-heading font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE BUTTONS (Always Visible) */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4 ml-auto">
          <button
            onClick={onOpenRules}
            type="button"
            className="px-2 sm:px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-border text-[11px] sm:text-xs md:text-sm font-heading text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-pointer active:scale-95"
          >
            Rules
          </button>

          <a
            href="#register"
            className="px-2.5 sm:px-3 md:px-5 py-1.5 md:py-2 rounded-lg bg-primary text-primary-foreground text-[11px] sm:text-xs md:text-sm font-heading font-semibold hover:scale-105 transition-transform"
          >
            Register
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground p-2 cursor-pointer touch-manipulation active:scale-95"
            aria-label="Menu"
            type="button"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
        >
          <div className="flex flex-col gap-2 p-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  requestAnimationFrame(() => scrollToSection(l.href));
                }}
                className="text-sm font-heading font-medium text-muted-foreground hover:text-primary active:text-primary py-2 transition-colors cursor-pointer touch-manipulation"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
