import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import qrRegister from "@/assets/qr-register.jpeg";
import qrPayment from "@/assets/qr-payment.jpeg";

const RegistrationSection = () => (
  <section id="register" className="section-padding bg-card/30">
    <div className="max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold gradient-text mb-6"
      >
        Registration
      </motion.h2>

      {/* Fees */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-6 mb-8"
      >
        <div className="neon-border rounded-lg px-6 py-4 bg-card/50">
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-heading mb-1">
            Idea Submission
          </p>
          <p className="text-2xl font-display font-bold text-primary text-glow-blue">
            ₹200{" "}
            <span className="text-sm font-heading text-muted-foreground font-normal">
              per team
            </span>
          </p>
        </div>
        <div className="neon-border-purple rounded-lg px-6 py-4 bg-card/50">
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-heading mb-1">
            Hackathon Entry
          </p>
          <p className="text-2xl font-display font-bold text-secondary text-glow-purple">
            ₹500{" "}
            <span className="text-sm font-heading text-muted-foreground font-normal">
              per head
            </span>
          </p>
        </div>
      </motion.div>

      {/* Eligibility */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="mb-8 space-y-1"
      >
        <p className="text-sm text-muted-foreground font-body">
          Team Size:{" "}
          <span className="text-foreground font-heading font-semibold">
            3–5 Members
          </span>
        </p>
        <p className="text-sm text-muted-foreground font-body">
          Eligible:{" "}
          <span className="text-foreground font-heading font-semibold">
            2nd, 3rd & 4th Year Engineering Students
          </span>
        </p>
        <p className="text-sm text-muted-foreground font-body">
          All Engineering Branches Eligible
        </p>
      </motion.div>

      {/* QR Codes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-8 mb-10"
      >
        <div className="flex flex-col items-center">
          <p className="text-xs font-heading text-muted-foreground uppercase tracking-widest mb-3">
            Google Form
          </p>
          <div className="w-40 h-40 rounded-lg overflow-hidden neon-border">
            <img
              src={qrRegister}
              alt="Registration QR Code"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xs font-heading text-muted-foreground uppercase tracking-widest mb-3">
            GPay Payment
          </p>
          <div className="w-40 h-40 rounded-lg overflow-hidden neon-border-purple">
            <img
              src={qrPayment}
              alt="Payment QR Code"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a
          href="https://forms.gle/rmYbmRybCixqMGKG7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-heading font-semibold text-sm bg-primary text-primary-foreground box-glow-blue hover:scale-105 transition-transform"
        >
          <ExternalLink size={16} /> Register Now
        </a>
        <a
          href="/brochure.jpg"
          download
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-heading font-semibold text-sm border border-secondary text-secondary box-glow-purple hover:scale-105 transition-transform"
        >
          <Download size={16} /> Download Brochure
        </a>
      </motion.div>
    </div>
  </section>
);

export default RegistrationSection;
