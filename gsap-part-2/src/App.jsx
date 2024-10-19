import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
function App() {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.to(".box1",{
      x : 1000,
      borderRadius : "50%",
      duration : 1,
      delay : 1,
    })
    tl.to(".box2",{
      x : 1000,
      borderRadius : "50%",
      duration : 1,
    })
    tl.to(".box3",{
      x : 1000,
      borderRadius : "50%",
      duration : 1,
      delay : 0.5,

    })
  })
  return (
    <main>
     <div className='box1'>
      
     </div>
     <div className='box2'>
      
     </div>
     <div className='box3'>
      
     </div>
    </main>
  )
}

export default App