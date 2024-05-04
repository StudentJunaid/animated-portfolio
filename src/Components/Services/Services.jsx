import React from 'react'
import './Services.css'
import { motion } from 'framer-motion'

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
}


function Services() {
    return (
        <div className="container">
            <div className='services' variants={variants} initial="initial">
                <motion.div className="textContainer" variants={variants}>
                    <p>i focus on helping your brand grow <br /> and more forword</p>
                    <hr />
                </motion.div>
                <motion.div className="titleContainer" variants={variants}>
                    <div className="title1">
                        <img src="people.webp" alt="" />
                        <h1 ><motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas</h1>
                    </div>
                    <div className="title2">
                        <h1><motion.b whileHover={{ color: "orange" }}>For Your </motion.b> Business</h1>
                        <button>What we do?</button>
                    </div>
                </motion.div>
                <motion.div className="cardContainer" variants={variants}>
                    <motion.div className="card" whileHover={{ backgroundColor: "lightgrey", color: "black" }}>
                        <h1> Interactive User Interface</h1>
                        <p>Enhance user engagement with dynamic interfaces.Technologies Used: HTML, CSS, JavaScript React.</p>
                        <button>Go</button>
                    </motion.div>
                    <motion.div className="card" id='second' whileHover={{ backgroundColor: "lightgrey", color: "black" }}>
                        <h1>Responsive Design Solution</h1>
                        <p>Ensure optimal viewing experience across devices.
                            Technologies Used: CSS media queries, responsive frameworks (Bootstrap,taileind).</p>
                        <button>Go</button>
                    </motion.div>
                    <motion.div className="card" id='lastCard' whileHover={{ backgroundColor: "lightgrey", color: "black" }}>
                        <h1> Accessibility Enhancement</h1>
                        <p> Ensure inclusivity with accessible web design.
                            Technologies Used: Semantic HTML, ARIA attributes.
                            Enhanced accessibility led to positive user feedback.</p>
                        <button>Go</button>
                    </motion.div>
                  
                </motion.div>
            </div>
        </div>
    )
}

export default Services