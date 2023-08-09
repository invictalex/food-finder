import React from "react"
import rightArrow from "./assets/right-arrow.svg"
import rightArrowDisabled from "./assets/right-arrow-grey.svg"

export default function GetRecipesBtn(props)
{
    return(
        <div className="get-recipes-container">
            <button 
                className="get-recipes" 
                onClick={props.onSubmit} 
                disabled={!true}
                style={{display: props.list.length ? "inline-block" : "none"}}
            >
                Get Recipes

                <img src={props.list.length ? rightArrow : rightArrowDisabled} className="right-arrow"></img>
        
            </button>
        </div>
       
    )
}