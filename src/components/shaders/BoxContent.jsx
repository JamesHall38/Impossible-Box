import { useMemo } from 'react'
import { useTexture } from '@react-three/drei'


const BoxContent = ({ face, faceName, nodes, screen }) => {
    const texture = useTexture(`BackedFace${face}.jpg`)
    const screenTexture = useTexture(`Screen.jpg`)

    texture.flipY = false

    const vertexShader = `
    out vec3 worldPosition;
    varying vec2 vUv;
    void main()
    {
        worldPosition = vec3(modelMatrix * vec4(position, 1.0));
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;
        vUv = uv;
    }`
    const fragmentShader = `
    in vec3 worldPosition;
    uniform sampler2D uTexture;
    varying vec2 vUv;
    uniform int face;
    const vec2 corners[4] = vec2[](vec2(0.5, 0.5), vec2(-0.5, 0.5), vec2(-0.5, -0.5), vec2(0.5, -0.5));
    bool order(vec2 A, vec2 B, vec2 C) {
        return (C.y-A.y) * (B.x-A.x) > (B.y-A.y) * (C.x-A.x);
    }
    bool intersect(vec2 A, vec2 B, vec2 C, vec2 D) {
        return order(A,C,D) != order(B,C,D) && order(A,B,C) != order(A,B,D);
    }
    void main() {
        vec2 a = worldPosition.xz;
        vec2 b = cameraPosition.xz;
        vec2 aa ;
        vec2 bb ; 
        if (bool(mod(float(face),2.0))){
            aa = worldPosition.xy;
            bb = cameraPosition.xy; 
        }
        else{
            aa = worldPosition.yz;
            bb = cameraPosition.yz;
        }
        int next = int(mod(float(face + 1), 4.0));
        vec2 c = corners[face];
        vec2 d = corners[next];
        if (!(intersect(a, b, c, d) && intersect(aa, bb, c, d))) {
            discard;
        }
        vec4 textureColor = texture2D(uTexture, vUv);
        gl_FragColor = textureColor;
    }`

    const data = useMemo(
        () => ({
            uniforms: {
                face: { value: face },
                uTexture: { value: screen ? screenTexture : texture }
            },
            fragmentShader,
            vertexShader
        }),
        [face, fragmentShader, vertexShader, texture, screen, screenTexture]
    )

    if (screen) {
        return (<mesh geometry={nodes.Screen.geometry} >
            <shaderMaterial {...data} />
        </mesh>
        )
    }

    return (
        Object.values(nodes).map((node, index) => {
            if (node.type === 'Mesh')
                if (node.name.includes(faceName))
                    return (
                        <mesh key={index} geometry={node.geometry} >
                            <shaderMaterial {...data} precision='lowp' />
                        </mesh>)
            return (null)
        }))
}

export default BoxContent