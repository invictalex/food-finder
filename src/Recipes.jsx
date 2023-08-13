import { useState, useEffect} from 'react'
import downArrow from "./assets/down-arrow.svg"
import leftArrow from "./assets/right-arrow.svg"
import placeholder from "./assets/placeholder.jpg"
import {Link} from "react-router-dom"



export default function Recipes(props) {


  const recipeCards = props.data.map((data, index) => {

  const {label, image, ingredients, cuisineType, dishType} = data.recipe

  const dishTypeCol = {backgroundColor: dishType[0] === "starter" ? "#91ba96" : dishType[0] === "main course" ? "#173f4e" : "#756382"}


    return (
    
    <div className="recipe-card-tile col-xs-6 col-sm-6 col-md-4 col-lg-3" ref={props.myRef} key={index}>

      <div className="recipe-card">
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
        <section className="recipes">
          <button className="return-ingredients"><Link to="/ingredients"><img className="left-arrow" src={leftArrow}></img></Link></button>
          <div className="recipe-cards container-fluid">
            <div className="row">
              {recipeCards}
            </div>
            
          </div>
        </section>
          
      )
}