import { GET_TOP_ANIME_CHARACTERS } from '../actions/types'

const INITIAL_STATE = {
    loading: true,
    topAnimeCharacters: []
}

const topCharacters = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_TOP_ANIME_CHARACTERS:
            return {
                topAnimeCharacters: action.payload,
                loading: false
            }
        default: 
                return state
    }
}

export default topCharacters