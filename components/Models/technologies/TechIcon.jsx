"use client";

import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { modelsMap } from "./index";

const TechIcon = ({ model, applyScale = true }) => {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  // Find a matching component from the central `modelsMap` by heuristic.
  const normalize = (s) =>
    String(s)
      .replace(/[^a-z0-9]/gi, "")
      .toLowerCase();
  const modelKey = normalize(model.name);
  const findComponent = () => {
    const entries = Object.entries(modelsMap);
    // First pass: exact matches
    for (const [key, Comp] of entries) {
      if (normalize(key) === modelKey) return Comp;
    }
    // Second pass: heuristic matches
    for (const [key, Comp] of entries) {
      const keyNorm = normalize(key);
      if (keyNorm.includes(modelKey) || modelKey.includes(keyNorm)) return Comp;
    }
    return null;
  };

  const Component = findComponent();

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.2} />

      <Environment preset="city" />
      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group
          scale={
            applyScale
              ? isTablet
                ? model.scale * 0.75
                : model.scale
              : model.scale
          }
          rotation={model.rotation}
        >
          {/* Render the matching model component (if available). */}
          {Component ? <Component /> : null}
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcon;
