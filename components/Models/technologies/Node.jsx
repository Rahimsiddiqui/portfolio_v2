import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Nodejs(props) {
  const { nodes, materials } = useGLTF("/models/node-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={
          nodes["tripo_node_a2ae1f0a-576e-4d11-a22b-f4f90dd99b4b"].geometry
        }
        material={
          materials["tripo_material_a2ae1f0a-576e-4d11-a22b-f4f90dd99b4b"]
        }
      />
    </group>
  );
}

useGLTF.preload("/models/node-transformed.glb");
