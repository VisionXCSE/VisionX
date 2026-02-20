import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
}

const CursorParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let id = 0;

    const handleMove = (e: MouseEvent) => {
      const newParticle = {
        id: id++,
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev, newParticle]);

      // Remove particle after 500ms
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 500);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {particles.map((p) => (
        <span
          key={p.id}
          className="pointer-events-none fixed z-[9999] w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-60"
          style={{
            left: p.x,
            top: p.y,
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 10px #22d3ee",
            transition: "opacity 0.5s ease-out",
          }}
        />
      ))}
    </>
  );
};

export default CursorParticles;
