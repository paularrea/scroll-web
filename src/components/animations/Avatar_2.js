import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Avatar2(props) {
  const { nodes, materials } = useGLTF("/avatar_2.glb");
  const group = useRef();
  
  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime()/2;
  });

  return (
    <group ref={group} {...props} dispose={null} scale={1} position={[0, -1, 0]}>
      <mesh geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} />
      <mesh
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
      />
      <mesh
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
      />
      <mesh
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
      />
      <mesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
      />
      <mesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
      />
      <mesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
      />
      <mesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
      />
      <mesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
      />
    </group>
  );
}

useGLTF.preload("/avatar_2.glb");
