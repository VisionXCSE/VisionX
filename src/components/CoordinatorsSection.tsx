import { motion } from "framer-motion";
import { Phone, User } from "lucide-react";

const studentCoordinators = [
  { name: "A. Divya Sri", phone: "8500219989" },
  { name: "B. Naga Sri Devi", phone: "9603978716" },
  { name: "S. Prasanthi", phone: "8309508460" },
  { name: "T. Uday", phone: "9390529394" },
  { name: "K. Tarjani", phone: "9948290585" },
];

const facultyGroups = [
  {
    title: "Media & Public Relations (PR)",
    members: ["Mr. T. Prem Kumar", "Mrs. B. Priyanka"],
  },
  {
    title: "Registration & Help Desk",
    members: [
      "Mr. John Bunyan",
      "Mr. Yugandhar",
      "Mrs. V. Sri Lakshmi",
      "Mrs. Kanchana",
      "Mrs. T. N. D. Karuna Sree",
    ],
  },
  {
    title: "Technical & Lab Support",
    members: [
      "Mrs. B. Thriveni",
      "Mrs. Sridevi Bala",
      "Mrs. Rajeswari",
      "Mrs. P. Sravani",
    ],
  },
  {
    title: "Mentors & Judges",
    members: [
      "Dr. P. Srinivasu Rao",
      "Dr. M. Vijaya Raju",
      "Dr. Srinivas",
      "Dr. N. Tulasi Raju",
      "Dr. Madhu Kumar",
      "Dr. A. M. D. Kumar",
      "Dr. T. Gopinath",
      "Dr. T. Kesava Rao",
      "Mr. M. Satyanarana",
      "Mrs. I. Praveena",
      "Mr. Raghava Rao",
      "Mrs. G. Archana",
      "Mr. B. S. Vara Prasad",
      "Mrs. K. Sireesha",
      "Mr. Yugandhar",
      "Mr. K. Ch. Prabhakar Rao",
    ],
  },
  {
    title: "Logistics & Hospitality",
    members: [
      "Mr. K. Rajesh Kumar",
      "Mr. Chanti",
      "Mr. Veerendra",
      "Mr. M. Satyanarana",
      "Mr. S. Sinha",
      "Mrs. T. Satya Sheela",
      "Mr. Raghava Rao",
    ],
  },
  {
    title: "Discipline Committee",
    members: [
      "Mr. Veerendra",
      "Mrs. V. M. Kalyani",
      "Mrs. N. S. P. Lakshmi",
      "Mr. K. V. Peddi Raju",
      "Mrs. Anjali",
      "Ms. Meghana",
      "Mr. T. Prem Kumar",
      "Mr. P. Narendra",
      "Mrs. N. Vani",
      "Mr. Raghava Rao",
      "Mr. Chanti",
      "Mrs. G. Vani",
    ],
  },
];

const CoordinatorsSection = () => (
  <section id="coordinators" className="section-padding">
    <div className="max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold gradient-text mb-14 uppercase"
      >
        Coordinators
      </motion.h2>

      {/* ================= STUDENT COORDINATORS ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-xs font-heading text-muted-foreground uppercase tracking-widest mb-8">
          Student Coordinators
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {studentCoordinators.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="neon-border rounded-xl p-5 bg-card/40 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <User size={22} className="text-primary" />
              </div>

              <p className="text-sm font-heading font-bold text-foreground">
                {c.name}
              </p>

              <a
                href={`tel:${c.phone}`}
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors mt-2"
              >
                <Phone size={12} /> {c.phone}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ================= FACULTY COORDINATORS ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-xs font-heading text-muted-foreground uppercase tracking-widest mb-8">
          Faculty Coordinators
        </p>

        <div className="space-y-8">
          {facultyGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="neon-border-purple rounded-xl p-6 bg-card/40 text-left"
            >
              <h3 className="text-sm font-heading font-semibold text-secondary uppercase tracking-wide mb-4 text-center">
                {group.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-foreground">
                {group.members.map((member, idx) => (
                  <p key={idx} className="opacity-90">
                    • {member}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CoordinatorsSection;
