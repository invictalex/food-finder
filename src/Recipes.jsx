import { useState, useEffect} from 'react'
import leftArrow from "./assets/right-arrow.svg"
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
import RecipeModal from "./RecipeModal.jsx"


export default function Recipes(props) {

  const { direction, variants, list } = props 

  const [liveData, setliveData] = useState([])

  const [storedData, setStoredData] = useState(JSON.parse(localStorage.getItem("storedData")))

  useEffect(() => (localStorage.setItem("storedData", JSON.stringify(storedData))), [storedData])

  useEffect(() => { 

    if (list.length) {
      
      async function getData()
      {
        const res = await fetch(`https://api.edamam.com/search?q=${list.join("%20")}&app_id=a43adf9a&app_key=58027ed3fbd0a331338139572c0b20a1`)
        const data = await res.json()

        setliveData(data.hits)
        setStoredData(data.hits)
      }
      getData()

    }

  }, []) 

  const dataToShow = (liveData.length ? liveData : storedData)

  const [modalData, setModalData] = useState({visible: false})

  const closeModal = () => setModalData({visible: false})


  const recipeCards = dataToShow.map((dataset, index) => {

    const setModal = () => {
      setModalData({
        visible: true,
        title: label,
        image: image,
        url: url,
        ingredientLines: ingredientLines,
        calories: calories,
      })
    }

    const {label, image, ingredients, cuisineType, dishType, ingredientLines, calories, url} = dataset.recipe
  
    const courseColor = {backgroundColor: dishType[0] === "starter" ? "#91ba96" 
    : dishType[0] === "main course" ? "#173f4e" 
    : "#756382"}

    
    return (
    
      <div className="recipe-card-tile col-xs-6 col-sm-6 col-md-4 col-lg-3" key={index}>
        <div className="recipe-card" onClick={setModal}>
          <div className="recipe-card-image" style={{backgroundImage: `url(${image})`}}>
            <div className="recipe-card-course" style={courseColor}>
              {dishType}
            </div>
          </div>
          <div className="recipe-card-info">
            <h2 className="recipe-card-title">{label}</h2>
            <p className="recipe-card-cuisine">{cuisineType}</p>
            <p className="recipe-card-ingredients">You need {ingredients.length - list.length} ingredients</p>
          </div>
        </div>
      </div>)
  })

  return (
    <motion.section className="recipes"
      custom={direction} 
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition="transition"
    >

      <button className="return-ingredients" onClick={props.goBack}>
        <Link to="/ingredients"><img className="left-arrow" src={leftArrow}></img></Link>
      </button>
      
      <div className="recipe-cards container-fluid">
        <div className="row">
          {recipeCards}
        </div>
      </div>

      <RecipeModal  
        data={modalData} 
        onClose={closeModal}  
      />
    
    </motion.section>
          
  )
}