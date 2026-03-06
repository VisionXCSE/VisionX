import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface RulesModalProps {
  open: boolean;
  onClose: () => void;
}

const RulesModal = ({ open, onClose }: RulesModalProps) => {
  useEffect(() => {
    if (!open) return;

    const handleBack = () => {
      onClose();
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handleBack);

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, [open]);
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998]"
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              className="bg-background border border-border rounded-xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 relative shadow-[0_0_40px_rgba(0,255,255,0.1)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
              >
                <X size={22} />
              </button>

              <h2 className="text-2xl font-display font-bold mb-6 text-primary">
                VISION-X 2026 – Rules & Guidelines
              </h2>

              {/* CONTENT */}
              <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
                <section>
                  <h3 className="font-semibold text-foreground mb-2">
                    General Information
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Duration: 36 Continuous Hours</li>
                    <li>Mode: Offline + GitHub Submission</li>
                    <li>Team Size: 2–6 Members</li>
                    <li>Registration through official website only</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-foreground mb-2">
                    Team Rules
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Each participant can join only one team</li>
                    <li>Team name must be unique</li>
                    <li>One team leader must be designated</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-foreground mb-2">
                    Development Guidelines
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Code must be developed during hackathon hours</li>
                    <li>Open-source tools & APIs allowed</li>
                    <li>No pre-built complete projects</li>
                    <li>No plagiarism — strict disqualification</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-foreground mb-2">
                    GitHub Submission (Mandatory)
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Public repository required</li>
                    <li>Minimum 5 meaningful commits</li>
                    <li>Include README, PPT & Demo Video link</li>
                    <li>Submission deadline: 35th hour</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-foreground mb-2">
                    Judging Criteria
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Innovation – 20%</li>
                    <li>Technical Complexity – 20%</li>
                    <li>Implementation – 20%</li>
                    <li>Impact & Scalability – 15%</li>
                    <li>UI/UX – 10%</li>
                    <li>Presentation – 15%</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-foreground mb-2">
                    Disqualification
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Plagiarism detected</li>
                    <li>Late submission</li>
                    <li>Indiscipline</li>
                    <li>Incomplete project</li>
                  </ul>
                </section>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RulesModal;
