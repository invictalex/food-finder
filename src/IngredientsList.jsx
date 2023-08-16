import React from "react"
import cancel from "./assets/cancel.svg"
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function(props)
{

    const [animateList] = useAutoAnimate()

    const ingredientsListJSX = props.list.map(item => (
        <li key={item} className="ingredients-list-item" onClick={() => props.onRemove(item)}>
            {item}
            <img className="remove-item" src={cancel}></img>
        </li>))



    return(
        <ul className="ingredients-list" ref={animateList}>
            <p className="ingredients-list-title">Your ingredients</p>
            {ingredientsListJSX.length ? ingredientsListJSX : <li className="ingredients-placeholder">...</li>}
        </ul>
    )
}