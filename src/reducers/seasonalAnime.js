import {GET_SEASONAL_ANIME} from '../actions/types'

const INITIAL_STATE = {
    loading: true,
    seasonal: []
}

const seasonalAnime = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_SEASONAL_ANIME:
            return {
                ...state,
                loading: false,
                seasonal: action.payload
            }
        default: 
            return state
    }
}

export default seasonalAnime