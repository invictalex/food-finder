import {useEffect, useState} from 'react'
import Header from "./Header.jsx"
import Welcome from "./Welcome.jsx"
import Ingredients from "./Ingredients.jsx"

import Recipes from "./Recipes.jsx"
import './App.css'

import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import { AnimatePresence } from "framer-motion"



function App() {
  
  //                                                           Router & Animation setup
  const [direction, setPage] = useState(0)

  const location = useLocation();

  const paginate = (newDirection) => setPage(newDirection);

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    transition: 0.3
  }

  //                                                               User input State
  


  const [userIngredients, setUserIngredients] = useState({
    input: "",
    list: [],
  })

  const {input, list} = userIngredients

  //                                                                 Handling State
  
  const handleType = (event) => {
    
    setUserIngredients((prevIng) => ({
        ...prevIng,
        input: event.target.value
      })
    )
  }

  const addIngredient = (event) =>
  {
    event.preventDefault()

    list.includes(input) || input === "" ? 
    
      setUserIngredients((prevIng) => ({
        ...prevIng,
        input: "",
      })) 
      
      :

      setUserIngredients((prevIng) => ({
        input: "",
        list: [...prevIng.list, prevIng.input]
      }))

  }

  const removeIngredient = (itemToRemove) => {
    
    setUserIngredients((prevIng) => ({
      ...prevIng,
      list: prevIng.list.filter(item => item !== itemToRemove)     
    }))
  }

  return (
    <>
      <Header />
      <AnimatePresence wait initial={false} custom={direction}>
        <Routes location={location} key={location.pathname}>
          
          <Route index element={
            <Welcome 
              direction={direction}
              variants={variants}
              goForward={() => paginate(1)}
              
            />} 
          />
          
          <Route path="/ingredients" element={
            <Ingredients 
              direction={direction}
              variants={variants}
              goBack={() => paginate(-1)}
              goForward={() => paginate(1)}

              data={userIngredients}
              onType={handleType}
              onAdd={addIngredient}
              onRemove={removeIngredient}
            />} 
          />
          
          <Route path="/recipes" element={
            <Recipes
              direction={direction}
              variants={variants}
              goBack={() => paginate(-1)}

              list={list}
            />} 
          />

        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
