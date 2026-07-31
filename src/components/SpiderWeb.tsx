"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
}

interface Spider {
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
  ring: number;
  direction: number;
  legPhase: number;
}

export function SpiderWeb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef<Point[]>([]);
  const spidersRef = useRef<Spider[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints();
      initSpiders();
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

    const initSpiders = () => {
      const spiders: Spider[] = [];
      const numberOfSpiders = 8;

      for (let i = 0; i < numberOfSpiders; i++) {
        spiders.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          size: 3 + Math.random() * 5,
          speed: 0.3 + Math.random() * 0.5,
          angle: Math.random() * Math.PI * 2,
          ring: Math.floor(Math.random() * 5) + 1,
          direction: Math.random() > 0.5 ? 1 : -1,
          legPhase: Math.random() * Math.PI * 2,
        });
      }

      spidersRef.current = spiders;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const drawSpider = (spider: Spider) => {
      if (!ctx) return;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = (spider.ring / 6) * Math.min(canvas.width, canvas.height) * 0.45;

      spider.x = centerX + Math.cos(spider.angle) * radius;
      spider.y = centerY + Math.sin(spider.angle) * radius;

      // Corps de l'araignée
      ctx.save();
      ctx.translate(spider.x, spider.y);
      ctx.rotate(spider.angle + Math.PI / 2);

      // Abdomen
      ctx.beginPath();
      ctx.ellipse(0, 0, spider.size * 0.6, spider.size, 0, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(31, 41, 55, 0.7)";
      ctx.fill();
      ctx.strokeStyle = "rgba(0, 128, 255, 0.3)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Tête
      ctx.beginPath();
      ctx.arc(0, -spider.size * 0.8, spider.size * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(31, 41, 55, 0.8)";
      ctx.fill();
      ctx.strokeStyle = "rgba(0, 128, 255, 0.3)";
      ctx.stroke();

      // Pattes (4 de chaque côté)
      const legLength = spider.size * 2;
      const legPhase = spider.legPhase;

      for (let i = 0; i < 4; i++) {
        const legAngle = (i * Math.PI) / 6 - Math.PI / 4;
        const wave = Math.sin(legPhase + i * 0.5) * 0.2;

        // Pattes gauches
        ctx.beginPath();
        ctx.moveTo(0, -spider.size * 0.3 + i * spider.size * 0.3);
        ctx.quadraticCurveTo(
          -legLength * 0.5,
          -spider.size * 0.3 + i * spider.size * 0.3 - legLength * 0.3 + wave * legLength,
          -legLength * Math.cos(legAngle),
          legLength * Math.sin(legAngle) + wave * legLength
        );
        ctx.strokeStyle = "rgba(31, 41, 55, 0.6)";
        ctx.lineWidth = spider.size * 0.15;
        ctx.stroke();

        // Pattes droites
        ctx.beginPath();
        ctx.moveTo(0, -spider.size * 0.3 + i * spider.size * 0.3);
        ctx.quadraticCurveTo(
          legLength * 0.5,
          -spider.size * 0.3 + i * spider.size * 0.3 - legLength * 0.3 + wave * legLength,
          legLength * Math.cos(legAngle),
          legLength * Math.sin(legAngle) + wave * legLength
        );
        ctx.stroke();
      }

      ctx.restore();
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
        ctx.strokeStyle = "rgba(0, 128, 255, 0.25)";
        ctx.lineWidth = 2;

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
        ctx.strokeStyle = "rgba(0, 128, 255, 0.2)";
        ctx.lineWidth = 1.5;

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
          ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 128, 255, 0.6)";
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 128, 255, 0.4)";
          ctx.fill();
        }
      });

      // Animer et dessiner les araignées
      spidersRef.current.forEach((spider) => {
        spider.angle += spider.speed * 0.01 * spider.direction;
        spider.legPhase += 0.1;

        // Changer de direction aléatoirement
        if (Math.random() < 0.005) {
          spider.direction *= -1;
        }

        // Changer d'anneau aléatoirement
        if (Math.random() < 0.002) {
          spider.ring = Math.max(1, Math.min(6, spider.ring + (Math.random() > 0.5 ? 1 : -1)));
        }

        drawSpider(spider);
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
    />
  );
}