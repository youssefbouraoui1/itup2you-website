import React from 'react';
import { useState,useRef } from 'react';
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import styles from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../highOrderComponent";
import { slideIn } from "../utils/motion";


const Contact = () => {

    const formRef = useRef();
    const [form,setForm] = useState({
        name:"",
        email:"",
        message:""
    });

    const [loading,setLoading] = useState(false);

    const handleChange = (e) => {
      const { target } = e;
      const { name, value } = target;
  
      setForm({
        ...form,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "ITUP2YOU",
            from_email: form.email,
            to_email: "bouraouiyoussef7@gmail.com",
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
  
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
  
            alert("Ahh, something went wrong. Please try again.");
          }
        );
    };

  return (
    <div className='contact'>
         <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        style={{background:'#100d25',flex: '0 0 50%',padding:'2rem',borderRadius:'1rem'}}
        
      >
        <p className={styles.sectionSubText} style={{color:'#aaa6c3'}}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{ width:'100%',marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <label style={{display:'flex',flexDirection:'column'}}>
            <span className='text-white fw-medium mb-4"'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              style={{background:'#151030',outline:'none'}}
              className='contactplaceholder text-white border-0 rounded-lg fw-medium placeholder-secondary'
              
            />
          </label>
          <label style={{display:'flex',flexDirection:'column'}}>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              style={{background:'#151030',outline:'none'}}
              className='contactplaceholder placeholder-secondary text-white border-0 rounded fw-medium'
            />
          </label>
          <label style={{display:'flex',flexDirection:'column'}}>
            <span className='text-white fw-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              style={{background:'#151030',outline:'none'}}
              className='contactplaceholder placeholder-secondary text-white border-0 rounded fw-medium'
            />
          </label>

          <button
            type='submit'
            style={{background:'#151030',outline:'none',width:'fit-content',backgroundColor:'#050816',boxShadow:'0 4px 6px -1px rgba(5, 8, 22, 0.5), 0 2px 4px -1px rgba(5, 8, 22, 0.3)'}}
            className='contactFormButton rounded-3 text-white fw-bold shadow'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='earth'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");