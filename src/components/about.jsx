import React from 'react';
import { motion } from "framer-motion";
import styles from '../styles';
import { Tilt } from 'react-tilt';
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../highOrderComponent';
import {services} from '../constants'


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='card-width w-100' >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-100 rounded shadow'
      style={{
        width:'100%',
        background: 'linear-gradient(to right, green, pink)', 
        padding: '1px', 
        borderRadius: '20px', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='d-flex justify-content-evenly align-items-center flex-column py-5 px-4'
        style={{background:'#151030',borderRadius: '10px', minHeight: '280px'}}
      >
        <img
          src={icon}
          alt='web-development'
          className="img-fluid" 
          style={{ width: '4rem', height: '4rem', objectFit: 'contain' }} 
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
       <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText} style={{color:'#aaa6c3'}}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
          <h1 style={{color:'black'}}>About Us</h1>
          <button style={{background:'none',border:'none'}}><p></p></button>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 fs-5" style={{ maxWidth: '768px', lineHeight: '30px',color:'#aaa6c3' }} >
      IT up2you  Sarl  , is a company specialized in information technology and cloud computing  . It was founded by Yassir EL ghazy
           At IT up2you we believe that true cloud services can change companies and people lives for the better. Bringing all the innovation that cloud computing provides to our customers in real, consistent and effective ways.
           We want to help companies transition to the cloud and most importantly, help them be part of the cloud, not only be in it. And we achieve this through our technology and innovation that has been and always will be at the core of our values.
      </motion.p>

      <div  style={{display:'flex',gap: '20px'}}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about");