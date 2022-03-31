import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { default as Controls } from './Controls'
import { default as Cube } from './Cube'
import useStyles from './styles'



const Model = (props) => {
    const [rotate, setRotate] = useState(true)
    const classes = useStyles()

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
            gl={{ antialias: false }}
            pixelRatio={window.devicePixelRatio}>
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