import React from './Contact.css'
import {motion} from 'framer-motion'
import { useRef, useState } from 'react';
const variants ={
    initial:{
        y:500,
        opacity: 0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
             staggerChildren:0.1
        }
    }
}



function Contact() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "128105e4-6e72-4a5c-bb27-3c98d02f7c90");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
        <motion.div className='Contact' variants={variants} initial="initial" animate="animate">
            <motion.div variants={variants} className="text">
                <motion.h1 variants={variants}>Let,s work together</motion.h1>
                <motion.div variants={variants} className="item">
                    <h2>Mail</h2>
                    <span>Junaidkhan97991@gmail.com</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Adress</h2>
                    <span>Junaidkhan97991@gmail.com</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Phone</h2>
                    <span>+92 3453872819</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
          
                <motion.form
                onSubmit={onSubmit}
                className='form'> 
                    <input type="text" required placeholder='Name' name='name' />
                    <input type="email" required placeholder='Email' name='email' />
                    <textarea rows="10" name='message' placeholder='Message' />
                    <button>Submit</button>
                </motion.form>
                <span>{result}</span>
            </div>
        </motion.div>
    )
}

export default Contact