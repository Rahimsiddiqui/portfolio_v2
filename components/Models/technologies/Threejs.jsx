import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Threejs(props) {
  const { nodes, materials } = useGLTF("/models/threejs.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.material_0}
        material-color="white"
      />
    </group>
  );
}

useGLTF.preload("/models/threejs.glb");
