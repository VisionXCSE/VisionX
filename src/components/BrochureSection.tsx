import { motion } from "framer-motion";
import { Download } from "lucide-react";

const brochureImageUrl = "/brochure.jpg";

const BrochureSection = () => (
  <section id="brochure" className="section-padding bg-card/30">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold gradient-text mb-8"
      >
        Event Brochure
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="neon-border rounded-xl overflow-hidden bg-card/40 mb-8"
      >
        <img
          src={brochureImageUrl}
          alt="Event Brochure"
          className="w-full h-auto max-h-[700px] object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <a
          href={brochureImageUrl}
          download
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-heading font-semibold text-sm bg-primary text-primary-foreground box-glow-blue hover:scale-105 transition-transform"
        >
          <Download size={16} /> Download Brochure
        </a>
      </motion.div>
    </div>
  </section>
);

export default BrochureSection;
