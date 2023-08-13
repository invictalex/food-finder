import React from "react"
import cancel from "./assets/cancel.svg"


  

export default function IngredientsList(props)
{
    const listOfIngredients = props.list.map(item => (
        <li key={item} className="ingredients-list-item" onClick={() => props.onCancel(item)}>

            {item}  <img className="remove-item" src={cancel}></img>

        </li>))


    

    return(

        <ul className="ingredients-list" >
            <li className="ingredients-list-title">Your ingredients</li>
            {listOfIngredients.length ? listOfIngredients : <li className="ingredients-placeholder">...</li>}
        </ul>
       
        
        
    )
}