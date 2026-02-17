import { motion } from "framer-motion";
import { Leaf, HeartPulse, Landmark, Globe, Rocket } from "lucide-react";

const tracks = [
  {
    icon: Leaf,
    title: "AgriTech",
    items: ["Smart Farming", "IoT in Agriculture", "Crop Monitoring", "Automation Systems"],
  },
  {
    icon: HeartPulse,
    title: "HealthTech",
    items: ["AI Healthcare", "Telemedicine", "Health Analytics", "Smart Diagnosis"],
  },
  {
    icon: Landmark,
    title: "FinTech",
    items: ["Blockchain", "Secure Payments", "Fraud Detection", "Digital Banking"],
  },
  {
    icon: Globe,
    title: "Sustainable Technology",
    items: ["Green Energy", "Climate Tech", "Waste Management", "Smart Water Systems"],
  },
  {
    icon: Rocket,
    title: "SpaceTech & Emerging Tech",
    items: ["Robotics", "AI Solutions", "Drone Tech", "Cybersecurity"],
  },
];

const TracksSection = () => (
  <section id="tracks" className="section-padding relative bg-card/30">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold gradient-text text-center mb-12"
      >
        Hackathon Tracks
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {tracks.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group neon-border-purple rounded-xl p-6 bg-card/50 backdrop-blur-sm hover:box-glow-purple hover:scale-[1.03] transition-all duration-300 cursor-default"
          >
            <t.icon size={32} className="text-secondary mb-4 group-hover:text-primary transition-colors" />
            <h3 className="text-sm font-display font-bold text-foreground mb-3">{t.title}</h3>
            <ul className="space-y-1.5">
              {t.items.map((item) => (
                <li key={item} className="text-xs text-muted-foreground font-body flex items-start gap-1.5">
                  <span className="text-primary mt-0.5">•</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TracksSection;
