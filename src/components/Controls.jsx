import { useRef, useEffect } from 'react'
import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'



const Controls = ({ navigate, location, path, rotate }) => {
    const controls = useRef()

    useEffect(() => {
        controls.current.autoRotate = rotate
    }, [rotate])

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
        controls.current.maxDistance = 2
        controls.current.minDistance = 1
        controls.current.maxPolarAngle = 3.01 * Math.PI / 6
        controls.current.minPolarAngle = 2.99 * Math.PI / 6
        controls.current.autoRotate = true
        controls.current.autoRotateSpeed *= -1
    }, [])

    useFrame(({ camera }) => {
        controls.current.target.set(0, (Math.sqrt((camera.position.x ** 2) + (camera.position.z ** 2)) - .8) * 0.48 - 0.24, 0)
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
    return <OrbitControls ref={controls} />
}

export default Controls