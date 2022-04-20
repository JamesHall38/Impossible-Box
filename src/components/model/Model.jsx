import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { default as Controls } from './Controls'
import { default as Cube } from './Cube'
import useStyles from './../styles'
import ResizeObserver from 'resize-observer-polyfill';



const Model = (props) => {
    const [rotate, setRotate] = useState(true)
    const classes = useStyles()

    window.ResizeObserver = ResizeObserver;


    // For mobile devices
    useEffect(() => {
        const handleMouseDown = () => {
            setRotate(false)
        }
        window.addEventListener("touchstart", handleMouseDown);
        return () => {
            window.removeEventListener("touchstart", handleMouseDown);
        }
    })


    return (
        <Canvas
            className={classes.canvas}
            style={{ position: 'absolute' }}
            flat
            // onClick={() => { setRotate(false) }} touchStart={() => { setRotate(false) }}
            // set the viewport window sizes
            camera={{ fov: 40 }}
            resize={{ polyfill: ResizeObserver }}
            dpr={2}>


            <group dispose={null} onClick={() => { setRotate(false) }} touchStart={() => { setRotate(false) }}>

                <directionalLight intensity={0.5} />
                <ambientLight intensity={0.5} />

                <Controls navigate={props.navigate} location={props.location} path={props.path} rotate={rotate} />
                <Cube />

            </group>
        </Canvas >
    )
}

export default Model