"use client";

import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { useState, useRef } from "react";
import { modelsMap } from "./index";

const TechIcon = ({ model, applyScale = true }) => {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const [isActive, setIsActive] = useState(false);
  const wrapperRef = useRef(null);

  // When many icons render, continuous canvas updates cause high GPU usage.
  // Default to `frameloop='demand'` and enable continuous rendering only
  // while the user interacts (hover/focus) with the icon.
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
    <div
      ref={wrapperRef}
      onPointerEnter={() => setIsActive(true)}
      onPointerLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      tabIndex={0}
      style={{ width: "100%", height: "100%" }}
    >
      <Canvas
        dpr={
          typeof window !== "undefined"
            ? Math.min(window.devicePixelRatio || 1, 1.25)
            : 1
        }
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.2} />

        {/* Preserve environment and keep Float always mounted so icons float by default */}
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} />

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
            {Component ? <Component /> : null}
          </group>
        </Float>
      </Canvas>
    </div>
  );
};

export default TechIcon;
