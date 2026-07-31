"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
}

export function SpiderWeb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef<Point[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints();
    };

    const initPoints = () => {
      const points: Point[] = [];
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const rings = 6;
      const spokes = 12;

      // Centre
      points.push({
        x: centerX,
        y: centerY,
        baseX: centerX,
        baseY: centerY,
      });

      // Anneaux concentriques
      for (let ring = 1; ring <= rings; ring++) {
        const radius = (ring / rings) * Math.min(canvas.width, canvas.height) * 0.45;
        for (let spoke = 0; spoke < spokes; spoke++) {
          const angle = (spoke / spokes) * Math.PI * 2;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          points.push({ x, y, baseX: x, baseY: y });
        }
      }

      pointsRef.current = points;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const points = pointsRef.current;
      const mouse = mouseRef.current;

      // Déformation des points en fonction du curseur
      points.forEach((point) => {
        const dx = mouse.x - point.baseX;
        const dy = mouse.y - point.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 300;
        const force = Math.max(0, 1 - distance / maxDistance);

        point.x = point.baseX + dx * force * 0.15;
        point.y = point.baseY + dy * force * 0.15;
      });

      // Dessiner les rayons (du centre vers l'extérieur)
      const spokes = 12;
      for (let spoke = 0; spoke < spokes; spoke++) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(0, 128, 255, 0.08)";
        ctx.lineWidth = 1;

        for (let i = 0; i < 7; i++) {
          const pointIndex = i === 0 ? 0 : 1 + i * spokes - spokes + spoke;
          if (pointIndex < points.length) {
            const point = points[pointIndex];
            if (i === 0) {
              ctx.moveTo(point.x, point.y);
            } else {
              ctx.lineTo(point.x, point.y);
            }
          }
        }
        ctx.stroke();
      }

      // Dessiner les anneaux
      for (let ring = 1; ring <= 6; ring++) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(0, 128, 255, 0.06)";
        ctx.lineWidth = 1;

        for (let spoke = 0; spoke < spokes; spoke++) {
          const pointIndex = 1 + (ring - 1) * spokes + spoke;
          if (pointIndex < points.length) {
            const point = points[pointIndex];
            if (spoke === 0) {
              ctx.moveTo(point.x, point.y);
            } else {
              ctx.lineTo(point.x, point.y);
            }
          }
        }
        ctx.closePath();
        ctx.stroke();
      }

      // Dessiner les points de connexion
      points.forEach((point, index) => {
        if (index === 0) {
          // Point central plus visible
          ctx.beginPath();
          ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 128, 255, 0.3)";
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 128, 255, 0.2)";
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}