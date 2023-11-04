import Contact from "../contact/Contact";
import Portfolio from "../portfolio/Portfolio";
import "./hero.scss";
import {animate, motion} from "framer-motion";

const textVariants ={
    initial:{
        x:-500,
        opacity: 0,
  },
  animate:{
    x:0,
    opacity: 1,
    transition: {
        duration:1, 
        staggerChildren: 0.1,
    },
},

scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

function portf () {
    window.location="../portfolio/Portfolio"
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2  variants={textVariants}>Hi I'm Puja Singh</motion.h2 >
                <motion.h1   variants={textVariants}>A Information Technology student 
                passionate about programming and  Development.</motion.h1>
                <motion.div  variants={textVariants} className="buttons">
                    <motion.button  onClick="portf()" variants={textVariants}>Projects</motion.button >
                    <motion.button  id="Contact" type="Contact" variants={textVariants}>Contact Me</motion.button >
                </motion.div>
                <motion.img  variants={textVariants}  src="/scroll.png" alt="" height="35px" width="35px"/>
            </motion.div>
            </div>
            <div className="slidingTextContainer">
            </div>
            <div className="imageContainer">
                <img src="/hero.jpeg" alt=""/>
            </div>
        </div>
    );
};

export default Hero;