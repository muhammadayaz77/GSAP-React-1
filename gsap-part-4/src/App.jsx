import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

function App() {
  useGSAP(() => {
    gsap.from('.box .a',{
      y : 30,
      delay : 0.3,
      duration : 0.5, 
    stagger : 0.15,
    opacity : 0
    })
    gsap.from('.box .b',{
      y : 30,
      delay : 0.3,
      duration : 0.5, 
    stagger : -0.15,
    opacity : 0
    })
  })
  return (
    <div>
      <main>
        <div className='box'>
        <h1>
          <span className='a'>M</span>
          <span className='a'>u</span>
          <span className='a'>h</span>
          <span className='a'>a</span>
          <span className='a'>m</span>
          <span className='a'>m</span>
          <span className='a'>a</span>
          <span className='a'>d</span>
          <span className='b'>A</span>
          <span className='b'>y</span>
          <span className='b'>a</span>
          <span className='b'>z</span>
          
          </h1>
        </div>
      </main>
    </div>
  )
}

export default App