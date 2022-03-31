import { shaderMaterial } from '@react-three/drei'
import glsl from 'glslify';
import { extend } from '@react-three/fiber'


const RainMaterial = shaderMaterial(
    { uTime: 0, uSize: 15 * window.devicePixelRatio },
    // vertex shader
    glsl`
    uniform float uTime;
    uniform float uSize;
    out vec3 worldPosition;
    attribute float aScale;
    void main()
    {
        worldPosition = vec3(modelMatrix * vec4(position, 1.0));
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        // modelPosition.x = mod(-uTime * 0.5 + position.x , 1.0)-0.5;
        modelPosition.y = mod(-uTime * 1.75 + position.y , 1.0)-0.5;
        vec4 viewPosition = viewMatrix * modelPosition;
        gl_Position =  projectionMatrix * viewPosition;
        gl_PointSize = uSize ;
        gl_PointSize *= (1.0 / - viewPosition.z);
    }
  `,
    // fragment shader
    glsl`
    in vec3 worldPosition;    
    const vec2 corners[4] = vec2[](vec2(0.5, 0.5), vec2(-0.5, 0.5), vec2(-0.5, -0.5), vec2(0.5, -0.5));
    
    bool order(vec2 A, vec2 B, vec2 C) {
        return (C.y-A.y) * (B.x-A.x) > (B.y-A.y) * (C.x-A.x);
    }
    
    bool intersect(vec2 A, vec2 B, vec2 C, vec2 D) {
        return order(A,C,D) != order(B,C,D) && order(A,B,C) != order(A,B,D);
    }
    
    void main() {
        int face = 2;
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
        float strength = mod(gl_PointCoord.x + 0.5 - gl_PointCoord.y * 0.1, 1.0);
        strength = step(0.90, strength);
        gl_FragColor = vec4(vec3(strength), 0.25);
    }
    `
)
extend({ RainMaterial })
