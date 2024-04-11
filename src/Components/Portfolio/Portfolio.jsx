import React, { useRef } from 'react'
import './Portfolio.css'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "React app",
        img: "https://media.istockphoto.com/id/1092964832/photo/global-communication-network-concept.webp?b=1&s=170667a&w=0&k=20&c=l5YG9IivJHBuTsumnJVx936XQwSZkH_P313gssjj8jA=",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum molestiae, vel quo possimus esse quidem impedit in eligendi quae cum?"
    },
    {
        id: 2,
        title: "Next.js app",
        img: "https://media.istockphoto.com/id/1256604392/photo/visual-contents-concept-social-networking-service-streaming-video-communication-network.webp?b=1&s=170667a&w=0&k=20&c=XStnjRsH0VRMgyH2xndFdc8FeroPDnHwjKM9xdivsV0=",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum molestiae, vel quo possimus esse quidem impedit in eligendi quae cum?"
    },
    {
        id: 3,
        title: "Vanilla.js app",
        img: "https://media.istockphoto.com/id/1289323170/photo/visual-contents-concept-social-networking-service-streaming-video-communication-network.jpg?s=612x612&w=0&k=20&c=5tCsSD5HSUIg1VYBeTosaQeQT48Rgc6A0_XtS8N1laU=",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum molestiae, vel quo possimus esse quidem impedit in eligendi quae cum?"
    },
    {
        id: 4,
        title: "Html,css app",
        img: "https://media.istockphoto.com/id/1029147344/photo/video-archives-concept.webp?b=1&s=170667a&w=0&k=20&c=CJJwSMKnEPI_uT1IfXBgKd7O6uldJDP1pyPVbqV4AnE=",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum molestiae, vel quo possimus esse quidem impedit in eligendi quae cum?"
    },
]

const Single = ({ items }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);


    return (<section>
        <div className="container">
            <div className="wrapperr">
                <div className="imgContainer"  ref={ref}>
                    <img src={items.img} alt="" />
                </div>
                <motion.div className="textcontainer" style={{ y }}>
                    <h2>{items.title}</h2>
                    <p>{items.desc}</p>
                    <button>See Demo</button>
                </motion.div>
            </div>
        </div>
    </section>)
}

function Portfolio() {

    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => <Single items={item} key={item.id} />
            )}
        </div>
    )
}

export default Portfolio