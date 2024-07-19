import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import {services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'




const ServiceCard=({index,title,icon})=>{

return (
  <Tilt className='xs:w-[250px] w-full '>
<motion.div
// right se aayega delay 0.5*index 
// type spring 
variants={fadeIn("right","spring",0.5*index,0.75 )}
className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
>
  {/* tilt options provided to cart  */}
<div options={{
  max:45,scale:1,speed:450
}}
className='bg-tertiary rounded-20px px-12 py-5 min-h-[280px]
flex justify-evenly items-center flex-col '
>

<img src={icon} alt="title" className='w-16 h-16 object-contain' />
<h3 className='text-white text-[20px] font-bold text-center '>{title}</h3>
</div>



</motion.div>


  </Tilt>
)


}











const About = () => {
  return (
   <>
   <motion.div variants={textVariant()}>

<p className={styles.sectionSubText}>Introduction</p>
<h2 className={styles.sectionHeadText}>Overview.</h2>

   </motion.div>
   <motion.p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' variants={fadeIn("","",0.1,1)}>
   I'm an enthusiastic software developer and a student of Computer Science at NIT Jamshedpur, continuously learning JavaScript, React, Node.js, and the MERN stack. I'm also expanding my knowledge by exploring new technologies like Three.js. I'm a quick learner who enjoys collaborating closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
   </motion.p>
   <div className='flex mt-20 flex-wrap gap-10 '>
{services.map((service,index)=>(

<ServiceCard key={service.title} index={index} {...service}/>


))}
{/* to display cards  */}

   </div>
   </>
  )
}

// allof the section will be wrapped in this high order component 

export default SectionWrapper(About,"about");