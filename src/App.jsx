import {useEffect, useState} from 'react'
import Header from "./Header.jsx"
import Welcome from "./Welcome.jsx"
import Ingredients from "./Ingredients.jsx"

import Recipes from "./Recipes.jsx"
import ScrollButton from './ScrollButton.jsx'
import './App.css'

import { Routes, Route, useLocation} from "react-router-dom"

function App() {

  const location = useLocation();

  const [userIngredients, setUserIngredients] = useState({
    input: "",
    list: [],
  })

  const hasInput = userIngredients.list.length

  const [count, setCount] = useState(0)

  const [recipeData, setRecipeData] = useState([])

  function getRecipes(){

    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    async function getData()
    {
      const res = await fetch(`https://api.edamam.com/search?q=${userIngredients.list.join("%20")}&app_id=a43adf9a&app_key=58027ed3fbd0a331338139572c0b20a1`)
      const data = await res.json()

      setRecipeData(data.hits)

      console.log(data.hits)
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
        list: [...prevIng.list, prevIng.input],
        notification: ""
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
      <Routes location={location} key={location.pathname}>
        
        <Route index element={<Welcome />} />
        
        <Route path="/ingredients" element={
          <Ingredients 
            data={userIngredients}
            onChange={handleChange}
            onAdd={handleAdd}
            onCancel={removeItem}
            list={userIngredients.list} 
            onSubmit={getRecipes}
            display={hasInput}
          />} 
        />
        
        <Route path="/recipes" element={
          <Recipes
            userIngredients={hasInput}
            data={recipeData}
          />} 
        />

      </Routes>

    </>
  )
}

export default App
