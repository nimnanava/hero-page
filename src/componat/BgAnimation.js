import {easeInOut, motion} from 'framer-motion'


const BgAnimation= ()=>{
return(<>

<motion.div
  initial={{
    width : 0,
  }}
  animate ={{
    width :'100vw'
  }}
  transition={{
    duration: 1.1,
    ease : easeInOut,
    delay: 0.2
  }}

className="absolute top-0 left-0 z-0 h-screen bg-gradient-to-b from-gray-200 to-gray-400"></motion.div>

<motion.div 
  initial={{
    width : 0,
  }}
  animate ={{
    width :'90vw'
  }}
  transition={{
    duration: 1,
    ease : easeInOut,
    delay: 0.7
  }}


className=' bg-gray-800 border-t-2 border-gray-600 h-[20vh] z-20  absolute left-0  bottom-0'></motion.div>


<motion.div 
  initial={{
    x: "-150vh",
    rotateZ : 20
  }}
  animate ={{
    x : 0
  }}
  transition={{
    duration: 1,
    ease : easeInOut,
    delay: 0.9
  }}


className=' bg-gray-800 h-[170vh] w-[60vw] z-10 absolute -left-[10vw] -top-[15vw]'></motion.div>
</>)}

export default BgAnimation;