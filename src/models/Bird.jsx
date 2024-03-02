import { useEffect, useRef } from "react";

// Import the bird model and animation-related hooks from drei
import birdScene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
  // Create a ref to hold a reference to the mesh
  const birdRef = useRef();
  // Load the bird model and animations from the glTF file
  const { scene, animations } = useGLTF(birdScene);
  // Extract animation actions using useAnimations hook
  const { actions } = useAnimations(animations, birdRef);

  // Use useEffect to play the initial animation when the component mounts
  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  // Use useFrame to perform animations in the render loop
  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate flight moving in a sin wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Adjust rotation based on camera position for a turning effect
    if (birdRef.current.rotation.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.rotation.x < camera.position.x + 10) {
      birdRef.current.rotation.y = 0;
    }

    // Move the bird along the X and Z axes based on rotation
    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  // Return a mesh with the loaded bird model
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

// Export the Bird component as the default export
export default Bird;
