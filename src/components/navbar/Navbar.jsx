import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import { motion } from "framer-motion";

const Navbar=()=>{
    return (
        <div className="navbar">
            {/* sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span
                 initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}} 
                transition={{duration:0.5}}
                >
                    Puja Singh
                    </motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/puja-singh5/"><img src="/linkedin.png" alt="linkedin"
                         /></a>
                    <a href="https://github.com/pujaSingh05"><img src="/github (1).png" alt="github"/></a>
                    <a href="https://leetcode.com/Puja__Singh/"><img src="/code.png" alt="leetcode"/></a>
                    <a href="https://twitter.com/Puja_Singh_5"><img src="/twitter (1).png" alt="twitter"/></a>
                </div>

            </div>
        </div>
    )

}

export default Navbar;