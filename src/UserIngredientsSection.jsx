import {useState} from 'react'
import downArrow from "./assets/down-arrow.svg"
import IngredientsList from "./IngredientsList.jsx"


export default function UserIngredientsSection(props) {


  const userIngredients = props.data



  
  return (
    <section >
      <form className="user-ingredients-form" onSubmit={props.onSubmit}>
        <div className="input-panel">
          <input type="text"
            name="userInput"
            value={userIngredients.input}
            className="user-input"
            placeholder="spaghetti"
            onChange={props.onChange}
          />
          <button className="plus">+</button>
        </div>
      </form>
      <p className="notification">{userIngredients.notification}</p>

      <IngredientsList 
        userList={userIngredients.list} 
        onCancel={props.onCancel}
      />


    </section>
  
  
        
  )
}