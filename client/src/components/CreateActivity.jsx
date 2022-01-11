import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { createActivity , getCountries } from "../actions";
import './CreateActivity.css'


function validate(input){
    let errors = {};

    if(!input.description){
        errors.description = 'Se requiere una breve descripcion'
    } else if(input.dicifulty > 5 ||input.dificulty < 1 ){
        errors.dicifulty = 'Debe ser un número entre 1 y 5';
    } else if(!input.duration){
        errors.duration = 'Se requiere especificar duración';
    } else if(!input.season){
        errors.season = 'Se requiere especificar temporada'
    } else if(!input.nameCountry){
        errors.nameCountry = 'Debe elegir un país'
    }
    return errors
}

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

    const [errors, setErrors] = useState({
        description :  'Se requiere una breve descripcion',
        dificulty : 'Debe ser un número entre 1 y 5',
        duration : 'Se requiere especificar duración',
        season: 'Se requiere especificar temporada',
        nameCountry :  'Debe elegir un país'
    });
    


    function handeChange(e){
        e.preventDefault(e);
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    function handleCheckBox(e){
    if(e.target.checked){
        e.preventDefault();
        setInput({
            ...input,
            season : e.target.value
                })}
    else{
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
            }))
        }
    }

    function handleSelect(e){
        e.preventDefault();
        setInput({
            ...input,
            nameCountry: [...input.nameCountry, e.target.value]
        });
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    function handleSubmit (e) {
        e.preventDefault();
        if(Object.keys(errors).length === 0){
        dispatch(createActivity(input));
        setInput({
            description: '',
            dificulty: '',
            duration : '',
            season: '',
            nameCountry: []
        })  
        setErrors({
            description :  'Se requiere una breve descripcion',
        dificulty : 'Debe ser un número entre 1 y 5',
        duration : 'Se requiere especificar duración',
        season: 'Se requiere especificar temporada',
        nameCountry :  'Debe elegir un país'
        })
        alert('creado con exito');
    } else {
        alert('completar los campos faltantes')
        }
        console.log(errors)
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
                    <label>Descripcion: </label>
                    <input type={'text'} name='description' onChange={(e) => handeChange(e)} key= 'descripcion' value={input.description}/>
                    {
                        errors.description && <p className="error">{errors.description}</p>
                    }
                </div>
                <div className="dificulty">
                    <label>Dificultad: </label>
                    <input type={'number'} min={1} max={5} name='dificulty' onChange={(e) => handeChange(e)} key='dificultad' value={input.dificulty} />
                    {
                        errors.dificulty && <p className="error">{errors.dificulty}</p>
                    }
                </div>
                <div className="duration">
                    <label className="durationLabel">Duracion: </label>
                    <input type={'number'} name='duration' onChange={(e) => handeChange(e)} key='duration' value={input.duration}/> hs.
                    {
                        errors.duration && <p className="error">{errors.duration}</p>
                    }
                </div>
                <div className="season">

                    <label className="seasonLabel">Temporada: </label>
                    <div className="seasonInputs">
                      <label><input className="checkbox"   type="checkbox" name='SPRING' value='SPRING' onClick={(e) => handleCheckBox(e)}   key = 'key.spring'/>Spring</label>
                        <label><input  className="checkbox"   type="checkbox" name='SUMMER' value='SUMMER' onClick={(e) => handleCheckBox(e)} key ='key.summer'/>Summer</label>
                        <label><input className="checkbox"  type="checkbox" name='AUTUMN' value='AUTUMN' onClick={(e) => handleCheckBox(e)}  key = 'key.autumn'/>Autumn</label>
                        <label><input className="checkbox" type="checkbox" name='WINTER' value='WINTER' onClick={(e) => handleCheckBox(e)}   key = 'key.winter'/>Winter</label>
                    </div>
                    {
                        errors.season && <p className="error">{errors.season}</p>
                    }
              </div>
                <div className="countries">
                    <label>Paises: </label>
                    <select onChange={(e) => handleSelect(e)} name='nameCountry' key='contries' > 
                        {
                            countries.map( p =>( 
                                    <option value={p.name} >{p.name}</option>
                            ))
                        }
                    </select>
                    {
                        errors.nameCountry && <p className="error">{errors.nameCountry}</p>
                    }
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
                <button type='submit' key='buttoncrear' className="buttoncrear">Crear</button>
            </form>
            <NavLink to='/home'><button className="butonVolver">Volver</button></NavLink>
        </div>
    )
} 