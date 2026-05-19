import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Express(props) {
  const { nodes, materials } = useGLTF("/models/express.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node1.geometry} material={materials["#FEFEFEA9"]} />
      <mesh geometry={nodes.Node2.geometry} material={materials["#FEFEFEA9"]} />
    </group>
  );
}

useGLTF.preload("/models/express.glb");
