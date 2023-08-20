import React, {useRef, useState,useLayoutEffect} from 'react'
import {Scroll, useScroll} from "@react-three/drei"
import { useFrame } from '@react-three/fiber';
import gsap from "gsap";


const Section = (props)=>{


    return (
    <div className ={`${props.className} section-parent`}
         style={{opacity:props.opacity}}>
       {props.children}
    </div>
    )
}

const Overlay = () => {
    const tl = useRef();
    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(0)
    const [opacitySecondSection, setOpacitySecondSection] = useState(0)
    const [opacityThirdSection, setOpacityThirdSection] = useState(0)
    const [opacityFourthSection, setOpacityFourthSection] = useState(0)
    


    useFrame(()=>{
        tl.current.seek(scroll.offset * tl.current.duration())
        
        setOpacityFirstSection(1 - scroll.range(0, 1 / 4));
        setOpacitySecondSection(scroll.curve(1 / 4, 1 / 4));
        setOpacityThirdSection(scroll.range(2 / 4, 1 / 4));
        setOpacityFourthSection(scroll.range(3 / 4, 1 / 4));

        // console.log(scroll.range(0,1))
        // console.log(scroll.range(2/3,1/4))
        // console.log(scroll.curve(0,1))

        // console.log(scroll.offset * tl.current.duration())
    })

    useLayoutEffect(()=>{
        tl.current = gsap.timeline({defaults:{duration:4}})
        // tl.current.from(firstSection.current,{opacity:0},.1)
    })
  return (
    <Scroll html>
<Section opacity={opacityFirstSection} className="start">
   <div className="section-content-card">
       <h1 className="header-h1">Picture</h1>
       <h1 className="header-h1">This..</h1>
   </div>
</Section>
<Section opacity={opacitySecondSection} className="end">
<div className="section-content-card">
       <h1 className="header-h1">Driving</h1>
       <h1 className="header-h1">Around..</h1>
   </div>

</Section>

<Section opacity={opacityThirdSection} className="start">
<div className="section-content-card">
       <h1 className="header-h1">The waves came</h1>
       <h1 className="header-h1">and hit me</h1>
   </div>
</Section>

<Section opacity={opacityFourthSection} className="center">
<div className="section-content-card">
       <h1 className="header-h1">BIRTH</h1>
   </div>
</Section>

    </Scroll>
  )
}

export default Overlay