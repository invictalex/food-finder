import React from "react"
import close from "./assets/close.svg"

export default function(props){

    const {visible, title, image, url, ingredientLines, calories} = props.data

    const ingrListModal = ingredientLines && ingredientLines.map((item, index) => (
    <li key={index}>
        {item}
    </li>))

    return(
        <div style={{display: visible ? "block" : "none" }}>
            <div className="recipe-modal" >
                <img src={close} style={{width: "20px", height: "20px"}} className="r-modal-close" onClick={props.onClose}></img>
                <div className="r-modal-image" style={{backgroundImage: `url(${image})`}}></div>
                <div className="r-modal-info">
                    <div className="r-modal-head">
                        <h1 className="r-modal-title">{title}</h1>
                        <p className="r-modal-calories">{calories && calories.toFixed(0)} calories</p>
                    </div>
                    <div className="r-modal-body">
                        <h4>You'll need:</h4>
                        <ul className="r-modal-ingredients">
                            {ingrListModal}
                        </ul>
                    </div>
                    <a href={`${url}`} target="_blank" className="r-modal-button">Go to Recipe</a>
                </div>
            </div>
        
            <div className="backdrop"  onClick={props.onClose}></div>
        </div>
        
    )
}