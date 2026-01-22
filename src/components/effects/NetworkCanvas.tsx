import { useEffect, useRef, useCallback } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

interface NetworkCanvasProps {
  className?: string;
  nodeCount?: number;
  connectionDistance?: number;
  mouseInteraction?: boolean;
}

const COLORS = ['#00d4ff', '#00b8a9', '#0066ff', '#7c3aed'];

export function NetworkCanvas({
  className = '',
  nodeCount = 80,
  connectionDistance = 150,
  mouseInteraction = true,
}: NetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const animationRef = useRef<number>();

  // Initialize nodes
  const initNodes = useCallback(
    (width: number, height: number) => {
      const nodes: Node[] = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1.5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
      return nodes;
    },
    [nodeCount]
  );

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    const nodes = nodesRef.current;
    const mouse = mouseRef.current;

    // Clear canvas with fade effect
    ctx.fillStyle = 'rgba(5, 5, 8, 0.1)';
    ctx.fillRect(0, 0, width, height);

    // Update and draw nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      // Mouse interaction - gentle attraction
      if (mouseInteraction && mouse.active) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 200 * 0.02;
          node.vx += dx * force * 0.01;
          node.vy += dy * force * 0.01;
        }
      }

      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off edges with damping
      if (node.x < 0 || node.x > width) {
        node.vx *= -0.8;
        node.x = Math.max(0, Math.min(width, node.x));
      }
      if (node.y < 0 || node.y > height) {
        node.vy *= -0.8;
        node.y = Math.max(0, Math.min(height, node.y));
      }

      // Apply friction
      node.vx *= 0.99;
      node.vy *= 0.99;

      // Draw connections
      for (let j = i + 1; j < nodes.length; j++) {
        const other = nodes[j];
        const dx = other.x - node.x;
        const dy = other.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          const opacity = (1 - dist / connectionDistance) * 0.15;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);

          // Create gradient for connection
          const gradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y);
          gradient.addColorStop(0, node.color.replace(')', `, ${opacity})`).replace('rgb', 'rgba').replace('#', 'rgba(').replace(/([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i, (_, r, g, b) => `${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}`));
          gradient.addColorStop(1, other.color.replace(')', `, ${opacity})`).replace('rgb', 'rgba').replace('#', 'rgba(').replace(/([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i, (_, r, g, b) => `${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}`));

          ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // Draw node with glow
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
      ctx.fillStyle = node.color.replace(')', ', 0.1)').replace('rgb', 'rgba').replace('#', 'rgba(').replace(/([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i, (_, r, g, b) => `${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, 0.1`);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [connectionDistance, mouseInteraction]);

  // Handle resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    // Reinitialize nodes if needed
    if (nodesRef.current.length === 0) {
      nodesRef.current = initNodes(rect.width, rect.height);
    }
  }, [initNodes]);

  // Handle mouse move
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.active = false;
  }, []);

  // Setup and cleanup
  useEffect(() => {
    handleResize();
    nodesRef.current = initNodes(
      canvasRef.current?.getBoundingClientRect().width || window.innerWidth,
      canvasRef.current?.getBoundingClientRect().height || window.innerHeight
    );

    window.addEventListener('resize', handleResize);

    if (mouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);
    }

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, handleResize, handleMouseMove, handleMouseLeave, initNodes, mouseInteraction]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{
        background: 'transparent',
        pointerEvents: mouseInteraction ? 'auto' : 'none',
      }}
    />
  );
}

export default NetworkCanvas;
