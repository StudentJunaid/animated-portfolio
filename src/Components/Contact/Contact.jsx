import React from './Contact.css'
import emailjs from '@emailjs/browser';
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

    const formref = useRef()
    
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_gdok5ii', 'template_8s0f333', form.current, {
            publicKey: 'GQIq2OhB9bCNJ6hTD',
          })
          .then(
            () => {
                setSuccess(true)
                console.log('SUCCESS!');
            },
            (error) => {
                setError(true)
              console.log('FAILED...', error.text);
            },
          );
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
                className='form'
                ref={formref}
                onSubmit={sendEmail}> 
                    <input type="text" required placeholder='Name' name='name' />
                    <input type="email" required placeholder='Email' name='email' />
                    <textarea rows="10" name='message' placeholder='Message' />
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact