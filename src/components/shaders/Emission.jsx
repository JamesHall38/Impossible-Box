import * as THREE from 'three'

const Emission = ({ node, face }) => {
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
        }
        `
    const fragmentShader = `
        in vec3 worldPosition;
        uniform vec4 uTexture;
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
            gl_FragColor = uTexture;
        }`
    const texture = new THREE.Vector4(node.material.emissive.r, node.material.emissive.g, node.material.emissive.b, 1)
    const data = {
        uniforms: {
            face: { value: face },
            uTexture: { value: texture }
        },
        fragmentShader,
        vertexShader
    }

    return <shaderMaterial {...data} />
}

export default Emission