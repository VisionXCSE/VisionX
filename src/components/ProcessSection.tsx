import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, CheckCircle, Rocket, Trophy } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: FileText,
    step: "1",
    title: "Idea Submission",
    details: ["Start: 18 February 2026", "Last Date: 21 March 2026"],
  },
  {
    icon: CheckCircle,
    step: "2",
    title: "Final Selection",
    details: ["Shortlisted Teams Announced:", "23 March 2026"],
  },
  {
    icon: Rocket,
    step: "3",
    title: "Hackathon (36 Hours)",
    details: ["Start: March 25 – 9:00 AM", "End: March 26 – Evening"],
  },
  {
    icon: Trophy,
    step: "4",
    title: "Prize Distribution",
    details: ["March 26 – Evening"],
  },
];

const ProcessSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Create individual step progress transforms
  const step0Shadow = useTransform(
    scrollYProgress,
    [0, 0.125, 0.25],
    [
      "0 0 0px hsl(var(--primary))",
      "0 0 20px hsl(var(--primary))",
      "0 0 12px hsl(var(--primary))",
    ],
  );

  const step1Shadow = useTransform(
    scrollYProgress,
    [0.25, 0.375, 0.5],
    [
      "0 0 0px hsl(var(--primary))",
      "0 0 20px hsl(var(--primary))",
      "0 0 12px hsl(var(--primary))",
    ],
  );

  const step2Shadow = useTransform(
    scrollYProgress,
    [0.5, 0.625, 0.75],
    [
      "0 0 0px hsl(var(--primary))",
      "0 0 20px hsl(var(--primary))",
      "0 0 12px hsl(var(--primary))",
    ],
  );

  const step3Shadow = useTransform(
    scrollYProgress,
    [0.75, 0.875, 1],
    [
      "0 0 0px hsl(var(--primary))",
      "0 0 20px hsl(var(--primary))",
      "0 0 12px hsl(var(--primary))",
    ],
  );

  const stepShadows = [step0Shadow, step1Shadow, step2Shadow, step3Shadow];

  return (
    <section
      id="process"
      ref={ref}
      className="section-padding bg-card/30 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold gradient-text mb-20 text-center"
        >
          Event Process
        </motion.h2>

        <div className="relative">
          {/* TIMELINE BASE */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-[3px] bg-border md:-translate-x-1/2"></div>

          {/* SCROLL PROGRESS */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-[3px] bg-primary md:-translate-x-1/2 shadow-[0_0_12px_hsl(var(--primary))] -translate-x-1/2"
          />

          <div className="space-y-24">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              const Icon = s.icon;
              const shadow = stepShadows[i];

              return (
                <div
                  key={i}
                  className={`relative flex items-center pl-16 md:pl-0 ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* CARD */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="w-full md:w-[45%] neon-border-purple rounded-xl p-6 bg-card/50 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-lg font-black text-primary">
                        {s.step}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-foreground text-sm mb-2">
                      {s.title}
                    </h3>

                    {s.details.map((d, j) => (
                      <p key={j} className="text-xs text-muted-foreground">
                        {d}
                      </p>
                    ))}
                  </motion.div>

                  {/* CONNECTOR LINE */}
                  {/* <div
                    className={`absolute top-1/2 -translate-y-1/2 h-[2px] bg-primary ${
                      isLeft
                        ? "left-6 md:left-[45%] md:right-[50%]"
                        : "left-6 md:left-[50%] md:right-[45%]"
                    }`}
                  /> */}

                  {/* TIMELINE ICON */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.3 }}
                    style={{
                      boxShadow: shadow,
                    }}
                    className="absolute left-0 md:left-[48%] top-[35%] -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-card border-2 border-primary z-10"
                  >
                    <Icon size={20} className="text-primary" />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
