import { animate, delay, motion, stagger } from "framer-motion";

const ContainerVeriayns = {
  animate :{
    transition: {
      delayChildren: 2,
      staggerChildren :0.6
    }
  }
}

const imgVarians ={
  initial : {
    opacity :0,
    x:-100,
    y:100,
    rotateZ:20
  },

  animate :(custom)=>( {
    opacity :1,
    x:0,
    y:0,
    rotateZ:custom === 0? -20 : custom ===1? 0 : 20,
  })
}


const Hero = ()=>{
  return(
    <div className="grid w-full grid-cols-3 mx-auto max-w-srceen-lg">
      <div className="z-10 text-left col-span-2 flex gap-3 relative flex-col p-[21vh]">
        <motion.div
         initial={{opacity: 0}}
         animate ={{opacity:1}}
         transition={{delay: 1.5}}
        
        
        className="w-full">
          <h1 className="text-5xl tracking-wide text-transparent uppercase bg-clip-text bg-gradient-to-r from-blue-100 to-purple-100">Check Out </h1>
          <h1 className="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-blue-100 to-purple-100">New Collection </h1>
          <p className="py-2 text-base tracking-wide text-gray-400 uppercase ">New deals for christmas for your loved ones</p>
          <button className="py-2  text-white w-[20vw]  px-4 text-md tracking-widest uppercase mt-3 border-white">See More</button>
        </motion.div>
      </div>

      <motion.div variants={ContainerVeriayns} initial='initial' animate="animate" className="relative z-40">

        <motion.img 
        variants={imgVarians}
        custom={0}
        
        src="20527d74087ba8555cf60dd02dec50da.jpg" className="h-[70vh] w-[full] -left-[10vw] -rotate-12 absolute  object-cover z-10" />
        <motion.img
         variants={imgVarians}
         custom={1}
         
         src="images.jpeg" className="h-[70vh] w-[full] -left-[10vw]  absolute  object-cover z-10" />
        <motion.img
        custom={2}
         variants={imgVarians} src="22311d7c29ac366f232e290e013d8ce7.jpg" className="h-[70vh] w-[full] -left-[10vw] rotate-12 absolute  object-cover z-10" />
      </motion.div>
    </div>
  )
}

export default Hero;