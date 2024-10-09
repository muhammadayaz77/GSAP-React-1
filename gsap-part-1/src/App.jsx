import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
function App() {
  let gsapRef = useRef();
  let random = gsap.utils.random(-300,300,50);
  let [circle,setCircle] = useState(0);
  useGSAP(() => {
    gsap.to(gsapRef.current,{
      x:circle,
      duration : 1.5,
      
    })

  },[circle])
  return (
    <main>
      <button style={{color:'black'}} onClick={() =>{
        setCircle(random);
        console.log(random)
      }}>Animation</button>
      <div ref={gsapRef} className="box">

      </div>
    </main>
  )
}

export default App