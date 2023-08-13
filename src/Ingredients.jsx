import {useState} from 'react'
import downArrow from "./assets/down-arrow.svg"
import IngredientsList from "./IngredientsList.jsx"
import GetRecipesButton from './GetRecipesButton.jsx'
import {Link} from "react-router-dom"



export default function Ingredients(props) {


  const userIngredients = props.data


  return (
    <section className="ingredients">
      <div className="back-home">
        <button><Link to="/"><span>&#60;</span>Back</Link></button>
      </div>
     
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

      <GetRecipesButton
        onSubmit={props.onSubmit}
        hasList={userIngredients.list.length} 

      />

      

    </section>
        
  )
}