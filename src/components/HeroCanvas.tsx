'use client';

import { useRef, useEffect } from 'react';
import type { Color as ThreeColor } from 'three';

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let cleanup: () => void = () => {};

    async function init() {
      const c = container!;
      const THREE = await import('three');

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        75,
        c.clientWidth / c.clientHeight,
        0.1,
        1000,
      );
      camera.position.z = 6;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(c.clientWidth, c.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      c.appendChild(renderer.domElement);

      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d')!;
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.3, 'rgba(255,255,255,0.8)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
      const texture = new THREE.CanvasTexture(canvas);

      const count = 1800;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);

      const teal500 = new THREE.Color('#14b8a6');
      const teal400 = new THREE.Color('#2dd4bf');
      const slate400 = new THREE.Color('#94a3b8');
      const slate300 = new THREE.Color('#cbd5e1');

      for (let i = 0; i < count; i++) {
        const radius = 1 + Math.random() ** 1.5 * 4;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);

        const t = Math.random();
        let color: ThreeColor;
        if (t < 0.5) color = teal400.clone().lerp(teal500, Math.random());
        else if (t < 0.8)
          color = teal400.clone().lerp(slate300, Math.random() * 0.6);
        else color = slate300.clone().lerp(slate400, Math.random());

        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 0.06,
        map: texture,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
        depthWrite: false,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      const origPos = new Float32Array(positions);

      const mouse = { x: 0, y: 0 };
      const target = { x: 0, y: 0 };

      function onMouseMove(e: MouseEvent) {
        target.x = (e.clientX / window.innerWidth) * 2 - 1;
        target.y = -(e.clientY / window.innerHeight) * 2 + 1;
      }
      window.addEventListener('mousemove', onMouseMove, { passive: true });

      function onResize() {
        const w = c.clientWidth;
        const h = c.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
      window.addEventListener('resize', onResize, { passive: true });

      const prefersReduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      let t = 0;

      function animate() {
        animationId = requestAnimationFrame(animate);
        t += 0.003;

        mouse.x += (target.x - mouse.x) * 0.03;
        mouse.y += (target.y - mouse.y) * 0.03;

        particles.rotation.y = t * 0.08;
        particles.rotation.x = Math.sin(t * 0.04) * 0.08;

        if (!prefersReduced) {
          const posAttr = geometry.attributes.position;
          const arr = posAttr.array as Float32Array;

          for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const ox = origPos[i3];
            const oy = origPos[i3 + 1];
            const oz = origPos[i3 + 2];

            const fx = Math.sin(t * 0.6 + oy * 1.5) * 0.04;
            const fy = Math.cos(t * 0.5 + oz * 1.5) * 0.04;
            const fz = Math.sin(t * 0.7 + ox * 1.5) * 0.04;

            const dx = ox - mouse.x * 3;
            const dy = oy - mouse.y * 2;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const repel = Math.max(0, 1 - dist / 2.5);
            const repelStr = repel * repel * 0.4;

            arr[i3] = ox + fx + dx * repelStr;
            arr[i3 + 1] = oy + fy + dy * repelStr;
            arr[i3 + 2] = oz + fz;
          }

          posAttr.needsUpdate = true;
        }

        renderer.render(scene, camera);
      }

      animate();

      cleanup = () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', onResize);
        cancelAnimationFrame(animationId);
        renderer.dispose();
        geometry.dispose();
        material.dispose();
        texture.dispose();
        if (c.contains(renderer.domElement)) {
          c.removeChild(renderer.domElement);
        }
      };
    }

    init();

    return () => {
      cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      aria-hidden="true"
    />
  );
}
