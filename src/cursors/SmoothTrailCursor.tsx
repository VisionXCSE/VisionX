import { useEffect, useRef } from "react";

const SmoothTrailCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (window.innerWidth < 768) return; // disable on mobile

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const trailCount = 12;
    const trails: {
      el: HTMLDivElement;
      x: number;
      y: number;
      size: number;
      speed: number;
    }[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Create trails
    trailsRef.current.forEach((el) => el.remove());
    trailsRef.current = [];

    for (let i = 0; i < trailCount; i++) {
      const div = document.createElement("div");
      div.className = "fixed rounded-full pointer-events-none z-[9999]";
      div.style.background = "#00ffff";
      div.style.boxShadow = "0 0 10px #00ffff";
      document.body.appendChild(div);

      trailsRef.current.push(div);

      trails.push({
        el: div,
        x: mouseX,
        y: mouseY,
        size: Math.random() * 4 + 4,
        speed: 0.1 + Math.random() * 0.1,
      });
    }

    const animate = () => {
      // Cursor easing
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.left = cursorX + "px";
        cursorRef.current.style.top = cursorY + "px";
      }

      let prevX = cursorX;
      let prevY = cursorY;

      trails.forEach((trail, index) => {
        trail.x += (prevX - trail.x) * trail.speed;
        trail.y += (prevY - trail.y) * trail.speed;

        trail.el.style.left = trail.x + "px";
        trail.el.style.top = trail.y + "px";

        const opacity = 1 - index / trails.length;
        const scale = 1 - (index / trails.length) * 0.8;

        trail.el.style.opacity = opacity.toString();
        trail.el.style.width = `${trail.size * scale}px`;
        trail.el.style.height = `${trail.size * scale}px`;

        prevX = trail.x;
        prevY = trail.y;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      trailsRef.current.forEach((el) => el.remove());
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-5 h-5 rounded-full bg-cyan-400 pointer-events-none z-[10000]"
      style={{
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 20px #00ffff",
        mixBlendMode: "difference",
      }}
    />
  );
};

export default SmoothTrailCursor;
