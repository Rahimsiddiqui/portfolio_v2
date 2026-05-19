import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Tailwindcss(props) {
  const { nodes, materials } = useGLTF("/models/tailwindcss.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.blue}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/tailwindcss.glb");
