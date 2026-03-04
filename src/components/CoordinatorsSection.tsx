
import { motion } from "framer-motion";
import { Phone, User } from "lucide-react";

const studentCoordinators = [
  { name: "A. Divya Sri", phone: "8500219989" },
  { name: "B. Naga Sri Devi", phone: "9603978716" },
  { name: "K. Tarjani", phone: "9948290585" },
  { name: "S. Prasanthi", phone: "8309508460" },
  { name: "T. Yamini", phone: "9110595464" },
  { name: "Bh. Divya Teja", phone: "9502988448" },
  { name: "B. Mohan", phone: "7997102207" },
  { name: "G. Dinesh Kumar", phone: "9010155129" },
  { name: "S. Vaishnavi", phone: "8688926939" },
  { name: "G. Subhash", phone: "9032085575" },
];

const facultyGroups = [
  // {
  //   title: "Chief Patrons",
  //   members: [
  //     "Sri K.V. Satyanarayana – Chairman",
  //     "Sri K. Venkateswara Swamy – Treasurer",
  //     "Sri A. Srihari – Director",
  //   ],
  // },
  // {
  //   title: "Patrons",
  //   members: [
  //     "Dr. S. Suresh Kumar – Principal",
  //     "Dr. A. Gopichand – Vice Principal",
  //   ],
  // },
  // {
  //   title: "Convenors",
  //   members: [
  //     "Dr. P. Srinivasulu – Professor & HOD",
  //     "Dr. B.P.N. Madhu Kumar – Professor & HOD",
  //     "Dr. T. Murali Mohan – Professor & HOD",
  //   ],
  // },
  {
    title: "Faculty Coordinators",
    members: [
      "Dr. N. Tulasi Raju – Associate Professor",
      "Dr. M. Vijaya Raju – Associate Professor",
      "Sri M. Srinivasa Rao – Associate Professor",
    ],
  },
  {
    title: "Organizing Committee",
    members: [
      "Sri K. Rajesh Kumar – Associate Professor",
      "Dr. P. Srinu Vasarao – Associate Professor",
      "Dr. T. Kesava Rao – Associate Professor",
      "Dr. S. Gopinath – Associate Professor",
      "Dr. A. Mohan Kumar – Associate Professor",
    ],
  },
  {
    title: "Executive Committee",
    members: [
      "Sri M. Satyanarayana – Associate Professor",
      "Sri B. Yugandhar – Associate Professor",
      "Sri K. Karunakar – Associate Professor",
      "Sri B.S.V. Prasad – Assistant Professor",
      "Sri Y.N.V. Raghava Rao – Assistant Professor",
      "Sri K.Ch.S. Prabhakara Rao – Assistant Professor",
      "Smt. G. Archana – Assistant Professor",
      "Smt. I. Praveena – Assistant Professor",
      "Sri G. Veerendra Kumar – Assistant Professor",
    ],
  },
  {
    title: "Administrative Support",
    members: [
      "Sri R. Ravi Kishore – Office Superintendent",
      "Sri K.V. Ramana – Senior Assistant",
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

      {/* ================= FACULTY ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-heading text-muted-foreground uppercase tracking-widest mb-8">
          Faculty & Committees
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