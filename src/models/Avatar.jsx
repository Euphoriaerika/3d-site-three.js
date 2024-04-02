import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from "../assets/3d/avatar.glb";

const Avatar = ({ currentAnimation, ...props }) => {
  // Create a ref to hold a reference to the mesh
  const group = useRef();
  // Load the objects, materials and animations from the glTF scene
  const { nodes, materials, animations } = useGLTF(scene);
  // Extract animation actions using useAnimations hook
  const { actions } = useAnimations(animations, group);

  // Use useEffect to control animations based on the form state
  useEffect(() => {
    // Stop all existing animation actions before starting a new one.
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      // Play the animation corresponding to the 'currentAnimation' prop.
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <group name="Avatar">
          <skinnedMesh
            name="Avatar001"
            geometry={nodes.Avatar001.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.Avatar001.skeleton}
            morphTargetDictionary={nodes.Avatar001.morphTargetDictionary}
            morphTargetInfluences={nodes.Avatar001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Avatar001_1"
            geometry={nodes.Avatar001_1.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Avatar001_1.skeleton}
            morphTargetDictionary={nodes.Avatar001_1.morphTargetDictionary}
            morphTargetInfluences={nodes.Avatar001_1.morphTargetInfluences}
          />
          <skinnedMesh
            name="Avatar001_2"
            geometry={nodes.Avatar001_2.geometry}
            material={materials.Wolf3D_Teeth}
            skeleton={nodes.Avatar001_2.skeleton}
            morphTargetDictionary={nodes.Avatar001_2.morphTargetDictionary}
            morphTargetInfluences={nodes.Avatar001_2.morphTargetInfluences}
          />
          <skinnedMesh
            name="Avatar001_3"
            geometry={nodes.Avatar001_3.geometry}
            material={materials.Wolf3D_Hair}
            skeleton={nodes.Avatar001_3.skeleton}
            morphTargetDictionary={nodes.Avatar001_3.morphTargetDictionary}
            morphTargetInfluences={nodes.Avatar001_3.morphTargetInfluences}
          />
          <skinnedMesh
            name="Avatar001_4"
            geometry={nodes.Avatar001_4.geometry}
            material={materials.Wolf3D_Body}
            skeleton={nodes.Avatar001_4.skeleton}
            morphTargetDictionary={nodes.Avatar001_4.morphTargetDictionary}
            morphTargetInfluences={nodes.Avatar001_4.morphTargetInfluences}
          />
          <skinnedMesh
            name="Avatar001_5"
            geometry={nodes.Avatar001_5.geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={nodes.Avatar001_5.skeleton}
            morphTargetDictionary={nodes.Avatar001_5.morphTargetDictionary}
            morphTargetInfluences={nodes.Avatar001_5.morphTargetInfluences}
          />
          <skinnedMesh
            name="Avatar001_6"
            geometry={nodes.Avatar001_6.geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={nodes.Avatar001_6.skeleton}
            morphTargetDictionary={nodes.Avatar001_6.morphTargetDictionary}
            morphTargetInfluences={nodes.Avatar001_6.morphTargetInfluences}
          />
          <skinnedMesh
            name="Avatar001_7"
            geometry={nodes.Avatar001_7.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Avatar001_7.skeleton}
            morphTargetDictionary={nodes.Avatar001_7.morphTargetDictionary}
            morphTargetInfluences={nodes.Avatar001_7.morphTargetInfluences}
          />
        </group>
        <primitive object={nodes.mixamorigHips} />
      </group>
    </group>
  );
};

export default Avatar;
