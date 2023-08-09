import {useState} from 'react'
import downArrow from "./assets/down-arrow.svg"
import IngredientsList from "./IngredientsList.jsx"



export default function UserIngredientsSection(props) {


  const userIngredients = props.data

  const positionAbsolute = {
    position: "absolute",
    left: "50%",
    bottom: "0",
    transform: "translateX(-50%)"
  }


  return (
    <section className="ingredients-section" style={!props.display ? positionAbsolute : {}}>
      <form className="ingredients-form" onSubmit={props.onAdd}>
          <input type="text"
            name="userInput"
            value={userIngredients.input}
            className="input-field"
            placeholder="spaghetti"
            onChange={props.onChange}
          />
          <button className="plus">+</button>
      </form>

      <IngredientsList
        list={userIngredients.list} 
        onSubmit={props.onSubmit}
        onCancel={props.onCancel}
      />

      

    </section>
        
  )
}