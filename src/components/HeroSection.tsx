import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBgVd from "@/assets/hero-bg.mp4";

const targetDate = new Date("2026-03-06T09:00:00").getTime();

interface HeroSectionProps {
  onVideoReady: () => void;
}
const HeroSection = ({ onVideoReady }: HeroSectionProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, targetDate - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      /> */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={() => {
          console.log("VIDEO LOADED");
          onVideoReady();
        }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroBgVd} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/75 bg-grid-pattern" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* College Name - Large & Glowing */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-black text-primary text-glow-blue mb-2 leading-tight uppercase tracking-wide"
        >
          Swarnandhra College of Engineering and Technology
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base font-heading font-semibold text-secondary text-glow-purple mb-1"
        >
          (AUTONOMOUS)
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-xs md:text-sm text-muted-foreground font-body mb-1"
        >
          Seetharampuram, Narsapuram, West Godavari District, Andhra Pradesh –
          534280
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm md:text-base font-heading font-semibold text-foreground mb-8"
        >
          Department of Computer Science & Engineering
        </motion.p>

        {/* Event Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-black gradient-text mb-3 leading-tight"
        >
          VISION-X 2026
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-base md:text-lg text-secondary italic font-heading mb-6"
        >
          "Where Vision Meets Victory."
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl font-heading font-semibold text-primary text-glow-blue mb-4"
        >
          36 Hours Non-Stop Innovation
        </motion.p>

        {/* Date & Venue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-3"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary font-heading font-bold text-xl md:text-2xl text-glow-blue">
            <CalendarDays size={20} className="text-primary" />
            March 6 & 7, 2026
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-primary" /> Start: March 6 - 9:00
              AM
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-secondary" /> End: March 7 -
              Evening
            </span>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8"
        >
          <MapPin size={16} className="text-secondary" />
          Swarnandhra College of Engineering & Technology, Narsapuram
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center gap-3 md:gap-5 mb-8"
        >
          {units.map((u) => (
            <div
              key={u.label}
              className="neon-border rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px] bg-card/50 backdrop-blur-sm"
            >
              <div className="text-2xl md:text-4xl font-display font-bold text-primary text-glow-blue">
                {String(u.value).padStart(2, "0")}
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-heading mt-1">
                {u.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap justify-center gap-4 mb-6"
        >
          <a
            href="#register"
            className="px-8 py-3 rounded-lg font-heading font-semibold text-sm bg-primary text-primary-foreground box-glow-blue hover:scale-105 transition-transform"
          >
            Register Now
          </a>
          <a
            href="#register"
            className="px-8 py-3 rounded-lg font-heading font-semibold text-sm border border-secondary text-secondary box-glow-purple hover:scale-105 transition-transform"
          >
            Pay Now
          </a>
        </motion.div>

        {/* Limited Slots */}
        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-xs md:text-sm font-heading text-neon-gold text-glow-blue animate-pulse"
        >
          ⚡ Limited Slots Available – Register Before February 28, 2026
        </motion.p> */}
      </div>
    </section>
  );
};

export default HeroSection;
