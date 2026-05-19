import React from "react";
import { useGLTF } from "@react-three/drei";

export default function SCSS(props) {
  const { nodes, materials } = useGLTF("/models/scss.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node1.geometry} material={materials["#CC6698F0"]} />
    </group>
  );
}

useGLTF.preload("/models/scss.glb");
