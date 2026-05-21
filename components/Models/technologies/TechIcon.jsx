"use client";

import React, { useState, useRef, useEffect } from "react";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { modelsMap } from "./index";
import { SkeletonCircle } from "@/components/Skeleton";

const TechIcon = ({ model, applyScale = true }) => {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const [isActive, setIsActive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMounted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  const normalize = (s) =>
    String(s)
      .replace(/[^a-z0-9]/gi, "")
      .toLowerCase();
  const modelKey = normalize(model.name);
  const findComponent = () => {
    const entries = Object.entries(modelsMap);
    for (const [key, Comp] of entries) {
      if (normalize(key) === modelKey) return Comp;
    }
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
      {!isMounted && (
        <div className="w-full h-full flex-center">
          <SkeletonCircle size="w-24 h-24" />
        </div>
      )}

      {isMounted && (
        <Canvas
          // frameloop={isActive ? undefined : "demand"}
          dpr={
            typeof window !== "undefined"
              ? Math.min(window.devicePixelRatio || 1, 1.25)
              : 1
          }
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.2} />
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
      )}
    </div>
  );
};

export default TechIcon;
