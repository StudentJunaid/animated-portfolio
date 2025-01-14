import React, { useEffect, useState } from 'react'
import './Cursor.css'
import {motion} from 'framer-motion'
function Cursor() {
    const [position,setPosition] = useState({x:0,y:0})

    useEffect(() => {
     const moveMouse = (e) =>{
        setPosition({x: e.clientX,y: e.clientY})
     }

     window.addEventListener("mousemove",moveMouse)

     return () =>{
     window.removeEventListener("mousemove",moveMouse)
     }
    }, [])
    
  return (
    <motion.div className='Cursor' animate={{x: position.x+10, y:position.y+10}}></motion.div>
  )
}

export default Cursor