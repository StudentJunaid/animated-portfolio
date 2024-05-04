import React, { useRef } from 'react'
import project1 from '../../../public/project1.png'
import project2 from '../../../public/project2.png'
import project3 from '../../../public/project3.png'
import project4 from '../../../public/project4.png'
import './Portfolio.css'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "Html Css Project",
        img: project1,
        desc: "I've included a UI design project in my portfolio website, showcasing my skills in creating visually appealing and user-friendly interfaces. Explore the project's design details to see my proficiency in UI/UX design.",
        href: "https://663341f49a91de8ad309f4ed--superlative-semolina-b52e88.netlify.app/",
        blank: "__blank"
    },
    {
        id: 2,
        title: "Html Css and Vanilla.js Project",
        img: project2,
        desc: "Incorporated the 'Sundown' app showcasing HTML, CSS, and JS proficiency, with improved UI/UX design. Explore its functionalities for a comprehensive view of my skills.",
        href: "https://6633466f6cf4a08c02ccccfe--resilient-kitsune-d2aaa6.netlify.app/",
        blank: "__blank"
    },
    {
        id: 3,
        title: "React.js app",
        img: project3,
        desc: "Educity: A React-based educational platform offering interactive learning experiences. Features include engaging content, progress tracking, and modern UI design.",
        href: "https://6635f886c26282c890e88933--dashing-muffin-c96399.netlify.app/",
        blank: "__blank"
    },
    {
        id: 4,
        title: "React.js with tailwind",
        img: project4,
        desc: "Introducing an innovative AI-powered React app, meticulously crafted with a strong emphasis on intuitive user interface design. Seamlessly blending cutting-edge AI capabilities with a sleek and user-friendly UI, this app delivers an exceptional user experience",
        href: "https://6635ff792788c4ce551f40c4--fluffy-strudel-bf7a2c.netlify.app/",
        blank: "__blank"
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
                    <a href={items.href} target={items.blank}><img src={items.img} alt="" /></a>
                </div>
                <motion.div className="textcontainer" style={{ y }}>
                    <h2>{items.title}</h2>
                    <p>{items.desc}</p>
                   <a href={items.href}  target={items.blank}> <button>See Demo</button></a>
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