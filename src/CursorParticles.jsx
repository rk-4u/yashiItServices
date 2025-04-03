import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const CursorParticles = () => {
  const mountRef = useRef(null);
  let camera, scene, renderer;
  let mouseX = 0, mouseY = 0;
  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;
  const materials = [];

  useEffect(() => {
    console.log("🚀 Initializing Three.js Scene...");

    const init = () => {
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
      camera.position.z = 1000;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x111111); // ✅ Dark gray for better contrast
      scene.fog = new THREE.FogExp2(0x111111, 0.0008);

      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      // ✅ Load textures
      const textureLoader = new THREE.TextureLoader();
      const loadTexture = (path) => {
        return textureLoader.load(
          path,
          (texture) => console.log(`✅ Loaded: ${path}`),
          undefined,
          (err) => console.error(`❌ Error loading: ${path}`, err)
        );
      };

      const sprite1 = loadTexture("/textures/snowflake1.png");
      const sprite2 = loadTexture("/textures/snowflake2.png");
      const sprite3 = loadTexture("/textures/snowflake3.png");
      const sprite4 = loadTexture("/textures/snowflake4.png");
      const sprite5 = loadTexture("/textures/snowflake5.png");

      for (let i = 0; i < 10000; i++) {
        const x = Math.random() * 2000 - 1000;
        const y = Math.random() * 2000 - 1000;
        const z = Math.random() * 2000 - 1000;
        vertices.push(x, y, z);
      }

      geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

      const parameters = [
        [[0.2, 0.2, 0.2], sprite2, 20], // ✅ Dark gray
        [[0.15, 0.15, 0.15], sprite3, 15],
        [[0.1, 0.1, 0.1], sprite1, 10],
        [[0.05, 0.05, 0.05], sprite5, 8],
        [[0, 0, 0], sprite4, 5], // ✅ Black particles
      ];

      for (let i = 0; i < parameters.length; i++) {
        const color = parameters[i][0];
        const sprite = parameters[i][1];
        const size = parameters[i][2];

        materials[i] = new THREE.PointsMaterial({
          size: size,
          map: sprite || null,
          color: sprite ? 0x222222 : 0x111111, // ✅ Dark-colored particles
          blending: THREE.NormalBlending, // ✅ No bright glow effect
          depthTest: false,
          transparent: true,
        });

        materials[i].color.setHSL(color[0], color[1], color[2]);

        const particles = new THREE.Points(geometry, materials[i]);
        particles.rotation.x = Math.random() * 6;
        particles.rotation.y = Math.random() * 6;
        particles.rotation.z = Math.random() * 6;

        scene.add(particles);
      }

      // ✅ OPTIONAL: Add a semi-transparent dark overlay
      const overlayGeometry = new THREE.PlaneGeometry(2000, 2000);
      const overlayMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        opacity: 0.3, // ✅ Adjust opacity for desired darkness
        transparent: true,
      });

      const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial);
      overlay.position.set(0, 0, 500);
      scene.add(overlay);

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);
      console.log("🎨 Appended Canvas to DOM...");

      document.addEventListener("pointermove", onPointerMove);
      window.addEventListener("resize", onWindowResize);
    };

    const onPointerMove = (event) => {
      if (!event.isPrimary) return;
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };

    const render = () => {
      const time = Date.now() * 0.00005;

      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      for (let i = 0; i < scene.children.length; i++) {
        const object = scene.children[i];
        if (object instanceof THREE.Points) {
          object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
        }
      }

      renderer.render(scene, camera);
    };

    init();
    animate();

    return () => {
      console.log("🛑 Cleaning up...");
      window.removeEventListener("resize", onWindowResize);
      document.removeEventListener("pointermove", onPointerMove);
      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="threejs-container" />;
};

export default CursorParticles;
