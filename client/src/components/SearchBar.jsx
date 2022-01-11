import React from "react";
import { useDispatch } from "react-redux";
import { filterByName } from "../actions";
import './SearchBar.css'
//import { useState } from "react";

export default function SearchBar (){
   // const [country, setCountry] = useState('');

    const dispatch = useDispatch()
    
    async function handlerChange (e){
        const json = await dispatch(filterByName(e.target.value))
        if(json instanceof Error){
            alert('Nombre incorrecto!!!')
        }

    }

    return (
        
            <form
             onSubmit={(e) => {
                // e.preventDefault();
                // dispatch(filterByName(e.target.value))
                // // dispatch(filterByName(country))
                handlerChange(e)
            }}
            >
            <input 
            className="busqueda"
            type = 'text'
            placeholder="Busqueda"
            onChange={(e) => {handlerChange(e)}}
            // onChange={(e) => setCountry(e.target.value)}
            />
            {/* <input type='submit' value='buscar' className="buscar"/> */}
            </form>
        
    )
}