"use client";

import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  useProgress,
} from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { modelsMap } from "./index";
import { SkeletonCircle } from "@/components/Skeleton";

function LoadingWatcher({ onReady }) {
  const { active, progress } = useProgress();

  useEffect(() => {
    if (!active && progress === 100) {
      onReady?.();
    }
  }, [active, progress, onReady]);

  return null;
}

const TechIcon = ({ model, applyScale = true }) => {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const [isMounted, setIsMounted] = useState(false);
  const [isReady, setIsReady] = useState(false);
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

  useEffect(() => {
    setIsReady(false);
  }, [model?.name]);

  const normalize = (s) =>
    String(s)
      .replace(/[^a-z0-9]/gi, "")
      .toLowerCase();

  const modelKey = normalize(model.name);

  const Component = useMemo(() => {
    const entries = Object.entries(modelsMap);

    for (const [key, Comp] of entries) {
      if (normalize(key) === modelKey) return Comp;
    }

    for (const [key, Comp] of entries) {
      const keyNorm = normalize(key);
      if (keyNorm.includes(modelKey) || modelKey.includes(keyNorm)) return Comp;
    }

    return null;
  }, [modelKey]);

  return (
    <div
      ref={wrapperRef}
      tabIndex={0}
      className="relative w-full h-full overflow-hidden rounded-full"
    >
      <div
        className={`absolute inset-0 flex items-center justify-center bg-zinc-900 transition-opacity duration-300 ${
          isReady ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-full h-full flex items-center justify-center">
          <SkeletonCircle size="w-24 h-24" />
        </div>
      </div>

      {isMounted && (
        <div className="absolute inset-0">
          <Canvas
            dpr={
              typeof window !== "undefined"
                ? Math.min(window.devicePixelRatio || 1, 1.25)
                : 1
            }
            gl={{ alpha: true, antialias: true }}
          >
            <Suspense fallback={null}>
              <LoadingWatcher onReady={() => setIsReady(true)} />

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
            </Suspense>
          </Canvas>
        </div>
      )}
    </div>
  );
};

export default TechIcon;
