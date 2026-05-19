"use client";

import { useGLTF, Environment, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";

const TechIcon = ({ model, applyScale = true }) => {
  const scene = useGLTF(model.modelPath);

  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    if (model.name === "Three.js") {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name === "Object_5") {
            child.material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [scene, model.name]);

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
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcon;
