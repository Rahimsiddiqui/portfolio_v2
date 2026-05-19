import React from "react";
import { useGLTF } from "@react-three/drei";

export default function MongoDB(props) {
  const { nodes, materials } = useGLTF("/models/mongodb.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.008, -0.007]} scale={[1, 1, 0.5]}>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["green-dark"]}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["green-light"]}
        />
        <mesh geometry={nodes.Object_6.geometry} material={materials.gray} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/mongodb.glb");
