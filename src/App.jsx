import { useState } from 'react'
import Header from "./Header.jsx"
import UserIngredients from "./UserIngredients.jsx"
import Recipes from "./Recipes.jsx"
import './App.css'

function App() {

  return (
    <>
      <Header />
      <UserIngredients />
      <Recipes />

    </>
  )
}

export default App
