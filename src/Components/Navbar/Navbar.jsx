import React from 'react'
import './Navbar.css'
import facebook from '../../../public/facebook.png'
import youtube from '../../../public/youtube.png'
import instagram from '../../../public/instagram.png'
import dribbble from '../../../public/dribbble.png'
import {motion} from 'framer-motion'

function Navbar() {
  return (
    <div className='navbar'>
        {/* sidebar */}
       <div className="wrapper">
        <motion.span
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
        >Junaid Noor</motion.span>
        <div className="social">
            <a href=""><img src={facebook} alt="" /></a>
            <a href=""><img src={youtube} alt="" /></a>
            <a href=""><img src={instagram} alt="" /></a>
            <a href=""><img src={dribbble} alt="" /></a>
        </div>
       </div>
    </div>
  )
}

export default Navbar