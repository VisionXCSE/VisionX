import { motion } from "framer-motion";
import { Trophy, Medal, Award, FileCheck } from "lucide-react";

const rewards = [
  { icon: Trophy, title: "Winner", desc: "Gold Medal + Cash Prize + Certification", color: "text-neon-gold" },
  { icon: Medal, title: "Runner-Up", desc: "Cash Prize + Certification", color: "text-primary" },
  { icon: Award, title: "Best Innovation", desc: "Special Award for Most Innovative Solution", color: "text-secondary" },
  { icon: FileCheck, title: "All Participants", desc: "Participation Certificates for Everyone", color: "text-neon-green" },
];

const RewardsSection = () => (
  <section id="prizes" className="section-padding">
    <div className="max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4"
      >
        Prize Pool
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mb-12"
      >
        <p className="text-5xl md:text-7xl font-display font-black text-primary text-glow-blue">
          ₹1,00,000
        </p>
        <p className="text-sm text-muted-foreground font-heading mt-2 uppercase tracking-widest">Total Prize Pool</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rewards.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="neon-border rounded-xl p-6 bg-card/40 backdrop-blur-sm hover:box-glow-blue transition-shadow duration-300"
          >
            <r.icon size={40} className={`${r.color} mx-auto mb-4`} />
            <h4 className="font-heading font-bold text-foreground text-lg mb-2">{r.title}</h4>
            <p className="text-xs text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RewardsSection;
