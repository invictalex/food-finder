import { useState } from 'react'

export default function Header(props) {
    return (
        
        <>
        <header>
          <h1>Meal<span>Maker</span></h1>
          <p>An app developed by <a href="https://www.github.com/invictalex">invictalex</a>.</p>
        </header>
        
        <section style={{display: props.display ? "none" : "block"}}>
          <h2 className="tagline">Let us know what ingredients you've got, and we'll take it from there.</h2>
        </section>
        
        
        </>
    
          
      )
}