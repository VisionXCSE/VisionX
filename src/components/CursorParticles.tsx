import { useEffect, useState } from "react";

const CursorParticles = () => {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  useEffect(() => {
    let id = 0;

    const handleMove = (e: MouseEvent) => {
      const newParticle = {
        id: id++,
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev.slice(-15), newParticle]);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      {particles.map((p) => (
        <span
          key={p.id}
          className="pointer-events-none fixed z-[9999] w-3 h-3 rounded-full bg-cyan-400 opacity-70 blur-sm animate-ping"
          style={{
            left: p.x - 6,
            top: p.y - 6,
          }}
        />
      ))}
    </>
  );
};

export default CursorParticles;
