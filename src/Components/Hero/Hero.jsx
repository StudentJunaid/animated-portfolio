import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
       <div className="wrepper">
        <div className="herotext">
            <h2>HERVY TYLER</h2>
            <h1>Web developer and UI designer</h1>
            <div className="buttons">
                <button>See the latest work</button>
                <button className='gap'>Contact me</button>
            </div>
            <img src="./scroll.png" alt="" />
        </div>
        </div>
        <div className='slidingTextContainer'>
            Writer Contant Creater Influincer
        </div>
        <div className="imageContainer">
           <img src="./hero.png" alt="" />
        </div>
       
    </div>
  )
}

export default Hero