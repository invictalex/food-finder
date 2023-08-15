import {useEffect, useState} from 'react'
import Header from "./Header.jsx"
import Welcome from "./Welcome.jsx"
import Ingredients from "./Ingredients.jsx"

import Recipes from "./Recipes.jsx"
import './App.css'

import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import { AnimatePresence } from "framer-motion"



function App() {
  
  
  const [direction, setPage] = useState(0)

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


  

  const location = useLocation();

  const [userIngredients, setUserIngredients] = useState({
    input: "",
    list: [],
  })

  const hasInput = userIngredients.list.length

  const [count, setCount] = useState(0)

  const [recipeData, setRecipeData] = useState([])

  function getRecipes(){

    paginate(1)

    setCount(prevCount => prevCount + 1)
  }

  const [local, setLocal] = useState()

  useEffect(() =>{
    localStorage.setItem("stored", JSON.stringify(local))
  }, [local])


  useEffect(() => { 
    async function getData()
    {
      const res = await fetch(`https://api.edamam.com/search?q=${userIngredients.list.join("%20")}&app_id=a43adf9a&app_key=58027ed3fbd0a331338139572c0b20a1`)
      const data = await res.json()

      setRecipeData(data.hits)


      !data.hits === [] && console.log(data.hits)

      if (data.hits) {setLocal(data.hits)}


    }

    getData()

  }, [count]) 

  
  

  
  const handleChange = (event) => {
    
    setUserIngredients((prevIng) => ({
        ...prevIng,
        input: event.target.value
      })
    )
  }

  const handleAdd = (event) =>
  {
    event.preventDefault()

    userIngredients.list.includes(userIngredients.input) || userIngredients.input === "" ? 
    
      setUserIngredients((prevIng) => ({
        ...prevIng,
        input: "",
      })) :

      setUserIngredients((prevIng) => ({

        input: "",
        list: [...prevIng.list, prevIng.input]
      }))

  }

  const removeItem = (itemToRemove) => {
    
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
            getStarted={() => paginate(1)}
            variants={variants}


          />} />
          
          <Route path="/ingredients" element={
            <Ingredients 
              data={userIngredients}
              onChange={handleChange}
              onAdd={handleAdd}
              onCancel={removeItem}
              list={userIngredients.list} 
              
              display={hasInput}

              onSubmit={getRecipes}

              direction={direction}
              variants={variants}
              goBack={() => paginate(-1)}

            />} 
          />
          
          <Route path="/recipes" element={
            <Recipes
              userIngredients={hasInput}
              data={recipeData ? recipeData : localStorage.getItem("stored-recipes")}

              direction={direction}
              variants={variants}
              goBack={() => paginate(-1)}

            />} 
          />

        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
