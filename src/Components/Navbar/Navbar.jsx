import React from 'react'
import './Navbar.css'
import linkedin from '../../../public/linkedin.png'
import facebook from '../../../public/facebook.png'
import instagram from '../../../public/instagram.png'
import github from '../../../public/github.png'
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
            <a href="https://github.com/StudentJunaid" target='__blank'><img src={github} alt="github" /></a>
            <a href="https://www.linkedin.com/in/junaid-noor-65a91627b/" target='__blank'><img src={linkedin} alt="linkedin" /></a>
            <a href="https://www.facebook.com/profile.php?id=100067578194664" target='__blank'><img src={facebook} alt="facebook" /></a>
            <a href="https://www.instagram.com/opjerry1/" target='__blank'><img src={instagram} alt="instagram" /></a>
        </div>
       </div>
    </div>
  )
}

export default Navbar