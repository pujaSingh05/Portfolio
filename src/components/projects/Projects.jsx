import { useRef } from "react";
import "./projects.scss"
import { motion, useInView} from "framer-motion";

const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };


const Projects = () => {

    const ref = useRef();

    const isInview = useInView(ref,{margin:"-100px"});
    return (
        <motion.div className="projects" 
        variants={variants} 
        initial="initial" 
        // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
        {/* <motion.div className="textContainer"  variants={variants} >
            <p></p>
            <hr/>
        </motion.div> */}
        <motion.div className="titleContainer"  variants={variants} >
           <div className="title">
            {/* <img src="/people.webp" alt="" /> */}
            {/* <h1>
                <motion.b  whileHover={{color:"orange"}}>Unique</motion.b>Ideas
                                </h1> */}
           </div>
           <div className="title">
            <h1>
                 <motion.b  whileHover={{color:"orange"}}>More about me</motion.b>
                 <hr/>
                                </h1>
           </div>
        </motion.div>
        <motion.div className="listContainer"  variants={variants} >
            <motion.div className="box" whileHover={{background:"lightgray", color : "black"}}>
                <h4>Clean & Efficient Work</h4>
                <p>
                I have good problem solving skills.
                </p>
                {/* <button>LINK</button> */}
            </motion.div>
            <motion.div className="box"whileHover={{background:"lightgray", color : "black"}}>
                <h4>Web Development</h4>
                <p>
                I have decent knowledge about web development both back-end and front-end.
                </p>
                {/* <button>LINK</button> */}
            </motion.div>
            <motion.div className="box"whileHover={{background:"lightgray", color : "black"}}>
                <h4>Branding</h4>
                <p>
                I have decent knowledge about web development both back-end and front-end.
                </p>
                {/* <button>LINK</button> */}
            </motion.div>
        </motion.div>
        </motion.div>

    );
;}

export default Projects;