import { useState, useEffect} from 'react'
import downArrow from "./assets/down-arrow.svg"
import leftArrow from "./assets/right-arrow.svg"
import placeholder from "./assets/placeholder.jpg"
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
import RecipeModal from "./RecipeModal.jsx"



export default function Recipes(props) {


  const { direction, variants, data } = props


  const [displayData,setDisplayData] = useState((window.localStorage.getItem("stored-recipes")))


  console.log(displayData)
  
  const [modalData, setModalData] = useState({
    visible: false,
    title: "",
    image: "",
    url: "",
    ingredientLines: [],
    calories: "",
  })

  const hideModal = () =>{
    setModalData((prevData) =>({
      ...prevData,
      visible: false
    }))
  }

 


  const recipeCards = data.map((data, index) => {

    const {label, image, ingredients, cuisineType, dishType, ingredientLines, calories, url} = data.recipe

    const dishTypeCol = {backgroundColor: dishType[0] === "starter" ? "#91ba96" : dishType[0] === "main course" ? "#173f4e" : "#756382"}
    
    const showModal = () => {
        setModalData({
          visible: true,
          title: label,
          image: image,
          url: url,
          ingredientLines: ingredientLines,
          calories: calories,
        })
      }
    
      

      return (
      
      <div className="recipe-card-tile col-xs-6 col-sm-6 col-md-4 col-lg-3" ref={props.myRef} key={index}>
        <div className="recipe-card" onClick={showModal}>
          <div className="recipe-card-image" style={{backgroundImage: `url(${image})`}}>
            <div className="recipe-card-course" style={dishTypeCol}>{dishType}</div>
          </div>
          <div className="recipe-card-info">
            <h2 className="recipe-card-title">{label}</h2>
            <p className="recipe-card-cuisine">{cuisineType}</p>
            <p className="recipe-card-ingredients">You need {ingredients.length - props.userIngredients} ingredients</p>
          </div>
        </div>
      </div>)
  })


  return (
        <motion.section className="recipes"
          custom={direction} 
          variants={variants}

          initial="enter"
          animate="center"
          exit="exit"
          transition="transition"
        
        >
          <button className="return-ingredients" onClick={props.goBack}><Link to="/ingredients"><img className="left-arrow" src={leftArrow}></img></Link></button>
          <div className="recipe-cards container-fluid">
            <div className="row">
              {recipeCards}
            </div>
            
          </div>

          <RecipeModal   
            handleExit={hideModal}  
            data={modalData}

            
          >

           
          </RecipeModal>
        </motion.section>
          
      )
}