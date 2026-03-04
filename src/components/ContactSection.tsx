import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Facebook, MapPin } from "lucide-react";

const ContactSection = () => (
  <section
    id="contact"
    className="section-padding bg-card/30 overflow-x-hidden"
  >
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
      {/* LEFT SIDE — MAP WITH OUTSIDE BRACKETS */}
      <div className="relative">
        {/* OUTSIDE BRACKETS */}
        <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-8 h-8 border-l-2 border-t-2 border-primary/70 z-20 animate-pulse" />
        <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 border-r-2 border-t-2 border-primary/70 z-20 animate-pulse" />
        <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-8 h-8 border-l-2 border-b-2 border-primary/70 z-20 animate-pulse" />
        <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-8 h-8 border-r-2 border-b-2 border-primary/70 z-20 animate-pulse" />

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-border bg-black"
        >
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-5 py-4 bg-background/90 backdrop-blur-md border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Swarnandhra College of Engineering & Technology
                </p>
                <p className="text-xs text-muted-foreground">
                  Narsapuram, Andhra Pradesh
                </p>
              </div>
            </div>

            {/* 🔥 SINGLE LINE BUTTON WITH ICON */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Swarnandhra+College+of+Engineering+and+Technology"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm text-primary hover:bg-primary/20 transition"
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </div>

          {/* MAP */}
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.1216057188203!2d81.65539027460693!3d16.41864922999006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d707cf0d34a5%3A0xab73194f64b31016!2sSwarnandhra%20College%20of%20Engineering%20and%20Technology(autonomous)!5e0!3m2!1sen!2sin!4v1771777380461!5m2!1sen!2sin"
              width="100%"
              // height="380"
              className="w-full h-[250px] md:h-[380px]"
              style={{
                border: 0,
                // filter: "grayscale(1) contrast(1.1) brightness(0.9)",
              }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40 pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* RIGHT SIDE — CONTACT INFO */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center h-full text-center md:text-left items-center md:items-start"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-6">
          Contact Us
        </h2>

        <div className="flex items-start md:items-start justify-center md:justify-start gap-3 text-sm text-muted-foreground mb-6">
          <MapPin size={18} className="text-primary mt-1" />
          <p>
            Swarnandhra College of Engineering & Technology
            <br />
            Seetharampuram, Narsapuram,
            <br />
            West Godavari, Andhra Pradesh – 534280
          </p>
        </div>

        <a
          href="mailto:visionx2k26.scet@gmail.com"
          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm font-heading mb-8 justify-center md:justify-start"
        >
          <Mail size={18} /> visionx2k26.scet@gmail.com
        </a>

        <div className="flex gap-5 justify-center md:justify-start">
          {[
            {
              icon: Instagram,
              label: "Instagram",
              href: "https://www.instagram.com/cse.scet.official/",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/scet-cse-department/",
            },
            {
              icon: Facebook,
              label: "Facebook",
              href: "https://www.facebook.com/people/SCET-CSE-Department/61588629863276/",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-12 h-12 rounded-full neon-border flex items-center justify-center text-muted-foreground hover:text-primary hover:box-glow-blue transition-all duration-300"
            >
              <s.icon size={20} />
            </a>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Footer */}
    <div className="mt-16 pt-8 border-t border-border text-center">
      <p className="text-xs text-muted-foreground font-body">
        © 2026 VISION-X — Swarnandhra College of Engineering & Technology, Dept.
        of CSE. All rights reserved.
      </p>
    </div>
  </section>
);

export default ContactSection;
