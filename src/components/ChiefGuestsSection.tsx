import { motion } from "framer-motion";
import profCsrkPrasad from "./guests/prof-csrk-prasad.jpg";
import kvsatyanarayana from "./guests/k-v-satyanarayana.jpg";
import kvswamy from "./guests/k-v-swamy.jpg";
import asrihari from "./guests/a-srihari.jpg";
import sureshKumar from "./guests/suresh-kumar.jpg";
import aGopichand from "./guests/a-gopichand.jpg";
import pSrinivasulu from "./guests/p-srinivasulu.jpg";

const chiefGuest = {
  name: "Prof. CSRK Prasad",
  title: "Hon'ble Vice Chancellor, JNTUK, Kakinada",
  image: profCsrkPrasad,
};

const chiefPatrons = [
  {
    name: "Sri K V Satyanarayana",
    role: "Chairman, SCET",
    image: kvsatyanarayana,
  },
  {
    name: "Sri K V Swamy",
    role: "Director, SCET",
    image: kvswamy,
  },
  {
    name: "Sri A Srihari",
    role: "Treasurer, SCET",
    image: asrihari,
  },
];

const patrons = [
  {
    name: "Dr. Suresh Kumar",
    role: "Principal, SCET",
    image: sureshKumar,
  },
  { name: "Dr. A. Gopichand", role: "SCET", image: aGopichand },
];

const convenor = {
  name: "Dr. P. Srinivasulu",
  role: "Professor & HoD – CSE",
  image: pSrinivasulu,
};

const management = [...chiefPatrons, ...patrons, convenor];

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
    <h4 className="font-heading font-bold text-foreground text-sm">{name}</h4>
    <p className="text-xs text-muted-foreground mt-1 text-center">{role}</p>
  </div>
);

const ChiefGuestsSection = () => (
  <section id="guests" className="section-padding">
    <div className="max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold gradient-text mb-12"
      >
        Chief Guest & Management
      </motion.h2>

      {/* Chief Guest */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-xs font-heading text-muted-foreground uppercase tracking-widest mb-4">
          Chief Guest
        </p>
        <div className="flex justify-center">
          <PersonCard
            name={chiefGuest.name}
            role={chiefGuest.title}
            image={chiefGuest.image}
            glow="neon-border box-glow-blue"
            size="w-32 h-32"
          />
        </div>
      </motion.div>

      {/* Management */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mb-12"
      >
        <p className="text-xs font-heading text-muted-foreground uppercase tracking-widest mb-6">
          Management
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {management.map((p) => (
            <PersonCard
              key={p.name}
              name={p.name}
              role={p.role}
              image={p.image}
              glow={
                p.name === convenor.name
                  ? "neon-border box-glow-purple"
                  : "neon-border-purple"
              }
            />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ChiefGuestsSection;
