import React from "react";
import { NavLink } from "react-router-dom";
import './ERROR.css'
export default function ERROR () {
 return(
     
     <div className="errorDiv">
         <div className="errorrr">
             Ups! Something went wrong D:  
         </div>
        
     <div className="homeDiv">
         <NavLink to='/home'>Home</NavLink>
     </div>
     
     </div>

     
 )
}