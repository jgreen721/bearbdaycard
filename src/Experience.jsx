import React from 'react'
import { ScrollControls } from '@react-three/drei'
import Overlay from "./Overlay"
import Model from "./Model"

const Experience = () => {
  return (
    <>
    <ScrollControls pages={4} damping={.2}>
    <Overlay/>
    <Model/>
    </ScrollControls>
    </>
  )
}

export default Experience