import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      {/* ROOM LIGHTS */}
      <spotLight
        position={[-0.1, 2.5, 4]}
        intensity={50}
        angle={0.12}
        penumbra={0.25}
        color="white"
      />
      <spotLight
        position={[4, 5, 4]}
        intensity={40}
        angle={0.3}
        penumbra={0.5}
        color="#4cc0f0"
      />
      <spotLight
        position={[-3, 5, 5]}
        intensity={60}
        angle={0.4}
        penumbra={1}
        color="#9d4edd"
      />

      <primitive
        object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
        position={[1, 3, 4]}
        intensity={1}
        rotation={[-Math.PI / 4, -Math.PI / 4, 0]}
      />

      <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
      <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />

      {/* WALLS BACKSIDE LIGHTS */}
      <spotLight
        position={[-5, 4, -9]}
        intensity={60}
        angle={1.5}
        penumbra={1}
        color="#9d4edd"
      />
      <spotLight
        position={[3, 4, -9]}
        intensity={30}
        angle={1.5}
        penumbra={1}
        color="#9d4edd"
      />
    </>
  );
};

export default HeroLights;
