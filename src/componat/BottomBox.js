import { motion } from "framer-motion";

const boxVariants ={
  initial : {
    y: 100
   },
   animate : {
    y : 0
   }
}


const BottomBox =(props)=>{
  return(
    <motion.div 
     variants={boxVariants}
 
    
    className="flex items-center justify-center text-base text-center text-gray-200 uppercase bg-gray-500 rounded-t-md underline-offset-4">
      {props.children}
    </motion.div>
  )
}

export default BottomBox;