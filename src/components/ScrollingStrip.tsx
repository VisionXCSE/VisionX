import { motion } from "framer-motion";

const words = [
  "INNOVATE",
  "36 HOURS",
  "AI POWERED",
  "BUILD",
  "CREATE",
  "LAUNCH",
  "MARCH 2026",
  "VISION-X",
];

// const ScrollingStrip = () => {
//   return (
//     <div className="relative overflow-hidden border-y border-border bg-background">
//       <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
//       <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />
//       <motion.div
//         className="flex whitespace-nowrap"
//         animate={{ x: ["0%", "-50%"] }}
//         transition={{
//           repeat: Infinity,
//           duration: 20,
//           ease: "linear",
//         }}
//       >
//         {[...words, ...words].map((word, index) => (
//           <span
//             key={index}
//             className="mx-8 text-sm md:text-base font-display tracking-[0.3em] text-foreground/60"
//           >
//             {word}
//           </span>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

const ScrollingStrip = () => {
  return (
    <div className="relative overflow-hidden border-y border-border bg-background py-3">
      {/* Gradient fade sides */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex w-max marquee-track">
        {[...words, ...words].map((word, index) => (
          <span
            key={index}
            className="mx-8 text-sm md:text-base font-display tracking-[0.3em] text-foreground/60"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingStrip;
