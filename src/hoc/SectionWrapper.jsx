import {motion} from 'framer-motion'
import {styles} from '../styles'
import {staggerContainer} from '../utils/motion'

// high order component that will have other components inside it 
// left me sbka space (margin same rhe )
const SectionWrapper = (Component,idName) => 
function HOC() {

return (
  <motion.section
  
variants={staggerContainer()}
initial="hidden"
// jb hm wha phuche 
whileInView="show"
// pehli bar view krne me 
viewport={{once:true,amount:0.25}}
className={`${styles.padding} mx-auto relative z-0 `}
  >

{/* actual component  */}
<Component/>

<span className='hash-span' id={idName}>

{/* invisible span hai dikh nhi rha  */}

&nbsp;

</span>

  </motion.section>
)


}





export default SectionWrapper
