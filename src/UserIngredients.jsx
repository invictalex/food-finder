import { useState } from 'react'
import downArrow from "./assets/down-arrow.svg"

export default function UserIngredients() {
  return (
    <section >
      <form className="user-ingredients-form">
        <div className="input-panel">
          <input type="text"
            name="userInput"
            value=""
            className="user-input"
            placeholder="spaghetti"

          />
          <button type="button" class="plus-btn">+</button>
        </div>
      </form>

      <div className="user-ingredients-display">
          The user's ingredients will display here.
      </div>

      <button class="get-recipes-btn">Get Recipes<img src={downArrow} style={{width: "25px", display: "block", margin: "auto"}} /></button>
      

    </section>
  
  
        
  )
}