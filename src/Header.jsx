import logo from "./assets/logo.svg"
import {Link} from "react-router-dom"

export default function Header(props) {
    return (
        
        <header>
          <Link to="/"><img src={logo} alt="" className="logo"></img></Link>
          
          <p>An app developed by <a href="https://www.github.com/invictalex" target="_blank">invictalex</a>.</p>
        </header>
    
          
      )
}