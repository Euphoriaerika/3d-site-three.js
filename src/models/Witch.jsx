import { useEffect, useRef } from "react";

// Import the witch model and animation-related hooks from drei
import witchScene from "../assets/3d/witch.glb";
import { useAnimations, useGLTF } from "@react-three/drei";

const Witch = ({ isRotating, ...props }) => {
  // Create a ref to hold a reference to the mesh
  const group = useRef();
  // Load the witch model and animations using useGLTF hook
  const { nodes, materials, animations } = useGLTF(witchScene);
  // Extract animation actions using useAnimations hook
  const { actions } = useAnimations(animations, group);

  // Use useEffect to control animations based on the isRotating prop
  useEffect(() => {
    actions["idle"].play();
  }, [actions, isRotating]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Object_4" scale={0.056}>
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.lambert46}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.lambert41}
          skeleton={nodes.Object_11.skeleton}
        />
        <skinnedMesh
          name="Object_12"
          geometry={nodes.Object_12.geometry}
          material={materials.lambert43}
          skeleton={nodes.Object_12.skeleton}
        />
        <skinnedMesh
          name="Object_13"
          geometry={nodes.Object_13.geometry}
          material={materials.lambert44}
          skeleton={nodes.Object_13.skeleton}
        />
        <skinnedMesh
          name="Object_14"
          geometry={nodes.Object_14.geometry}
          material={materials.lambert45}
          skeleton={nodes.Object_14.skeleton}
        />
        <skinnedMesh
          name="Object_15"
          geometry={nodes.Object_15.geometry}
          material={materials.Chain_Chronicle_000_lambert39}
          skeleton={nodes.Object_15.skeleton}
        />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.lambert47}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.lambert42}
          skeleton={nodes.Object_9.skeleton}
        />
        <primitive object={nodes._rootJoint} />
      </group>
    </group>
  );
};

export default Witch;
