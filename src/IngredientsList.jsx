import React from "react"
import cancel from "./assets/cancel.svg"

export default function IngredientsList(props)
{

    

    const listOfIngredients = props.userList.map(item => (
        <li key={item} className="ingredients-list-item" onClick={() => props.handleCancel(item)}>

            {item}  <img className="cancel" src={cancel}></img>

        </li>))

    return(

        <ul className="ingredients-list">
            {listOfIngredients.length ? listOfIngredients : 
            <li className="ingredients-placeholder" style={{fontStyle: "italic"}}>Your ingredients</li>}
        </ul>
    )
}