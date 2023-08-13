import React from "react"
import {Link} from "react-router-dom"

export default function(){
    return(
        <section className="welcome">
          <h2 className="tagline">Let us know what ingredients you've got, and we'll take it from there.</h2>
          <div className="button-container">
          <Link to="/ingredients"><button className="get-started">Get Started</button></Link>
          </div>
        </section>
        
    )
}