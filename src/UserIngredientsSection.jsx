import {useState} from 'react'
import downArrow from "./assets/down-arrow.svg"
import IngredientsList from "./IngredientsList.jsx"


export default function UserIngredientsSection(props) {


  const userIngredients = props.data



  
  return (
    <section >
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
      <p className="notification">{userIngredients.notification}</p>

      <IngredientsList 
        list={userIngredients.list} 
        onSubmit={props.onSubmit}
        onCancel={props.onCancel}
      />


    </section>
  
  
        
  )
}