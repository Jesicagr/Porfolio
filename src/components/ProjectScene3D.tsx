'use client';

import { useRef, useEffect } from 'react';
import type { BufferGeometry } from 'three';

interface Props {
  index: number;
}

const SHAPES = ['cube', 'octahedron', 'dodecahedron'] as const;

export default function ProjectScene3D({ index }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.3 },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let cleanup: () => void = () => {};

    async function init() {
      const c = container!;
      const THREE = await import('three');

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.z = 3;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(72, 72);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      c.appendChild(renderer.domElement);

      const shape = SHAPES[index % SHAPES.length];
      let geometry: BufferGeometry;
      switch (shape) {
        case 'cube':
          geometry = new THREE.BoxGeometry(1, 1, 1);
          break;
        case 'octahedron':
          geometry = new THREE.OctahedronGeometry(0.8);
          break;
        case 'dodecahedron':
          geometry = new THREE.DodecahedronGeometry(0.7);
          break;
      }

      const edges = new THREE.EdgesGeometry(geometry);
      const edgeMat = new THREE.LineBasicMaterial({
        color: '#2dd4bf',
        transparent: true,
        opacity: 0.5,
      });
      const wireframe = new THREE.LineSegments(edges, edgeMat);
      scene.add(wireframe);

      const fillMat = new THREE.MeshPhysicalMaterial({
        color: '#2dd4bf',
        transparent: true,
        opacity: 0.08,
        side: THREE.DoubleSide,
      });
      const fill = new THREE.Mesh(geometry, fillMat);
      scene.add(fill);

      let speed = 0.002;

      function animate() {
        animationId = requestAnimationFrame(animate);

        const target = isVisibleRef.current ? 0.01 : 0.0015;
        speed += (target - speed) * 0.04;

        wireframe.rotation.x += speed * 0.5;
        wireframe.rotation.y += speed;
        fill.rotation.copy(wireframe.rotation);

        renderer.render(scene, camera);
      }

      animate();

      cleanup = () => {
        cancelAnimationFrame(animationId);
        renderer.dispose();
        geometry.dispose();
        edges.dispose();
        edgeMat.dispose();
        fillMat.dispose();
        if (c.contains(renderer.domElement)) {
          c.removeChild(renderer.domElement);
        }
      };
    }

    init();
    return () => cleanup();
  }, [index]);

  return (
    <div
      ref={containerRef}
      className="absolute top-3 right-3 w-[72px] h-[72px] opacity-40 motion-safe:group-hover:opacity-70 transition-opacity duration-300"
      aria-hidden="true"
    />
  );
}
