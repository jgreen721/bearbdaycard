import React, {useRef, useLayoutEffect} from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from "gsap";


const Model = () => {
    const img = useGLTF("birthday_cake.glb")
    const cakeRef = useRef()
    const tl = useRef();
    const scroll = useScroll();

    useFrame(()=>{
        tl.current.seek(scroll.offset * tl.current.duration())

        console.log(scroll.offset * tl.current.duration())

    })

    useLayoutEffect(()=>{
        tl.current = gsap.timeline({defaults:{duration:4, ease:"EaseIn"}})

        // tl.current.to(cakeRef.current.position,{x:2,duration:2},.1)
        // tl.current.to(cakeRef.current.rotation,{y:3,duration:1},.1)


        // tl.current.to(cakeRef.current.position,{x:-2,duration:2},.3)
        // tl.current.to(cakeRef.current.rotation,{y:3,duration:2},.3)


        // tl.current.to(cakeRef.current.position,{x:2,duration:2},.6)
        // tl.current.to(cakeRef.current.rotation,{y:3,duration:2},.6)


        tl.current.to(cakeRef.current.position,{x:1,z:-1,duration:2},1)
        tl.current.to(cakeRef.current.rotation,{y:-4,x:2,duration:1.5},1)


        tl.current.to(cakeRef.current.position,{x:-1.5,z:2,duration:2},3)
        tl.current.to(cakeRef.current.rotation,{y:2,x:1,duration:.5},3)

        tl.current.to(cakeRef.current.position,{x:1.5,z:1,duration:2},6)
        tl.current.to(cakeRef.current.rotation,{y:-2,z:0,duration:1.5},6)

        tl.current.to(cakeRef.current.position,{x:-1.5,z:-1,duration:2},10)
        tl.current.to(cakeRef.current.rotation,{y:2,z:0,x:1,duration:.5},10)

        tl.current.to(cakeRef.current.position,{x:-1.25,z:1,y:-2,duration:2},14)
        tl.current.to(cakeRef.current.rotation,{y:2,x:0,duration:.5},14)

    })
  return (
      
    <group ref={cakeRef}>
        <primitive scale={.012} object={img.scene}/>
    </group>
  )
}

export default Model