/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MacContainer = () => {
  let model = useGLTF("./mac.glb");

  let tex = useTexture("./red.jpg");

  let meshes = {};

  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });

  // Correcting the rotation assignment
  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  meshes.matte.material.map = tex;

  // Fixing typo in 'emissiveIntensity'
  meshes.matte.material.emissiveIntensity = 0;
  meshes.matte.material.metalness = 0;
  meshes.matte.material.roughness = 1;

  let data = useScroll();

  useFrame(() => {
    // Correcting rotation calculation
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
  });

  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default MacContainer;
