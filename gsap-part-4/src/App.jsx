import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Page2 from './Page2'
function App() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from('main .box',{
      rotate : 1440,
      duration : 2,
      
    })
    gsap.from('#page2 .box',{
      scale : '0',
      duration : 0.5,
      scrollTrigger : {
        trigger : '#page2 .box',
        scroller : 'body',
        markers : true,
        start : 'top 60%'
      }
    })
  })
  return (
    <>
    <main>
     <div className='box'>
1
     </div>
    </main>
    <Page2 />
    <div id="page3">
      <div className="box">3</div>
    </div>
    </>
  )
}

export default App