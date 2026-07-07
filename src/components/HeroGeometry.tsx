'use client';

import { useRef, useEffect } from 'react';
import type { Mesh } from 'three';

export default function HeroGeometry() {
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
        45,
        c.clientWidth / c.clientHeight,
        0.1,
        100,
      );
      camera.position.set(4, 1.5, 4.5);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(c.clientWidth, c.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      c.appendChild(renderer.domElement);

      const { OrbitControls } = await import('three/addons/controls/OrbitControls.js');
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.rotateSpeed = 0.4;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.8;
      controls.minDistance = 3;
      controls.maxDistance = 10;
      controls.enablePan = false;
      controls.target.set(0, 0, 0);

      const nodePositions = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(1.4, 0, 0),
        new THREE.Vector3(-1.4, 0, 0),
        new THREE.Vector3(0, 1.4, 0),
        new THREE.Vector3(0, -1.4, 0),
        new THREE.Vector3(0, 0, 1.4),
        new THREE.Vector3(0, 0, -1.4),
        new THREE.Vector3(0.9, 0.9, 0.9),
        new THREE.Vector3(-0.9, 0.9, -0.9),
        new THREE.Vector3(0.9, -0.9, -0.9),
        new THREE.Vector3(-0.9, -0.9, 0.9),
      ];

      const group = new THREE.Group();
      scene.add(group);

      const sphereGeo = new THREE.SphereGeometry(0.07, 8, 6);
      const sphereMat = new THREE.MeshPhysicalMaterial({
        color: '#2dd4bf',
        emissive: '#2dd4bf',
        emissiveIntensity: 0.4,
        metalness: 0.3,
        roughness: 0.2,
      });

      const centerGeo = new THREE.SphereGeometry(0.13, 12, 8);
      const centerMat = new THREE.MeshPhysicalMaterial({
        color: '#2dd4bf',
        emissive: '#2dd4bf',
        emissiveIntensity: 0.8,
        metalness: 0.2,
        roughness: 0.1,
      });
      const centerSphere = new THREE.Mesh(centerGeo, centerMat);
      centerSphere.position.copy(nodePositions[0]);
      group.add(centerSphere);

      const outerSpheres: Mesh[] = [];
      for (let i = 1; i < nodePositions.length; i++) {
        const sphere = new THREE.Mesh(sphereGeo, sphereMat);
        sphere.position.copy(nodePositions[i]);
        group.add(sphere);
        outerSpheres.push(sphere);
      }

      const connections: [number, number][] = [];
      for (let i = 1; i < nodePositions.length; i++) {
        connections.push([0, i]);
      }
      connections.push([1, 3], [3, 2], [2, 4], [4, 1]);
      connections.push([5, 3], [3, 6], [6, 4], [4, 5]);
      connections.push([1, 5], [2, 6], [1, 6], [2, 5]);
      connections.push([7, 8], [7, 9], [7, 10], [8, 9], [8, 10], [9, 10]);
      connections.push([7, 1], [8, 2], [9, 2], [10, 1]);
      connections.push([7, 3], [8, 3], [9, 4], [10, 4]);

      const lineMat = new THREE.LineBasicMaterial({
        color: '#2dd4bf',
        transparent: true,
        opacity: 0.25,
      });

      for (const [a, b] of connections) {
        const geo = new THREE.BufferGeometry().setFromPoints([
          nodePositions[a],
          nodePositions[b],
        ]);
        const line = new THREE.Line(geo, lineMat);
        group.add(line);
      }

      const outerLinesMat = new THREE.LineBasicMaterial({
        color: '#2dd4bf',
        transparent: true,
        opacity: 0.12,
      });

      for (let i = 1; i < nodePositions.length; i++) {
        for (let j = i + 1; j < nodePositions.length; j++) {
          const dist = nodePositions[i].distanceTo(nodePositions[j]);
          if (dist < 2.2 && dist > 0.1) {
            const alreadyConnected = connections.some(
              ([a, b]) => (a === i && b === j) || (a === j && b === i),
            );
            if (!alreadyConnected) {
              const geo = new THREE.BufferGeometry().setFromPoints([
                nodePositions[i],
                nodePositions[j],
              ]);
              const line = new THREE.Line(geo, outerLinesMat);
              group.add(line);
            }
          }
        }
      }

      const ambient = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambient);
      const dirLight = new THREE.DirectionalLight(0x2dd4bf, 0.8);
      dirLight.position.set(5, 5, 5);
      scene.add(dirLight);
      const fillLight = new THREE.DirectionalLight(0x94a3b8, 0.3);
      fillLight.position.set(-3, -2, 4);
      scene.add(fillLight);

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

      if (prefersReduced) {
        controls.autoRotate = false;
      }

      function animate() {
        animationId = requestAnimationFrame(animate);

        controls.update();

        if (!prefersReduced) {
          const floatY = Math.sin(Date.now() * 0.0008) * 0.04;
          group.position.y = floatY;

          const pulse = 0.6 + Math.sin(Date.now() * 0.002) * 0.4;
          centerMat.emissiveIntensity = pulse;
        }

        renderer.render(scene, camera);
      }

      animate();

      cleanup = () => {
        window.removeEventListener('resize', onResize);
        cancelAnimationFrame(animationId);
        controls.dispose();
        renderer.dispose();
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
      className="hidden md:block absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 w-56 h-56 lg:w-72 lg:h-72"
      aria-hidden="true"
    />
  );
}
