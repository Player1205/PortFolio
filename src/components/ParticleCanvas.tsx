"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  glowColor: string;
  alpha: number;
  phase: number;
}

interface ParticleCanvasProps {
  className?: string;
  particleCount?: number;
  maxDistance?: number;
  interactive?: boolean;
}

export function ParticleCanvas({
  className = "absolute inset-0 pointer-events-none w-full h-full z-0",
  particleCount = 70,
  maxDistance = 130,
  interactive = true,
}: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // High DPI display support
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const mouse = {
      x: -9999,
      y: -9999,
      radius: 170,
      active: false,
    };

    // Color palette matching Solar Amber and Cyan tech aesthetics
    const palette = [
      { fill: "rgba(255, 158, 59, ", glow: "rgba(255, 158, 59, 0.6)" },    // Solar Amber
      { fill: "rgba(56, 189, 248, ", glow: "rgba(56, 189, 248, 0.6)" },    // Cyber Cyan
      { fill: "rgba(248, 250, 252, ", glow: "rgba(248, 250, 252, 0.4)" },   // Crisp White/Silver
      { fill: "rgba(255, 179, 102, ", glow: "rgba(255, 179, 102, 0.5)" },  // Warm Amber Dim
    ];

    const particles: Particle[] = [];

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        const pal = palette[Math.floor(Math.random() * palette.length)];
        const baseRadius = Math.random() * 1.6 + 1.2;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.65,
          vy: (Math.random() - 0.5) * 0.65,
          radius: baseRadius,
          baseRadius,
          color: pal.fill,
          glowColor: pal.glow,
          alpha: Math.random() * 0.4 + 0.35,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    // Mouse Tracking on the window/canvas parent
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    };

    const handleTouchEnd = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const targetEl = canvas.parentElement || window;
    if (interactive) {
      targetEl.addEventListener("mousemove", handleMouseMove as EventListener, { passive: true });
      targetEl.addEventListener("mouseleave", handleMouseLeave as EventListener, { passive: true });
      targetEl.addEventListener("touchmove", handleTouchMove as EventListener, { passive: true });
      targetEl.addEventListener("touchend", handleTouchEnd as EventListener, { passive: true });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let lastTime = performance.now();

    const render = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // 1. Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Harmonic breath effect
        p.phase += delta * 1.5;
        const pulse = Math.sin(p.phase) * 0.3;
        p.radius = p.baseRadius + pulse;

        // Interactive Attractor Physics
        if (interactive && mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius && dist > 1) {
            const force = (1 - dist / mouse.radius) * 1.2;
            const angle = Math.atan2(dy, dx);
            // Gentle pull towards cursor
            p.vx += Math.cos(angle) * force * delta * 4;
            p.vy += Math.sin(angle) * force * delta * 4;
          }
        }

        // Apply friction to prevent runaway speeds
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Position update
        p.x += p.vx * 60 * delta;
        p.y += p.vy * 60 * delta;

        // Soft screen bounds wrap/bounce
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Draw particle dot with subtle radial glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, p.radius), 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.glowColor;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow for lines
      }

      // 2. Proximity line-drawing physics between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const proximityAlpha = (1 - dist / maxDistance) * 0.28;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // Dynamic gradient between nodes
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, `${p1.color}${proximityAlpha})`);
            gradient.addColorStop(1, `${p2.color}${proximityAlpha})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = Math.max(0.6, (1 - dist / maxDistance) * 1.2);
            ctx.stroke();
          }
        }
      }

      // 3. Mouse direct high-intensity ray connections
      if (interactive && mouse.active) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const rayAlpha = (1 - dist / mouse.radius) * 0.75;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);

            const rayGrad = ctx.createLinearGradient(mouse.x, mouse.y, p.x, p.y);
            rayGrad.addColorStop(0, `rgba(255, 158, 59, ${rayAlpha * 0.9})`); // Solar Amber at cursor
            rayGrad.addColorStop(0.6, `rgba(56, 189, 248, ${rayAlpha * 0.7})`); // Cyan mid
            rayGrad.addColorStop(1, `${p.color}${rayAlpha * 0.4})`);

            ctx.strokeStyle = rayGrad;
            ctx.lineWidth = (1 - dist / mouse.radius) * 1.8 + 0.5;
            ctx.shadowBlur = 6;
            ctx.shadowColor = "rgba(255, 158, 59, 0.5)";
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }

        // Draw soft cursor beacon dot
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 158, 59, 0.8)";
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(255, 158, 59, 0.9)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        targetEl.removeEventListener("mousemove", handleMouseMove as EventListener);
        targetEl.removeEventListener("mouseleave", handleMouseLeave as EventListener);
        targetEl.removeEventListener("touchmove", handleTouchMove as EventListener);
        targetEl.removeEventListener("touchend", handleTouchEnd as EventListener);
      }
    };
  }, [particleCount, maxDistance, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}

export default ParticleCanvas;
