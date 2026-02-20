import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black gap-6"
    >
      {/* Logo / Title */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold tracking-widest text-cyan-400"
      >
        Vision-X
      </motion.h1>

      {/* Spinner */}
      <div className="w-14 h-14 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
    </motion.div>
  );
};

export default PageLoader;
