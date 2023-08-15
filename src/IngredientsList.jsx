import React from "react"
import cancel from "./assets/cancel.svg"

export default function(props)
{
    const ingredientsListJSX = props.list.map(item => (
        <li key={item} className="ingredients-list-item" onClick={() => props.onRemove(item)}>
            {item}
            <img className="remove-item" src={cancel}></img>
        </li>))


    

    return(
        <ul className="ingredients-list" >
            <li className="ingredients-list-title">Your ingredients</li>
            {ingredientsListJSX.length ? ingredientsListJSX : <li className="ingredients-placeholder">...</li>}
        </ul>
    )
}