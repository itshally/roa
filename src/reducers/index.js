import { combineReducers } from 'redux'
import anime from './anime'
import seasonalAnime from './seasonalAnime'
import topCharacters from './topCharacters'
import character from './character'

export default combineReducers({
    anime: anime,
    seasonalAnime: seasonalAnime,
    topCharacters: topCharacters,
    character: character
})