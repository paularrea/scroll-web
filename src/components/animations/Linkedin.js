import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Linkedin(props) {
  const { nodes, materials } = useGLTF('/linkedin.glb')
  const group = useRef();
  
  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime()/1;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.13}>
            <mesh geometry={nodes.Object_14.geometry} material={materials['SVGMat.007']} />
            <mesh geometry={nodes.Object_15.geometry} material={materials['SVGMat.008']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/linkedin.glb')
