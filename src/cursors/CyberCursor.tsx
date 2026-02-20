import { useEffect, useState } from "react";

interface Pixel {
  id: number;
  x: number;
  y: number;
}

const CyberCursor = () => {
  const [pixels, setPixels] = useState<Pixel[]>([]);

  useEffect(() => {
    let id = 0;

    const handleMove = (e: MouseEvent) => {
      const newPixel = {
        id: id++,
        x: e.clientX,
        y: e.clientY,
      };

      setPixels((prev) => [...prev.slice(-20), newPixel]);

      setTimeout(() => {
        setPixels((prev) => prev.filter((p) => p.id !== newPixel.id));
      }, 400);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {pixels.map((p) => (
        <span
          key={p.id}
          className="pointer-events-none fixed z-[9999] w-2 h-2 bg-cyan-400 opacity-50"
          style={{
            left: p.x,
            top: p.y,
            transform: "translate(-50%, -50%)",
            // boxShadow: "0 0 6px #00ffff, 0 0 12px #00ffff, 0 0 18px #00ffff",
            boxShadow: "0 0 4px #00ffff, 0 0 8px #00ffff",
            animation: "pixelFade 0.4s linear forwards",
          }}
        />
      ))}

      {/* Main Cursor Core */}
      <div
        className="pointer-events-none fixed z-[10000] w-4 h-4 border border-cyan-400 rounded-sm opacity-40"
        style={{
          left: pixels.length ? pixels[pixels.length - 1].x : 0,
          top: pixels.length ? pixels[pixels.length - 1].y : 0,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 8px #00ffff",
        }}
      />
    </>
  );
};

export default CyberCursor;
