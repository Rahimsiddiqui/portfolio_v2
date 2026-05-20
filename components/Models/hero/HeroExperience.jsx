"use client";

// HeroExperience
// Renders the Three.js `Canvas` for the hero section. Exposes control props:
// - `onLoaded` (callback) fires when GLTF and textures reach 100% load.
// - `disableParticles` disables particle system to reduce GPU load during animations.
// - `useDemandFrameloop` switches the canvas to `frameloop="demand"` while
//   the page's intro animation runs to avoid contention with GSAP.

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useProgress } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Room } from "./Room";
import { useEffect, useRef } from "react";

const HeroExperience = ({
  onLoaded,
  disableParticles = false,
  useDemandFrameloop = false,
}) => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  function ProgressWatcher() {
    const { progress } = useProgress();
    const calledRef = useRef(false);

    useEffect(() => {
      if (progress >= 100 && !calledRef.current) {
        calledRef.current = true;
        onLoaded && onLoaded();
      }
    }, [progress, onLoaded]);

    return null;
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      dpr={[1, 1.5]}
      frameloop={useDemandFrameloop ? "demand" : undefined}
    >
      <HeroLights />
      {!disableParticles && <Particles count={150} />}
      <ProgressWatcher />

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
