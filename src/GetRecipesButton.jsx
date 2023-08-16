import React from "react"
import rightArrow from "./assets/right-arrow.svg"
import rightArrowDisabled from "./assets/right-arrow-grey.svg"
import {Link} from "react-router-dom"


export default function(props)
{
    const {list} = props

    return(
        <Link to="/recipes" style={!list.length ? {pointerEvents:"none"} : {}}>
            <button className="get-recipes" onClick={props.onSubmit} disabled={!list.length}>
                Recipes<img src={list.length ? rightArrow : rightArrowDisabled} className="right-arrow"></img>
            </button>
        </Link>
    )
}