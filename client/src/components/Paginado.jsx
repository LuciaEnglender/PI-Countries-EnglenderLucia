import React from "react";
import './Paginado.css'

export default function Paginado ({totalCountries, countriesPerPage, paginado}) {
    const pageNumber = [];
    

    for(var i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++){
        pageNumber.push(i);
    }

    return (
        <div className="paginado">
            <ul>
            {pageNumber && pageNumber.map( n => (
                <li>
                   <button className="buttonPaginado" onClick={() => paginado(n)}> {n} </button>
                </li>
            ))}
            </ul>
        </div>
        )
}