import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Shadcn(props) {
  const { nodes, materials } = useGLTF("/models/shadcn.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node1.geometry} material={materials["#FEFEFEC4"]} />
      <mesh geometry={nodes.Node2.geometry} material={materials["#FEFEFEC4"]} />
    </group>
  );
}

useGLTF.preload("/models/shadcn.glb");
