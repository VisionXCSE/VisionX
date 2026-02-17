import { motion } from "framer-motion";
import { Zap, Lightbulb, Rocket, Palette, Users, TrendingUp } from "lucide-react";

const features = [
  { icon: Zap, label: "Real-World Problem Solving" },
  { icon: Rocket, label: "Startup-Ready Solutions" },
  { icon: Users, label: "Industry Collaboration" },
  { icon: Lightbulb, label: "Innovation First" },
  { icon: TrendingUp, label: "Scalability Focus" },
  { icon: Palette, label: "UI/UX Excellence" },
];

const AboutSection = () => (
  <section id="about" className="section-padding relative">
    <div className="max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold gradient-text mb-6"
      >
        About VISION-X
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-body"
      >
        VISION-X 2026 is a 36-hour National Level Hackathon hosted by Swarnandhra College of Engineering and Technology. This platform empowers students to transform ideas into impactful real-world solutions across emerging technologies. Participants collaborate, innovate, and compete to solve real-world challenges with mentorship and technical guidance.
      </motion.p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="neon-border rounded-lg p-5 bg-card/40 backdrop-blur-sm hover:box-glow-blue transition-shadow duration-300"
          >
            <f.icon size={28} className="text-primary mx-auto mb-3" />
            <p className="text-sm font-heading font-semibold text-foreground">{f.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
