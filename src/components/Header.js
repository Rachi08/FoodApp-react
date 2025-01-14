import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";



const Header = ()=>{
// const btn = "logout"
  const[button, setButton] = useState("Login")
    return ( 
         <div className="head">
          <div className="logo-container">
            <img src={ LOGO_URL }/>
          </div>
          <div className="nav-items">
           <ul>
            <li> <Link to = "/"> Home </Link>
             </li>
            <li> <Link to= "/about"> About </Link>
             </li>
            <li> <Link to= "/contact"> Contact </Link>
             </li>
            <button className="login" onClick={() =>{ 
              button ==="Login" ? setButton("Logout"): setButton("Login")}} > {button} </button>
         
           </ul>
          </div>
         
         </div> )

};

export default Header;

