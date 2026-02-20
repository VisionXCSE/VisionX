import { motion } from "framer-motion";
import kvsatyanarayana from "./guests/k-v-satyanarayana.jpg";
import kvswamy from "./guests/k-v-swamy.jpg";
import asrihari from "./guests/a-srihari.jpg";
import sureshKumar from "./guests/suresh-kumar.jpg";
import aGopichand from "./guests/a-gopichand.jpg";
import pSrinivasulu from "./guests/p-srinivasulu.jpg";
import minish from "./guests/minish.jpg";
import bpnmadhukumar from "./guests/bpnmadhukumar.jpg";
import tmuralimohan from "./guests/tmuralimohan.jpg";

/* ================= CHIEF PATRONS ================= */
const chiefPatrons = [
  {
    name: "Sri K V Satyanarayana",
    role: "Chairman, SCET",
    image: kvsatyanarayana,
  },
  {
    name: "Sri K V Swamy",
    role: "Treasurer, SCET",
    image: kvswamy,
  },
  {
    name: "Sri A Srihari",
    role: "Director, SCET",
    image: asrihari,
  },
];

/* ================= PATRONS ================= */
const patrons = [
  {
    name: "Dr. S. Suresh Kumar",
    role: "Principal",
    image: sureshKumar,
  },
  {
    name: "Dr. A. Gopichand",
    role: "Vice-Principal",
    image: aGopichand,
  },
];

/* ================= CONVENERS ================= */
const conveners = [
  {
    name: "Dr. P. Srinivasulu",
    role: "Professor & HoD - CSE",
    image: pSrinivasulu,
  },
  {
    name: "Minish Kumar Mucharla",
    role: "Aqua Tech Foundation",
    image: minish,
  },
  {
    name: "Dr. B. P. N. Madhu Kumar",
    role: "Professor & HoD",
    image: bpnmadhukumar, // replace with correct image if available
  },
  {
    name: "Dr. T. Murali Mohan",
    role: "Professor",
    image: tmuralimohan, // replace with correct image if available
  },
];

/* ================= CARD COMPONENT ================= */
const PersonCard = ({
  name,
  role,
  image,
  glow = "neon-border",
  size = "w-24 h-24",
}: {
  name: string;
  role: string;
  image: string;
  glow?: string;
  size?: string;
}) => (
  <div className="flex flex-col items-center max-w-[200px]">
    <div
      className={`${size} rounded-full ${glow} bg-card/60 overflow-hidden mb-3`}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "/placeholder.svg";
        }}
      />
    </div>

    <h4 className="font-heading font-bold text-foreground text-sm text-center">
      {name}
    </h4>

    <p className="text-xs text-muted-foreground mt-1 text-center">
      {role}
    </p>
  </div>
);

/* ================= MAIN SECTION ================= */
const ChiefGuestsSection = () => (
  <section id="guests" className="section-padding">
    <div className="max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold gradient-text mb-12"
      >
        Patrons & Conveners
      </motion.h2>

      {/* ================= CHIEF PATRONS ================= */}
      <div className="mb-12">
        <p className="text-xs font-heading text-muted-foreground uppercase tracking-widest mb-6">
          Chief Patrons
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {chiefPatrons.map((p) => (
            <PersonCard
              key={p.name}
              name={p.name}
              role={p.role}
              image={p.image}
              glow="neon-border-purple"
            />
          ))}
        </div>
      </div>

      {/* ================= PATRONS ================= */}
      <div className="mb-12">
        <p className="text-xs font-heading text-muted-foreground uppercase tracking-widest mb-6">
          Patrons
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {patrons.map((p) => (
            <PersonCard
              key={p.name}
              name={p.name}
              role={p.role}
              image={p.image}
              glow="neon-border"
            />
          ))}
        </div>
      </div>

      {/* ================= CONVENERS ================= */}
      <div>
        <p className="text-xs font-heading text-muted-foreground uppercase tracking-widest mb-6">
          Conveners
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {conveners.map((p) => (
            <PersonCard
              key={p.name}
              name={p.name}
              role={p.role}
              image={p.image}
              glow="neon-border box-glow-blue"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ChiefGuestsSection;
