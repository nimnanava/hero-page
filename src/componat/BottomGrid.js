import BottomBox from "./BottomBox"
import { animate, delay, motion, stagger } from "framer-motion";

const ContainerVeriayns ={

  animate : {
    transition : {
      delayChildren : 3.5,
      staggerChildren :0.4
    }
  },
}

const BottomGrid = ()=>{
  return(
    <motion.div
    initial ="initial"
    animate ="animate"
    variants={ContainerVeriayns}
    className="grid grid-cols-3 gap-4 absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-screen-lg mx-auto z-30 h-[10vh]">
   
   <BottomBox>
      Best deals this christmas
    
     </BottomBox>

     <BottomBox>
      Best deals this christmas
    
     </BottomBox>

     <BottomBox>
      Best deals this christmas
    
     </BottomBox>

   
    
    </motion.div>
  )
}

export default BottomGrid;