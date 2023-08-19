import { useState, useEffect} from 'react'
import leftArrow from "./assets/right-arrow.svg"
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
import RecipeModal from "./RecipeModal.jsx"


export default function Recipes(props) {

  const { direction, variants, list } = props 

  const [liveData, setliveData] = useState([])

  const [storedData, setStoredData] = useState(JSON.parse(localStorage.getItem("locallyStoredData")))

  useEffect(() => {

    localStorage.setItem("locallyStoredData", JSON.stringify(storedData))

   }, [storedData])

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

  

  const [modalData, setModalData] = useState({
    visible: false,
    title: "",
    image: "",
    url: "",
    ingredientLines: "",
    calories: "",})

  const closeModal = () => setModalData({visible: false})

  function RecipeCards(props){


    console.log(`live data: ${JSON.stringify(liveData)}`)
    console.log(`stored data: ${JSON.stringify(storedData)}`)

    const recipeCards = props.data.map((dataItem, index) => {

      const {label, image, ingredients, cuisineType, dishType, ingredientLines, calories, url} = dataItem.recipe
    
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
  
    
      const courseColor = dishType && {backgroundColor: dishType[0] === "starter" ? "#91ba96" 
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
        </div>
      )
    })

    const error = 
      <motion.div className="error"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1, delay: 0.8}}
      
      
      >
        <p>Oops, it appears your search generated no results.</p>
        <p>Go <span>back</span> and check for any spelling errors.</p>
      </motion.div> 
    
    return(
        <div className="recipe-cards container-fluid">
          <div className="row">
            {recipeCards.length ? recipeCards : error}
          </div>
        </div>
      
    )
  }

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
      
      {list.length ? <RecipeCards data={liveData}/> : <RecipeCards data={storedData} />} 

      <RecipeModal  
        data={modalData} 
        onClose={closeModal}  
      />
    
    </motion.section>
          
  )
}