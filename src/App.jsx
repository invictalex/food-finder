import {useEffect, useState} from 'react'
import Header from "./Header.jsx"
import UserIngredientsSection from "./UserIngredientsSection.jsx"
import Recipes from "./Recipes.jsx"
import './App.css'

function App() {

  const [userIngredients, setUserIngredients] = useState({
    input: "",
    list: [],
    notification: ""
  })

  const [count, setCount] = useState(0)

  const [recipeData, setRecipeData] = useState([])

  function increaseCount(){
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    async function getData()
    {
      const res = await fetch(`https://api.edamam.com/search?q=${userIngredients.list.join("%20")}&app_id=a43adf9a&app_key=58027ed3fbd0a331338139572c0b20a1`)
      const data = await res.json()

      setRecipeData(data.hits)
    }

    getData()

  }, [count])

  console.log(recipeData)
  
  const handleChange = (event) => {
    
    setUserIngredients((prevIng) => ({
        ...prevIng,
        input: event.target.value
      })
    )
  }

  const handleSubmit = (event) =>
  {
    event.preventDefault()

    userIngredients.list.includes(userIngredients.input) ? 
    
      setUserIngredients((prevIng) => ({
        ...prevIng,
        input: "",
        notification: `Oops, you've already added ${userIngredients.input}!`
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
      <UserIngredientsSection 
        data={userIngredients}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={removeItem}
      />

      <Recipes
        onSubmit={increaseCount}
        data={recipeData}
      />

    </>
  )
}

export default App
