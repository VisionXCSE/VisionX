import { motion } from "framer-motion";
import { FileText, CheckCircle, Rocket, Trophy } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "1",
    title: "Idea Submission",
    details: ["Start: 18 February 2026", "Last Date: 28 February 2026"],
  },
  {
    icon: CheckCircle,
    step: "2",
    title: "Final Selection",
    details: ["Shortlisted teams announced on:", "2 March 2026"],
  },
  {
    icon: Rocket,
    step: "3",
    title: "Hackathon (36 Hours)",
    details: ["Start: March 6 – 9:00 AM", "End: March 7 – Evening"],
  },
  {
    icon: Trophy,
    step: "4",
    title: "Prize Distribution",
    details: ["March 7 – Evening"],
  },
];

const ProcessSection = () => (
  <section id="process" className="section-padding bg-card/30">
    <div className="max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold gradient-text mb-12"
      >
        Event Process
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative neon-border-purple rounded-xl p-6 bg-card/50 backdrop-blur-sm"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <s.icon size={24} className="text-primary" />
            </div>
            <div className="absolute top-4 right-4 text-2xl font-display font-black text-primary/20">
              {s.step}
            </div>
            <h3 className="font-heading font-bold text-foreground text-sm mb-3">{s.title}</h3>
            {s.details.map((d, j) => (
              <p key={j} className="text-xs text-muted-foreground font-body">{d}</p>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
