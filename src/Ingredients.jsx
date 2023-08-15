import {useState} from 'react'
import downArrow from "./assets/down-arrow.svg"
import IngredientsList from "./IngredientsList.jsx"
import GetRecipesButton from './GetRecipesButton.jsx'
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
import leftArrow from "./assets/right-arrow-green.svg"




export default function Ingredients(props) {


  const userIngredients = props.data

  const { direction, variants } = props
  
 

  return (

      <motion.section className="ingredients"
        custom={direction} 
        variants={variants}

        initial="enter"
        animate="center"
        exit="exit"
        transition="transition"
      
      
      >
        <div className="back-home">
          <Link to="/"><button onClick={props.goBack}><img className="left-arrow" src={leftArrow}></img></button></Link>
        </div>
      
        <form className="ingredients-form" onSubmit={props.onAdd}>
            <input type="text"
              name="userInput"
              value={userIngredients.input}
              className="input-field"
              placeholder="spaghetti"
              onChange={props.onChange}
            />
            <button className="plus">+</button>
        </form>

        <IngredientsList
          list={userIngredients.list} 
          onCancel={props.onCancel}
        />

        <GetRecipesButton
          handleSubmit={props.onSubmit}
          hasList={userIngredients.list.length} 

        />

        

      </motion.section>

        
  )
}