import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getDetail } from "../actions";
import './Detail.css'


export default function Detail (){
    
    const dispatch = useDispatch()
    let {idPais} = useParams()
    
    useEffect( () => {
         dispatch(getDetail(idPais))
    },[dispatch, idPais])

    
    let myCountry = useSelector((state) => state.detail);

   return ( <div className="container">
    {
        myCountry && 
        <div className="card">
            <div className="generales">
                        <div className="title">
                            <h1>{myCountry[0].name}</h1>
                        </div>
                        <div className="detailFlag">
                            <img className='imgdetailFlag'src={myCountry[0].flag} alt={`${myCountry[0].name}`}/>
                        </div>
            </div>
            
            <div className="detalles">
                <div className="capital">
                    Capital del país: {myCountry[0].capital}
                </div>
         
                <div className="geografia">
                    Continente: {myCountry[0].region}
                </div>
                <div className="subregion">
                Subregión: {myCountry[0].subregion}
                </div>
                

                <div className="area">
                    Area:  {myCountry[0].area}km2
                </div>
                <div className="people">
                    Población total: {myCountry[0].population}
                </div>
                <div className="activities">
                   

                {myCountry[0].activities.map((a => {

                                    return(
                                    <div>
                                        <div className="activitiesTitle">
                                         <h4> Activities</h4>
                
                                        </div>
                                        <div className="activitiesCard">
                                        <h4>{a.description}</h4>
                                        <h6>{a.season}</h6>
                                        <h6>{a.duration} horas</h6>
                                        <h6>nivel de dificultad: {a.dificulty}</h6>
                                        
                                    </div></div>
               )
                 
                
                 }))}
                  </div> 
            </div>
        </div> 
      
   }

        <NavLink to='/home'><button className="butonVolver">Volver</button></NavLink>
        </div> )
}