import { useRef, useEffect } from 'react'
import { OrbitControls, AdaptiveDpr } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


const Controls = ({ navigate, location, path, rotate }) => {
    const controls = useRef()

    const controlsSettings = () => {

        controls.current.maxDistance = 4
        controls.current.minDistance = 4
        controls.current.maxPolarAngle = Math.PI / 2
        controls.current.minPolarAngle = Math.PI / 2.5
        controls.current.autoRotateSpeed *= -1
        controls.current.target.set(0, 0.3, 0)
        controls.current.enablePan = false

        if (window.innerWidth > 1.75 * window.innerHeight) {
            controls.current.target.set(0, -0.05, 0)
            controls.current.maxDistance = 2.5
            controls.current.minDistance = 2.5
        }
    }

    useEffect(() => {
        controlsSettings()
        const handleResize = () => {
            controlsSettings()
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    useFrame(({ camera }) => {
        const angle = controls.current.getAzimuthalAngle()

        if (angle > Math.PI / 4 && angle < 3 * Math.PI / 4) {
            if (location.pathname !== '/Sushi')
                navigate('/Sushi')
        }
        else if (angle > 3 * Math.PI / 4 || angle < -3 * Math.PI / 4) {
            if (location.pathname !== '/Maze')
                navigate('/Maze')
        }
        else if (angle > -3 * Math.PI / 4 && angle < -Math.PI / 4) {
            if (location.pathname !== '/Contact')
                navigate('/Contact')
        }
        else {
            if (location.pathname !== '/')
                navigate('/')
        }

    })

    useEffect(() => {
        if (path === '/Sushi')
            controls.current.setAzimuthalAngle(Math.PI / 2)
        else if (path === '/Maze')
            controls.current.setAzimuthalAngle(Math.PI)
        else if (path === '/Contact')
            controls.current.setAzimuthalAngle(3 * Math.PI / 2)
        else
            controls.current.setAzimuthalAngle(0)

        controls.current.autoRotate = false
    }, [path])

    useEffect(() => {
        controls.current.autoRotate = rotate
    }, [rotate])

    return (<>
        <OrbitControls ref={controls} />
        <AdaptiveDpr />
    </>
    )
}

export default Controls