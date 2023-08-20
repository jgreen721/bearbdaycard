import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from "./Experience"
import './App.css'

function App() {

  return (
    <div style={{height:'100vh'}} className="app">
      <Canvas>
        <color attach="background" args={["black"]}/>
        <Experience/>
      </Canvas>
    </div>
  )
}

export default App
