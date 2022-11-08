import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Icons(props) {
  const { nodes, materials } = useGLTF('/icons.glb')
  const group = useRef();
  
  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime()/2;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.15, 0.08, 0]} scale={1.5}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['SVGMat.001']} />
            <mesh geometry={nodes.Object_5.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_6.geometry} material={materials['SVGMat.002']} />
            <mesh geometry={nodes.Object_7.geometry} material={materials['SVGMat.003']} />
            <mesh geometry={nodes.Object_8.geometry} material={materials['SVGMat.004']} />
            <mesh geometry={nodes.Object_9.geometry} material={materials['SVGMat.005']} />
          </group>
          <group position={[0, 0.07, 0]} rotation={[Math.PI / 2, 0, 0]} scale={2.96}>
            <mesh geometry={nodes.Object_11.geometry} material={materials['SVGMat.006']} />
            <mesh geometry={nodes.Object_12.geometry} material={materials['Material.003']} />
          </group>
          <group position={[0.14, 0.08, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.13}>
            <mesh geometry={nodes.Object_14.geometry} material={materials['SVGMat.007']} />
            <mesh geometry={nodes.Object_15.geometry} material={materials['SVGMat.008']} />
          </group>
          <group position={[-0.1, -0.06, 0]} scale={[1, 0.72, 1]}>
            <mesh geometry={nodes.Object_17.geometry} material={materials.SVGMat} />
          </group>
          <group position={[0.08, -0.06, 0]}>
            <mesh geometry={nodes.Object_19.geometry} material={materials['SVGMat.009']} />
            <mesh geometry={nodes.Object_20.geometry} material={materials['SVGMat.010']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/icons.glb')
