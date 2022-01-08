import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { createActivity , getCountries } from "../actions";
import './CreateActivity.css'

export default  function CreateActivity () {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        description: '',
        dificulty: '',
        duration : '',
        season: '',
        nameCountry: []
    });

    const countries = useSelector((state) => state.countries)


    useEffect(()=> {
        dispatch(getCountries())
    }, [dispatch])

    function handeChange(e){
        e.preventDefault(e);
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    function handleCheckBox(e){
    if(e.target.checked){
        e.preventDefault();
        setInput({
            ...input,
            season : e.target.value
                })}
    }

    function handleSelect(e){
        e.preventDefault();
        setInput({
            ...input,
            nameCountry: [...input.nameCountry, e.target.value]
        })
    }

    function handleSubmit (e) {
        e.preventDefault();
        
        dispatch(createActivity(input));
        setInput({
            description: '',
            dificulty: '',
            duration : '',
            season: '',
            nameCountry: []
        })  
        alert('creado con exito');
    }

    function handledelete(e){
        let aux = input.nameCountry.filter( p => p !== e.target.value);
        setInput({
            ...input,
            nameCountry : aux
        })
        console.log(aux)
        e.preventDefault()
    }
    
    return (
        <div className="container">
            <div className="title">
                <h1>Creá una actividad turística</h1>
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className="inputs">
                <div className="descrip">
                    <label>Descripcion</label>
                    <input type={'text'} name='description' onChange={(e) => handeChange(e)} key= 'descripcion' value={input.description}/>
                </div>
                <div className="dificulty">
                    <label>Dificultad</label>
                    <input type={'number'} min={1} max={5} name='dificulty' onChange={(e) => handeChange(e)} key='dificultad' value={input.dificulty} />
                </div>
                <div className="duration">
                    <label>Duracion</label>
                    <input type={'number'} name='duration' onChange={(e) => handeChange(e)} key='duration' value={input.duration}/>
                </div>
                <div className="season">
                    <label>Temporada</label>
                    <label><input type='checkbox' name='SPRING' value='SPRING' onClick={(e) => handleCheckBox(e)}   key = 'key.spring'/>Spring</label>
                    <label><input type='checkbox' name='SUMMER' value='SUMMER' onClick={(e) => handleCheckBox(e)} key ='key.summer'/>Summer</label>
                    <label><input type='checkbox' name='AUTUMN' value='AUTUMN' onClick={(e) => handleCheckBox(e)}  key = 'key.autumn'/>Autumn</label>
                    <label><input type='checkbox' name='WINTER' value='WINTER' onClick={(e) => handleCheckBox(e)}   key = 'key.winter'/>Winter</label>
                </div>
                <div className="countries">
                    <label>Paises</label>
                    <select onChange={(e) => handleSelect(e)} name='nameCountry' key='contries' > 
                        {
                            countries.map( p =>( 
                                    <option value={p.name} >{p.name}</option>
                            ))
                        }
                    </select>
                    <div className="countriesDelete">
                        {

                            input.nameCountry && input.nameCountry.map( p => {
                              
                              return (<div className="countriesList">
                                        <h5>{p}</h5>
                                        <button  key='button.delete' className="buttonClose" onClick={(e) => handledelete(e)} value={p}>X</button>
                                    </div>)
                            })
                        }
                    </div>
                </div>
                <button type='submit' key='button.crear'>Crear</button>
            </form>
            <NavLink to='/home'><button>Volver</button></NavLink>
        </div>
    )
} 