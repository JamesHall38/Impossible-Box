import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { default as BoxContentMeshes } from './shaders/BoxContent'
import { default as EmissionMeshes } from './shaders/Emission'
import * as THREE from 'three'
import './shaders/RainMaterial'


const Rain = () => {
    const ref = useRef()
    const points = useRef()
    const geometry = new THREE.BufferGeometry()
    const count = 300
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
        const i3 = i * 3
        positions[i3] = (Math.random() - 0.5) * 2.5
        positions[i3 + 1] = (Math.random() - 0.5) * 2.5
        positions[i3 + 2] = (Math.random() - 0.5) * 2.5 + 0.75
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    useEffect(() => {
        ref.current.depthWrite = false
        ref.current.blending = THREE.AdditiveBlending
        ref.current.vertexColors = true
    }, [])

    useFrame(({ clock }) => {
        ref.current.uniforms.uTime = { value: clock.elapsedTime }
    })

    return (
        <points ref={points} geometry={geometry}>
            <rainMaterial ref={ref} />
        </points>
    )
}

const Emission = ({ face, faceName, nodes }) => {
    return (
        Object.values(nodes).map((node, index) => {
            if (node.type === 'Mesh')
                if (node.name.includes(faceName))
                    return (
                        <mesh key={index} geometry={node.geometry} >
                            <EmissionMeshes node={node} face={face} />
                        </mesh>)
            return (null)
        }))
}

const Cube = () => {
    const { nodes, materials } = useGLTF('/ImpossibleBox.glb')
    return (
        <group dispose={null}>
            <mesh geometry={nodes.Box.geometry} material={materials['Material.003']} />
            <mesh geometry={nodes.Cube.geometry} material={materials['Material.012']} />

            <BoxContentMeshes face={0} faceName={'Computer'} nodes={nodes} />
            <BoxContentMeshes face={1} faceName={'Contact'} nodes={nodes} />
            <BoxContentMeshes face={2} faceName={'Maze'} nodes={nodes} />
            <BoxContentMeshes face={3} faceName={'Sushi'} nodes={nodes} />

            <Emission face={1} faceName={'Icons'} nodes={nodes} />
            <Emission face={3} faceName={'Windows'} nodes={nodes} />

            <BoxContentMeshes face={0} nodes={nodes} screen={true} />

            <Rain />
        </group>
    )
}
useGLTF.preload('/ImpossibleBox.glb')

export default Cube