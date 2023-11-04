import { useRef } from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items =[
    {
        id:1,
        title:"E- Commerce",
        img:"https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente praesentium nulla reiciendis excepturi modi a beatae, vel autem aliquid,"
    },
    {
        id:2,
        title:"Portfolio",
        img:"https://images.pexels.com/photos/14936127/pexels-photo-14936127.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente praesentium nulla reiciendis excepturi modi a beatae, vel autem aliquid,"
    },
    {
        id:3,
        title:"Miwok Translation",
        img:"https://images.pexels.com/photos/4475526/pexels-photo-4475526.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente praesentium nulla reiciendis excepturi modi a beatae, vel autem aliquid,"
    },

];

const Single = ({item}) =>{

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
      });
      const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

      return (
        <section >
          <div className="container">
            <div className="wrapper">
              <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
              </div>
              <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>Github Link</button>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };
    
    const Portfolio = () => {
      const ref = useRef();
    
      const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
      });
    
      const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
      });
    
      return (
        <div className="portfolio" ref={ref}>
          <div className="progress">
            <h1>Projects</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
          </div>
          {items.map((item) => (
            <Single item={item} key={item.id} />
          ))}
        </div>
      );
    };
    
    export default Portfolio;