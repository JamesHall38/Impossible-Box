import { useRef, useEffect } from 'react'
import { OrbitControls, AdaptiveDpr } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


const Controls = ({ navigate, location, path, rotate }) => {
    const controls = useRef()




    useEffect(() => {
        controls.current.autoRotate = rotate
    }, [rotate])

    const controlsSettings = () => {

        controls.current.maxDistance = 3
        controls.current.minDistance = 3
        controls.current.maxPolarAngle = Math.PI / 2.25
        controls.current.minPolarAngle = Math.PI / 2.25
        controls.current.autoRotateSpeed *= -1
        // controls.current.autoRotate = true
        controls.current.target.set(0, 0.2, 0)
        controls.current.enablePan = false

        if (window.innerWidth > 1.75 * window.innerHeight) {
            controls.current.maxDistance = 2.3
            controls.current.minDistance = 2.3
            controls.current.maxPolarAngle = Math.PI / 2
            controls.current.minPolarAngle = Math.PI / 2
            controls.current.target.set(0, -0.05, 0)
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

        if (window.innerWidth > 1.75 * window.innerHeight) {
            if (camera.position.z <= 0)
                camera.rotation.y += window.innerWidth / window.innerHeight / 7
            else
                camera.rotation.y -= window.innerWidth / window.innerHeight / 7
        }


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

    return (<>
        <OrbitControls ref={controls} />
        <AdaptiveDpr />
    </>
    )
}

export default Controls