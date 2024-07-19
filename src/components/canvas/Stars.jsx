import { Canvas ,useFrame} from "@react-three/fiber"
import {useState,useRef,Suspense} from 'react'
import { Points,PointMaterial,Preload } from "@react-three/drei"
import * as random from 'maath/random/dist/maath-random.esm'
import { div } from "three/examples/jsm/nodes/Nodes.js"
import { Group } from "three/examples/jsm/libs/tween.module.js"


const Stars = (props) => {
const ref=useRef();

// 5000 particles of size 1.2 radius is created this way

const sphere=random.inSphere(new Float32Array(5000),{random :1.2});

// hr frame drop pe change krega useFrame

// delta in the useFrame hook refers to the time in seconds since the last frame update.

// state in the useFrame hook refers to the current state of the component being rendered by the hook

useFrame((state,delta)=>{
  ref.current.rotation.x-=delta/10;
  ref.current.rotation.y-=delta/15;
})

  return (
   <group 
   rotation={[0,0,Math.PI/4]}
   >
<Points ref={ref} positions={sphere}
frustumCulled 
{...props}
stride={3}
>
<PointMaterial
color='#f272c8'
transparent
size={0.002}
sizeAttenuation={true}
depthWrite={false}

/>

</Points>


   </group>
  )
}

const StarsCanvas=()=>{

  return(
    <div className="w-full h-auto absolute inset-0 z-[-1]">

<Canvas

camera={{position:[0,0,1]}}

>

<Suspense fallback={null}>

<Stars />

</Suspense>
<Preload all />
</Canvas>

    </div>
  )



}



export default StarsCanvas