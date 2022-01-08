import React from "react";
import { getActivities , filterByActivities} from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import './FilterBy.css'

export default function FilterByActivity(){
    const dispatch = useDispatch();
    const allActivities = useSelector((state) => state.activities);

    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch]);

    function handleFilterByAct(e){
        e.preventDefault();
        dispatch(filterByActivities(e.target.value))
    }
    return (
        <div>
            <select onChange={(e) => handleFilterByAct(e)} className="select">
                <option>--------------</option>
                {
                    allActivities && allActivities.map( a => {
                        return <option value={a.description}>{a.description}</option>
                    })
                }
            </select>
        </div>
    )

}