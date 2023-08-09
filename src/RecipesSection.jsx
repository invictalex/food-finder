import { useState, useEffect} from 'react'
import downArrow from "./assets/down-arrow.svg"
import placeholder from "./assets/placeholder.jpg"


export default function Recipes(props) {


  const recipeCards = props.data.map((data, index) => {

    const {label, image, ingredients, cuisineType, dishType} = data.recipe

    const dishTypeCol = {backgroundColor: dishType[0] === "starter" ? "#91ba96" : dishType[0] === "main course" ? "#173f4e" : "#756382"}


    return (
    
    <div className="recipe-card-container" ref={props.myRef} key={index}>

      <div className="recipe-card">
        <div className="recipe-card-image" style={{backgroundImage: `url(${image})`}}>

        </div>
        <div className="recipe-card-info">
          <div className="recipe-card-tags">
            <div className="recipe-card-course" style={dishTypeCol}>{dishType}</div>
            <div className="recipe-card-cuisine">{cuisineType}</div>
          </div>
          
          <h2 className="recipe-card-title">{label}</h2>
          <div className="recipe-card-ingredients-counter">
            <p>You have {props.userIngredients}/{ingredients.length} ingredients</p>
          </div>  
          <div className="recipe-card-expand-button">Cook</div>
        </div>
      </div>
      
      
      
    </div>)
})

    return (
        <section className="recipes-section">
          {recipeCards}
        </section>
          
      )
}