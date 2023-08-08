import { useState, useEffect} from 'react'
import downArrow from "./assets/down-arrow.svg"
import placeholder from "./assets/placeholder.jpg"


export default function Recipes(props) {


  const recipeCards = props.data.map((data, index) => {

    let recipe = data.recipe
    const {label, image, ingredients, cuisineType} = recipe

    console.log(placeholder)

    return (
    
    <div className="recipe-card-container" key={index}>

      <div className="recipe-card">
        <div className="recipe-card-image" style={{backgroundImage: `url(${placeholder})`}}>

        </div>
        <div className="recipe-card-info">
          <div className="recipe-card-tags">
            <div className="recipe-card-course">main</div>
            <div className="recipe-card-cuisine">french</div>
          </div>
          
          <h2 className="recipe-card-title">This is the title</h2>
          <div className="recipe-card-ingredients-counter">
            <p>You have 5/7 ingredients</p>
          </div>  
          <div className="recipe-card-expand-button">Cook</div>
        </div>
      </div>
      
      
      
    </div>)
})

    return (
        <section>
          <button className="get-recipes-btn" onClick={props.onSubmit}>Get Recipes<img src={downArrow} style={{width: "25px", display: "block", margin: "auto"}} /></button>
        <div className="recipe-card-section">
          {recipeCards}
        </div>
        
        </section>
          
      )
}