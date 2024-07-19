import { useState,useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { styles } from "../styles"
import {EarthCanvas} from './canvas'
import { SectionWrapper } from "../hoc"
import { fadeIn, slideIn } from "../utils/motion"
import { div } from "three/examples/jsm/nodes/Nodes.js"
import { toast } from "react-toastify"




const Contact = () => {
  const formRef=useRef();
  const [form,setForm]=useState({
    name:'',
    email:'',
    message:'',
  });

  const [loading,setLoading]=useState(false);

  const handleChange=(e)=>{

    let name=e.target.name;
    let value=e.target.value;

    setForm({
      ...form,
      [name]:value,
    })


  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    setLoading(true);


    // template_00f6kii
// service_vi2ips5
// HLS3lsBLAjNMzOivb

    emailjs.send('service_vi2ips5',
      'template_00f6kii',
      {
from_name:form.name,
to_name:'PriyaRaj',
from_email:form.email,
to_email:'satyamtiwari87090@gmail.com',
message:form.message


      },
      'HLS3lsBLAjNMzOivb'
    )
    .then(()=>{
setLoading(false)
toast.success('Thank You I will Get Back To You As Soon As Possible')

setForm({  name:'',
  email:'',
  message:'',});

    }),(error)=>{

    setLoading(false);
    console.log(error);

    toast.error('Something Went Wrong')

  }
}

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">

<motion.div
variants={slideIn("left","tween",0.2,1)}
className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
>

<p className={styles.sectionSubText}>Get in Touch</p>
<h3 className={styles.sectionHeadText}>Contact.</h3>

<form ref={formRef} onSubmit={handleSubmit}
className="mt-12 flex flex-col gap-8"
>

<label className="flex flex-col" htmlFor="">
  <span className="text-white font-medium mb-10">Your Name</span>
</label>
<input type="text" name='name' value={form.name} onChange={handleChange} placeholder="What's your name"
className="bg-tertiary py-4 px-6 placeholder-text-secondary text-white rounded-lg outlined-none border-name "/>

<label className="flex flex-col" htmlFor="">
  <span className="text-white font-medium mb-10">Your Email</span>
</label>
<input type="email" name='email' value={form.email} onChange={handleChange} placeholder="What's your email"
className="bg-tertiary py-4 px-6 placeholder-text-secondary text-white rounded-lg outlined-none border-name "/>

<label className="flex flex-col" htmlFor="">
  <span className="text-white font-medium mb-10">Your Message</span>
</label>
<textarea rows="7" type="text" name='message' value={form.message} onChange={handleChange} placeholder="What Do you Want To Say"
className="bg-tertiary py-4 px-6 placeholder-text-secondary text-white rounded-lg outlined-none border-name "/>

<button className="bg-tertiary py-3 px-8 outline=none w-fit text-white font-bold shadow-md sgadow-primary rounded-xl" type="submit" >{loading? `Sending..` : `Send`}</button>

</form>


</motion.div>

<motion.div
variants={slideIn("right","tween",0.2,1)}
className="xl:flex-1 xl:h-auto md-h-[550px] h-[350px]"
>

<EarthCanvas />

</motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,"contact");