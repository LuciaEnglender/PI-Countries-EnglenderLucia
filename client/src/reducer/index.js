import { GET_COUNTRIES ,
        FILTER_BY_CONTINENTS,
        BUTTONS_TO_ORDER_ALPHA, 
        BUTTONS_TO_ORDER_NUM,
        FILTER_BY_NAME, 
        GET_DETAIL,
        CREATE_ACTIVITY,
        GET_ACTIVITIES,
        FILTER_BY_ACTIVITIES,
        ERROR
        } from '../actions/index'

const initialState = {
    countries : [],
    countriesAux : [],
    detail : [],
    activities: [],
    error : false
}
export default function rootReducer(state = initialState, action){
switch(action.type){
    case GET_COUNTRIES: return {
            ...state,
            countries: action.payload,
            countriesAux: action.payload
        }
    case FILTER_BY_CONTINENTS: {
        const allCountries = state.countriesAux;
        const FilteredByContinent = action.payload === 'all'? allCountries :
                allCountries.filter( p => p.region === action.payload)
        return{
            ...state,
            countries: FilteredByContinent
       }

    }
    case BUTTONS_TO_ORDER_ALPHA:{
        let allCountries2 = state.countriesAux 
        let filteredByAlpha = action.payload === 'cba' ?
            allCountries2.sort(function (a, b) {
                if (a.name < b.name) {
                return 1;
                }
                if (a.name > b.name) {
                return -1;
                }
                return 0;
            }):  
        
        allCountries2.sort(function (a, b) {
                if (a.name > b.name) {
                return 1;
                }
                if (a.name < b.name) {
                return -1;
                }
                return 0;
            }) 
           
        return {
            ...state,
            countries: filteredByAlpha
            };
        }

        case BUTTONS_TO_ORDER_NUM : {
           let allCountries3 = state.countries;
           let filteredByNum = action.payload === 'mas'? 
           allCountries3.sort(function (a, b) {
            if (a.population < b.population) {
            return 1;
            }
            if (a.population > b.population) {
            return -1;
            }
            return 0;
        }):  
        allCountries3.sort(function (a, b) {
            if (a.population > b.population) {
            return 1;
            }
            if (a.population < b.population) {
            return -1;
            }
            return 0;
        }) 
        return {
            ...state,
            countries: filteredByNum
        }
    }
    case FILTER_BY_NAME:{
        return {
            ...state,
            countries: action.payload
        }
    }

    case GET_DETAIL:{
        return {
            ...state,
            detail: action.payload
        }
    }
    case CREATE_ACTIVITY:{
        return {
            ...state,
        }
    }
    case GET_ACTIVITIES:{
        return{
            ...state,
            activities: action.payload
        }
    }
    case FILTER_BY_ACTIVITIES:{
        let allAct = state.activities;
        let filteredAct = allAct.filter(a => a.description === action.payload);
        let countryFiltered = filteredAct.map(c => c.countries)
      
        return{
            ...state,
            countries: countryFiltered[0]
        }
        

    }

    case ERROR: {

        return{
            ...state,
            error: action.payload
        }
    }
    
    default: 
        return {
            state
        }
    }
};