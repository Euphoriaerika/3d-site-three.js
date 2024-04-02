import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";

import skyScene from "../assets/3d/sky.glb";

const Sky = ({ isRotating, directionRotating, ...props }) => {
  // Load the sky model using useGLTF hook
  const sky = useGLTF(skyScene);

  // Create a ref to hold a reference to the mesh
  const skyRef = useRef();

  // Keep track of the current rotation of the sky
  const currentRotation = useRef(0);

  useEffect(() => {
    currentRotation.current = skyRef.current.rotation.y;
  }, []);

  // Use useFrame to perform animations in the render loop
  useFrame((_, delta) => {
    if (isRotating) {
      /**
       * Lerp the rotation of the sky towards the directionRotatiing at a smooth rate
       */

      currentRotation.current = MathUtils.lerp(
        currentRotation.current,
        directionRotating,
        18 * delta
      );

      console.log(directionRotating);
      skyRef.current.rotation.y = currentRotation.current;
    }
  });

  return (
    <mesh ref={skyRef} {...props}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
