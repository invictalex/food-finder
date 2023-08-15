import React from "react"
import rightArrow from "./assets/right-arrow.svg"
import rightArrowDisabled from "./assets/right-arrow-grey.svg"
import {Link} from "react-router-dom"


export default function(props)
{
    const {list} = props

    return(
        <Link to="/recipes">
            <button className="get-recipes" onClick={props.onSubmit} disabled={!list}>
                Recipes<img src={list ? rightArrow : rightArrowDisabled} className="right-arrow"></img>
            </button>
        </Link>
    )
}