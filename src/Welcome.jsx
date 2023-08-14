import React from "react"
import {Link} from "react-router-dom"
import { motion } from "framer-motion";


export default function(props){

  const direction = props.direction

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    transition: 0.3
  }
  
    return(

        <motion.section className="welcome"
          custom={direction} 
          variants={variants}

          initial="enter"
          animate="center"
          exit="exit"
          transition="transition"
        
        
        >
          <h2 className="tagline">Let us know what ingredients you've got, and we'll take it from there.</h2>
          <div className="button-container">
          <Link to="/ingredients"><button className="get-started" onClick={props.getStarted}>Get Started</button></Link>
          </div>
        </motion.section>
    )
}