import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Whatsapp(props) {
  const { nodes, materials } = useGLTF('/whatsapp.glb')
  const group = useRef();
  
  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime()/1;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_19.geometry} material={materials['SVGMat.009']} />
          <mesh geometry={nodes.Object_20.geometry} material={materials['SVGMat.010']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/whatsapp.glb')
