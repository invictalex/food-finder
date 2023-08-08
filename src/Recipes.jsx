import { useState, useEffect} from 'react'
import downArrow from "./assets/down-arrow.svg"


export default function Recipes(props) {

    return (
        <section>
          <button className="get-recipes-btn" onClick={props.onSubmit}>Get Recipes<img src={downArrow} style={{width: "25px", display: "block", margin: "auto"}} /></button>
        
          <h1>{props.recipeTitle}</h1>
        
        </section>
          
      )
}