import React from "react"
import close from "./assets/close.svg"

export default function(props){


    const {visible, title, image, url, ingredientLines, calories} = props.data


        const fullIngredients = ingredientLines.map((item, index) => <li key={index}>{item}</li>)


    return(
        <div className="backdrop" style={{display: visible ? "block" : "none" }} onClick={props.handleExit}>
            <div className="recipe-modal" >
                <img src={close} style={{width: "20px", height: "20px"}} className="r-modal-close" onClick={props.handleExit}></img>
                <div className="r-modal-image" style={{backgroundImage: `url(${image})`}}>

                </div>
                <div className="r-modal-info">
                    <div className="r-modal-head">
                        <h1 className="r-modal-title">{title}</h1>
                        <p className="r-modal-calories">{calories && calories.toFixed(0)} calories</p>
                    </div>
                    <div className="r-modal-body">
                        <h4>You'll need:</h4>
                        <ul className="r-modal-ingredients">
                            {fullIngredients}
                        </ul>
                    </div>
                    <a href={`${url}`} target="_blank"><button className="r-modal-button">Go to Recipe</button></a>
                </div>
                

            </div>
        </div>
        
    )
}