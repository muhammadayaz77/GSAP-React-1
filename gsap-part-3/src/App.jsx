import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
function App() {
  useGSAP(() => {
    gsap.from('.page2 h1',{
      x : 500,
      delay : 0.3,
      duration : 1,
      opacity : 0,  
      scrollTrigger : {
        trigger : '.page2 h1',
        scroller : 'body',
        start : "top 50%",
        markers : true,
      }
    })
    gsap.from('.page2 h2',{
      x : -500,
      delay : 0.3,
      duration : 1,
      opacity : 0,  
      scrollTrigger : {
        trigger : '.page2 h1',
        scroller : 'body',
        start : "top 50%",
        markers : true,
      }
    })
  })
  return (
    <>
     <div className="page1">
    <div className="box"></div>
   </div>
   <div className="page2">
    <h1>Muhammad Ayaz</h1>
    <h2>Be The Best</h2>
   </div>
   <div className="page3">
   <div className="box"></div>
   </div>
    </>
  )
}

export default App