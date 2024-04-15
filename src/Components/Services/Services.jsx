import React from 'react'
import './Services.css'
import {motion} from 'framer-motion'

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate:{
        x: 0,
        y: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },
}


function Services() {
  return (
   <div className="container">
     <div className='services'  variants={variants} initial="initial">
        <motion.div className="textContainer" variants={variants}> 
            <p>i focus on helping your brand grow <br /> and more forword</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title1">
          <img src="people.webp" alt="" />
            <h1 ><motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas</h1>
          </div>
          <div className="title2">
            <h1><motion.b whileHover={{color: "orange"}}>For Your </motion.b> Business</h1>
            <button>What we do?</button>
          </div>
        </motion.div> 
        <motion.div className="cardContainer" variants={variants}>
            <motion.div className="card" whileHover={{backgroundColor : "lightgrey" , color: "black"}}>
                <h1>Branding</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga illo accusamus quia omnis ducimus reiciendis quis. Voluptatibus veniam praesentium assumenda.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="card" whileHover={{backgroundColor : "lightgrey" , color: "black"}}>
                <h1>Branding</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga illo accusamus quia omnis ducimus reiciendis quis. Voluptatibus veniam praesentium assumenda.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="card" whileHover={{backgroundColor : "lightgrey" , color: "black"}}>
                <h1>Branding</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga illo accusamus quia omnis ducimus reiciendis quis. Voluptatibus veniam praesentium assumenda.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="card" whileHover={{backgroundColor : "lightgrey" , color: "black"}}>
                <h1>Branding</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga illo accusamus quia omnis ducimus reiciendis quis. Voluptatibus veniam praesentium assumenda.</p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </div>
   </div>
  )
}

export default Services