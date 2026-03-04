import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import scetLogo from "@/assets/scet-logo.jpg";

interface NavbarProps {
  onOpenRules: () => void;
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Guests", href: "#guests" },
  { label: "Brochure", href: "#brochure" },
  { label: "Tracks", href: "#tracks" },
  // { label: "Process", href: "#process" },
  { label: "Prizes", href: "#prizes" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ onOpenRules }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 h-14 md:h-16 flex items-center relative">
        {/* LEFT LOGO */}
        <a href="#" className="flex items-center gap-2 z-10">
          <img
            src={scetLogo}
            alt="SCET Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-display text-lg font-bold text-primary text-glow-blue">
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
        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          <a
            onClick={onOpenRules}
            className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-border text-xs md:text-sm font-heading text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            Rules
          </a>

          <a
            href="#register"
            className="px-3 md:px-5 py-1.5 md:py-2 rounded-lg bg-primary text-primary-foreground text-xs md:text-sm font-heading font-semibold hover:scale-105 transition-transform"
          >
            Register
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();

                    const target = document.querySelector(l.href);
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }

                    setOpen(false);
                  }}
                  className="text-sm font-heading font-medium text-muted-foreground hover:text-primary py-2 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
