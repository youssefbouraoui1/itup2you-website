import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import styles from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../highOrderComponent";
import { formations } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const FormationCard = ({
  index,
  name,
  description,
  tags,
  image,
  url,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='formation-card p-4 rounded w-100'
      >
        <div className='w-100' style={{position:'relative',height:'230px'}}>
          <img
            src={image}
            alt='project_image'
            className="img-fluid"
            style={{width:'100%',height:'100%',objectFit: 'cover', borderRadius: '1rem'}}
          />

          <div tyle={{position:'absolute',inset:0}} className='d-flex justify-content-end m-3 card-img-hover' s>
            <div
              onClick={() => window.open(url)}
              className='github-image'
            >
             <p style={{text:'white',fontWeight: 'bold',margin:0}}>GO</p>
            </div>
          </div>
        </div>

        <div className='mt-4'>
          <h3 style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}>{name}</h3>
          <p style={{ marginTop: '8px', color: '#aaa6c3', fontSize: '14px' }}>{description}</p>
        </div>

        <div style={{marginTop: '16px',display: 'flex',flexWrap: 'wrap',gap: '8px'}}>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              style={{fontSize: '14px',background:tag.color,WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',}}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Formations = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Our Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Courses</h2>
      </motion.div>

      <div style={{width:'100%',display:'flex'}}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following courses showcase just a part of the extensive range of offerings available, not only in the cloud domain but across various other fields as well. Whether you're looking to specialize in cloud computing, software development, or IT infrastructure, we provide comprehensive courses tailored to your needs.
        </motion.p>
      </div>

      <div style={{marginTop: '80px',display: 'flex',flexWrap: 'wrap',gap: '28px'}}>
        {formations.map((formation, index) => (
          <FormationCard key={`formation-${index}`} index={index} {...formation} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Formations, "formations");