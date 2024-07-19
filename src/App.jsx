import { BrowserRouter ,Routes,Route } from "react-router-dom"
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from "./components"


// stars canvas is canvas me stars .jsx

const  App=()=> {


  return (
  <BrowserRouter>
  
<div className="relative z-0 bg-primary">

<div className="bg-hero-pattern bg-cover bg-no-repeat bg-centre">


<Navbar />

<Hero />

</div>

<About />
<Experience />
<Tech/>
<Works />
<Feedbacks />

<div className="relative z-0 ">
{/* to display stars here  */}
<Contact/>
<StarsCanvas/>
</div>
{/* <Routes>
<Route ></Route>
</Routes> */}




</div>



  
  
  
  
  </BrowserRouter>
  )
}

export default App
