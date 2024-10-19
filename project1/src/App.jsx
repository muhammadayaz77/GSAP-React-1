import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
function App() {
  useGSAP(() => {
    let lt = gsap.timeline();
    lt.from(".box h1",{
      y : -50,
      delay : 0.3,
      duration : 0.5,
      opacity : 0,
      scale : 0,
    })
    lt.from(".head h3",{
      y : -30,
      delay : 0.3,
      duration : 0.5,
      opacity : 0,
      // scale : 0,
      stagger : 0.5
    })
    lt.from(".hero h1",{
      delay : 0.3,
      duration : 0.5,
      opacity : 0,
      scale : 0,
      stagger : 0.5
    })
  })
  return (
    <main>
     <div className='box'>
      <h1>Muhammad Ayaz</h1>
      <div className='head'>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact Us</h3>
        <h3>Testimonials</h3>
      </div>
     </div>
     <div className='hero'>
          <h1>MUHAMMAD AYAZ</h1>
     </div>
    </main>
  )
}

export default App