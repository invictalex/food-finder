import {useState} from 'react'
import downArrow from "./assets/down-arrow.svg"
import IngredientsList from "./IngredientsList.jsx"
import rightArrow from "./assets/right-arrow.svg"
import rightArrowDisabled from "./assets/right-arrow-grey.svg"


export default function UserIngredientsSection(props) {


  const userIngredients = props.data


  return (
    <>
    <section>
      <form className="user-ingredients-form" onSubmit={props.onAdd}>
        <div className="input-panel">
          <input type="text"
            name="userInput"
            value={userIngredients.input}
            className="input-field"
            placeholder="spaghetti"
            onChange={props.onChange}
          />
          <button className="plus">+</button>
        </div>
      </form>
    </section>

    <section>
      <IngredientsList
        list={userIngredients.list} 
        onSubmit={props.onSubmit}
        onCancel={props.onCancel}
      />
    </section>

    <button 
      className="get-recipes" 
      onClick={props.onSubmit} 
      disabled={!true}
      style={{display: props.list.length ? "inline-block" : "none"}}
      >
        Get Recipes
      <img src={props.list.length ? rightArrow : rightArrowDisabled} className="right-arrow" style={{paddingLeft: "5px", width: "10px"}}></img>
    </button>

    </>
  
  
        
  )
}