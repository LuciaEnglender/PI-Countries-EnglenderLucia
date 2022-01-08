import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, buttonsToOrderAlpha, buttonsToOrderNum } from '../actions/index'
import SearchBar from './SearchBar';
import FilterByContinent from './FilterByContinent'
import FilterByActivity from './FilterByActivity'
import './Home.css'
import {NavLink} from 'react-router-dom'
import Card from "./Card";
import Paginado from "./Paginado";


export default function Home(){
    const allCountries = useSelector((state) => state.countries);

   
   //---------------mostrar los paises
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])
    
    
   
    //------------- ordenar
    const [orden, setOrden] = useState('')



    function handleFilterByPopulation(e){
        e.preventDefault()
        dispatch(buttonsToOrderNum(e.target.value))
        setOrden(e.target.value)
    }

    function handleFilterByAlpha(e){
        e.preventDefault();
        dispatch(buttonsToOrderAlpha(e.target.value));
        setOrden(e.target.value)
    }

    //--------------restaurar orden predeterminado de countries
    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries());
    }
   
    //-------------------paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPAge, setCountriesPerPAge] = useState(10);
    const lastCountry = currentPage * countriesPerPAge;
    const firstCountry = lastCountry - countriesPerPAge;
    let currentCountries = allCountries && allCountries.slice(firstCountry, lastCountry)

    const paginado = (pageNumber) => {
     
            setCurrentPage(pageNumber)
          
    }



    return (
        <div className="containerA">
        <div className="title">
            <h1>Henry Countries</h1>
        </div>
                
        {
            
            <div className="main">
            
            <nav className="nav">
                
                <div className="filterContinent">
                    <div className="filterContinentLabel">
                        <label>Filtrá paises por continentes</label>
                    </div>
                    <div className="filterContinentButton">
                         <FilterByContinent/>
                    </div>
                </div>

                <div className="filterAct">
                    <div className="filterActLabel">
                        <label>Filtrá por actividades turísticas</label>
                    </div>
                    <div className="filterActButton">
                        <FilterByActivity/>
                    </div>
                    
                </div>        
                       
                   <div className="filterPeople">
                       <div className="filterPeopleLabel">
                           <label>Ordená por cantidad de población</label>
                       </div>
                        <select onChange={(e) => {handleFilterByPopulation(e)}} className="filterPeopleButon">
                        <option>--------------</option>
                            <option value='menos'>Menor cantidad</option>
                            <option value='mas'>Mayor cantidad</option>
                        </select>
                    </div>
                    <div className="abc">
                        <div className="abcLabel">
                            <label>Ordená alfabéticamente </label>
                        </div>
                    <select onChange={(e) => {handleFilterByAlpha(e)}} className="abcButon">
                    <option>--------------</option>
                        <option value='abc'>Alfabeticamente ascendentemente</option>
                        <option value='cba'>Alfabeticamente descendentemente</option>
                    </select>
                    </div>
            </nav>

                <div className="another">
                <NavLink to='/createActivity'><button className="crear-acti">Crear Actividad Turistica</button></NavLink>
                    <button className="countriesAgain" onClick={e => {handleClick(e)}}>
                        Volver a cargar todos los paises
                    </button>
                    <div className="searchBar">
                     <SearchBar />
                     </div>
                </div>
        <div className="containerAll">
                {
                    allCountries && currentCountries.map(p => {
                        return <Card name={p.name} flag={p.flag} region={p.region} id={p.id}/> 
                    })
                }
        </div>
        <div>
                   {
                   allCountries && 
                   <Paginado
                    countriesPerPage={countriesPerPAge}   
                    totalCountries={allCountries.length}
                    paginado={paginado}/>
                }</div>  
        </div>
        }
        

        </div>
    )
}