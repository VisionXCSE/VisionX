import { motion } from "framer-motion";

const partners = ["Microsoft", "AWS", "Meta"];

const SponsorsSection = () => (
  <section id="partners" className="section-padding">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold gradient-text mb-12"
      >
        Partners & Technology Partners
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-6">
        {partners.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="neon-border rounded-xl px-10 py-8 bg-card/40 flex items-center justify-center hover:box-glow-blue transition-shadow duration-300"
          >
            <span className="font-display text-base font-bold text-muted-foreground">{s}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SponsorsSection;
