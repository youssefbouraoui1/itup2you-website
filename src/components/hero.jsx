import { motion } from "framer-motion";
import styles from '../styles';
import {CloudCanvas} from './canvas'

const Hero = () => {
  return (
    <section className="hero-section mx-auto vh-100 " id="hero">
        <div
        className={`container mx-auto ${styles.paddingX} dflex flex-row align-items-start`}
        style={{position:'absolute',top:'120px',left:'0',right:'0',display:'flex',maxWidth: '1280px',marginLeft:'auto',marginRight:'auto',flexDirection:'row',alignItems:'flex-start',gap:'20px'}}
      >
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <div  style={{width:'20px',height:'20px',borderRadius:'50%',backgroundColor:'#915EFF'}} />
          <div className='custom-line' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome To <span style={{color:'#915EFF'}}>ITUP2YOU</span> Website
          </h1>
          <p className={`${styles.heroSubText} mt-2 `} style={{color:'white'}}>
            We provide you with latest updates in the IT domain. <br className='d-none d-sm-block' />
            We offer you a range of services that you can explore in our website.
          </p>
        </div>
      </div>
      {/*<CloudCanvas />

      <div className='position-absolute w-100 d-flex justify-content-center align-items-center bottom-xs-10' style={{position:'absolute', bottom: '128px' }}>
        <a href='#about'>
          <div className='border border-4 border-secondary d-flex justify-content-center align-items-start p-2' style={{width:'34px',height:'64px',borderRadius:'1.5rem'}}>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="custom-circle bg-secondary mb-1"
            />
          </div>
        </a>
      </div>*/}
    </section>
  )
}

export default Hero;