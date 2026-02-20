import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Facebook } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-card/30">
    <div className="max-w-3xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold gradient-text mb-8"
      >
        Contact Us
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center gap-4 mb-8"
      >
        <a
          href="mailto:visionx2k26.scet@gmail.com"
          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm font-heading"
        >
          <Mail size={18} /> visionx2k26.scet@gmail.com
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-5"
      >
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
            aria-label={s.label}
            className="w-12 h-12 rounded-full neon-border flex items-center justify-center text-muted-foreground hover:text-primary hover:box-glow-blue transition-all duration-300"
          >
            <s.icon size={20} />
          </a>
        ))}
      </motion.div>
    </div>

    <div className="mt-16 pt-8 border-t border-border text-center">
      <p className="text-xs text-muted-foreground font-body">
        © 2026 VISION-X — Swarnandhra College of Engineering & Technology, Dept.
        of CSE. All rights reserved.
      </p>
    </div>
  </section>
);

export default ContactSection;
