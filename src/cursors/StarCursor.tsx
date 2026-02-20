import { useEffect, useRef } from "react";

const StarCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Disable on mobile
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let stars: Star[] = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    class Star {
      x: number;
      y: number;
      finalSize: number;
      size: number;
      alpha: number;
      velocityX: number;
      velocityY: number;
      gravity: number;
      drag: number;
      timeElapsed: number;

      constructor(x: number, y: number, velocityX: number, velocityY: number) {
        this.x = x;
        this.y = y;
        this.finalSize = Math.random() * 2;
        this.size = this.finalSize * 2;
        this.alpha = 1;
        this.velocityX = velocityX * 0.05;
        this.velocityY = 1 + Math.random() + velocityY * 0.05;
        this.gravity = 0.02;
        this.drag = 0.97;
        this.timeElapsed = 0;
      }

      draw() {
        ctx!.fillStyle = `rgba(0, 255, 255, ${this.alpha})`;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }

      update(deltaTime: number) {
        this.x += this.velocityX;
        this.velocityX *= this.drag;

        this.y += this.velocityY;
        this.velocityY += this.gravity;

        this.alpha -= 0.01;

        this.timeElapsed += deltaTime;

        if (this.timeElapsed < 2000) {
          this.size =
            this.finalSize * 2 - (this.finalSize * this.timeElapsed) / 2000;
        } else {
          this.size = this.finalSize;
        }
      }
    }

    let lastMouseX = 0;
    let lastMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const velocityX = e.clientX - lastMouseX;
      const velocityY = e.clientY - lastMouseY;

      lastMouseX = e.clientX;
      lastMouseY = e.clientY;

      const randomOffsetX = (Math.random() - 0.5) * 100;
      const randomOffsetY = (Math.random() - 0.5) * 100;

      stars.push(
        new Star(
          e.clientX,
          e.clientY,
          velocityX + randomOffsetX,
          velocityY + randomOffsetY,
        ),
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    let lastTime = 0;

    const animate = (time: number = 0) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => star.update(deltaTime));
      stars.forEach((star) => star.draw());

      stars = stars.filter(
        (star) =>
          star.alpha > 0 && star.y < height && star.x > 0 && star.x < width,
      );

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
    />
  );
};

export default StarCursor;
