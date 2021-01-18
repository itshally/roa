import {GET_CHARACTER_INFO, GET_CHARACTER_PHOTOS} from '../actions/types'

const INITIAL_STATE = {
    loading: true,
    info: [],
    photos: []
}

const character = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_CHARACTER_INFO:
            return {
                ...state,
                loading: false,
                info: action.payload
            }
        case GET_CHARACTER_PHOTOS:
            return {
                ...state,
                photos: action.payload
            }
        default:
            return state
    }
}

export default character