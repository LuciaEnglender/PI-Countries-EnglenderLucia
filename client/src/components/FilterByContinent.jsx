import React from "react";
import { useDispatch } from "react-redux";
import { filterByContinents } from "../actions";
import './FilterBy.css'

export default function FilterByContinent(){
    const dispatch = useDispatch()

    function handleChange(e){
        e.preventDefault()
        dispatch(filterByContinents(e.target.value))
    }
    return (
        <select onChange={(e) => handleChange(e)} className="select">
            <option>--------------</option>
            <option value= 'all'>All</option>
            <option value='Americas'>America</option>
            <option value='Oceania'>Oceania</option>
            <option value='Africa'>Africa</option>
            <option value='Europe'>Europa</option>
            <option value='Asia'>Asia</option>
        </select>
    )
}