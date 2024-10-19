import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
function App() {
  let boxRef = useRef();
 useGSAP(() => {
  gsap.to(boxRef.current,{
    x : 1000,
    duration : 3,
    delay : 0.5,
    rotate : 1080
  })
 })
  return (
    <main>
      
      <div ref={boxRef} className="box">

      </div>
    </main>
  )
}

export default App