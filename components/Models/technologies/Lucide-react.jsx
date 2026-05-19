import React from "react";
import { useGLTF } from "@react-three/drei";

export default function LucideReact(props) {
  const { nodes, materials } = useGLTF("/models/lucide-react.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node1.geometry} material={materials["#F57272FF"]} />
      <mesh geometry={nodes.Node2.geometry} material={materials["#3E4756FF"]} />
    </group>
  );
}

useGLTF.preload("/models/lucide-react.glb");
