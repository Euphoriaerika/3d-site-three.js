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
    actions["Hovering"].play();
  }, []);

  // Use useFrame to perform animations in the render loop
  useFrame(({ clock }) => {
    // Move the bird along the X and Z axes in a circular motion
    const radius = 4; // Circle radius
    const speed = -0.3; // Movement speed
    const angle = clock.elapsedTime * speed; // Angle displacement over time

    birdRef.current.position.x = radius * Math.cos(angle - Math.PI);
    birdRef.current.position.z = radius * Math.sin(angle);
    birdRef.current.position.y = Math.sin(angle) + 2;
    // Bird rotation formula relative to rotation around the object
    birdRef.current.rotation.y = angle + Math.PI * 2;
  });

  // Return a mesh with the loaded bird model
  return (
    <mesh position={[-5, 2, 1]} scale={[0.05, 0.05, 0.05]} rotation={[6, 0, 0]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

// Export the Bird component as the default export
export default Bird;

