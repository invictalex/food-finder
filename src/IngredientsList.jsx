import React from "react"
import cancel from "./assets/cancel.svg"

  

export default function IngredientsList(props)
{
    const listOfIngredients = props.list.map(item => (
        <li key={item} className="ingredients-list-item" onClick={() => props.onCancel(item)}>

            {item}  <img className="cancel" src={cancel}></img>

        </li>))


    

    return(

        <section style={{display: props.list.length? "block" : "none"}}>
        <ul className="ingredients-list">
            <li className="ingredients-list-title">Your ingredients</li>

            {listOfIngredients} 

            
        </ul>
       
        </section>
        
        
    )
}