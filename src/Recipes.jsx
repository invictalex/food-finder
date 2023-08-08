import { useState, useEffect} from 'react'
import downArrow from "./assets/down-arrow.svg"


export default function Recipes(props) {


  const recipeCards = props.data.map((data, index) => {

    let recipe = data.recipe
    const {label, image, ingredients, cuisineType} = recipe

    return (
    <div key={index}><h6>{label} is recipe number {index + 1}</h6></div>)
})

    return (
        <section>
          <button className="get-recipes-btn" onClick={props.onSubmit}>Get Recipes<img src={downArrow} style={{width: "25px", display: "block", margin: "auto"}} /></button>
        
          {recipeCards}
        
        </section>
          
      )
}