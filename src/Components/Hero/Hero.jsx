import React from 'react'
import './Hero.css'
import {motion} from 'framer-motion'
const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
const sliderVariants = {
    initial: {
        x: 0,
      },
      animate: {
        x: "-220%",
        transition: {
          repeat: Infinity,
          repeatType:"mirror",
          duration: 20,
        },
      },
  };



function Hero() {
  return (
    <div className='hero'>
       <div className="wrepper">
        <motion.div variants={textVariants} initial="initial" animate="animate" className="herotext">
            <motion.h2 variants={textVariants}>Junaid Noor</motion.h2>
            <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
            <motion.div variants={textVariants} className="buttons">
                <motion.button variants={textVariants}  >See the latest work</motion.button>
                <motion.button variants={textVariants}   className='gap'>Contact me</motion.button>
            </motion.div>
            <img variants={textVariants} animate="scrollbutton" src="./scroll.png" alt="" />
        </motion.div>
        </div>
        <motion.div className='slidingTextContainer' variants={sliderVariants} initial="initial" animate="animate">
            Front-end Developer 
        </motion.div>
        <div className="imageContainer">
           <img src="./hero.png" alt="" />
        </div>
       
    </div>
  )
}

export default Hero