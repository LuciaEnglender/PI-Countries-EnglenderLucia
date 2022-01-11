

const axios = require('axios')


export const GET_COUNTRIES= 'GET_COUNTRIES';
export const FILTER_BY_CONTINENTS = 'FILTER_BY_CONTINENTS'; 
export const BUTTONS_TO_ORDER_ALPHA = 'BUTTONS_TO_ORDER_ALPHA'
export const BUTTONS_TO_ORDER_NUM ='BUTTONS_TO_ORDER_NUM'
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const GET_DETAIL = 'GET_DETAIL';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const GET_ACTIVITIES ='GET_ACTIVITIES';
export const FILTER_BY_ACTIVITIES ='FILTER_BY_ACTIVITIES';
export const ERROR = 'ERROR';

export function getCountries(){
    return async function (dispatch){
        const json = await axios.get('http://localhost:3001/countries');
        console.log(json.data)
        return dispatch({
            type : 'GET_COUNTRIES',
            payload: json.data
        })
    }
}

export function filterByContinents(payload){
    return {
        type: 'FILTER_BY_CONTINENTS',
        payload
    }
}

export function buttonsToOrderAlpha(payload){
    return {
        type: 'BUTTONS_TO_ORDER_ALPHA',
        payload
    }
}

export function buttonsToOrderNum(payload){
    return {
        type: 'BUTTONS_TO_ORDER_NUM',
        payload
    }
}

export function filterByName(payload){
    return async function (dispatch){
        try {
            const json = await axios.get(`http://localhost:3001/countries?name=${payload}`)

            return dispatch({
                type : 'FILTER_BY_NAME',
                payload : json.data
            })
        } catch (error) {
          
           return error
        }
    }
}

export function getDetail(id){
    return async function (dispatch){
        try{
            const json = await axios.get(`http://localhost:3001/countries/${id}`)
        
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })

           
        }catch(e){
            console.log(e)
        }
    }
}

export function createActivity(payload){
    return async function (dispatch){
       try{
        var json = await axios.post('http://localhost:3001/activity', payload);
        return json.data
        } catch(e) {
            console.log(e)
        }
    }
}

export function getActivities(payload){
    return async function (dispatch){
        try {
            var json = await axios.get('http://localhost:3001/activity');
            return dispatch({
                type: 'GET_ACTIVITIES',
                payload: json.data
            })
        } catch (error) {
            
        }
    }
}

export function filterByActivities(payload){
    return {
        type: 'FILTER_BY_ACTIVITIES',
        payload
    }
}