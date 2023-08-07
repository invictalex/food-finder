import { useEffect} from 'react'
import Header from "./Header.jsx"
import UserIngredientsSection from "./UserIngredientsSection.jsx"
import Recipes from "./Recipes.jsx"
import './App.css'



function App() {

  /*useEffect(() => {
    fetch("https://api.edamam.com/search?q=chicken%20rice%20garlic&app_id=a43adf9a&app_key=58027ed3fbd0a331338139572c0b20a1")
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])*/

  return (
    <>
      <Header />
      <UserIngredientsSection />
      <Recipes />

    </>
  )
}

export default App
