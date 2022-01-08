import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Detail ({id}){
    const myCountry = useSelector((state) => state.detail);
    const dispatch = useDispatch();
console.log(myCountry)

    // useEffect(() => {
    //     dispatch(getDetail(id))
    // }, [])



   return ( <div>
    {
        myCountry  ?
        <div>
            <h1>{myCountry[0].name}</h1>
            <img src={myCountry[0].flag}/>
           <p>
                 capital: {myCountry[0].capital}
                 subregion: {myCountry[0].subregion}
                 area: {myCountry[0].area}km
                 poblacion: {myCountry[0].population}
                 continent: {myCountry[0].region}
                 activities: {myCountry[0].activities? myCountry[0].activities.map((a => {
                     <div>
                         <h4>{a.description}</h4>
                         <h6>{a.season}</h6>
                         <h6>{a.duration}</h6>
                         <h6>{a.dificulty}</h6>
                         
                     </div>
                 })): null}
           </p>
           <h4> Activities</h4>
        </div>
        :
        <p>no encontrado</p>
   }
 </div> )
}