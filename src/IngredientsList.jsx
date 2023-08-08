import React from "react"
import cancel from "./assets/cancel.svg"
import rightArrow from "./assets/right-arrow.svg"
import rightArrowDisabled from "./assets/right-arrow-grey.svg"
  

export default function IngredientsList(props)
{
    const listOfIngredients = props.list.map(item => (
        <li key={item} className="ingredients-list-item" onClick={() => props.onCancel(item)}>

            {item}  <img className="cancel" src={cancel}></img>

        </li>))


    

    return(

        <>
        <ul className="ingredients-list">
            <li className="ingredients-list-title">Your ingredients</li>

            {listOfIngredients} 

            
        </ul>
        <div className="button-container">
        <button className="get-recipes" onClick={props.onSubmit} disabled={!props.list.length}>Get Recipes
                <img src={props.list.length ? rightArrow : rightArrowDisabled} className="right-arrow" style={{paddingLeft: "5px", width: "10px"}}></img>
        </button>
        </div>
       
        </>
        
        
    )
}