import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByName } from "../actions";
import './SearchBar.css'

export default function SearchBar (){
    const [country, setCountry] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false)
    const dispatch = useDispatch()
  
    const handleButtonClick =() => {
        setButtonClicked(true)
    }

    return (
        
            <form onSubmit={(e) => {
                e.preventDefault();
                handleButtonClick()
                dispatch(filterByName(country))}}>
            <input 
            className="busqueda"
            type = 'text'
            placeholder="Busqueda"
            onChange={(e) => setCountry(e.target.value)}
            />
            <input type='submit' value='buscar' className="buscar"/>
            </form>
        
    )
}