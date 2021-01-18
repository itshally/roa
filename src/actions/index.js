import axios from 'axios'
import { 
    GET_TOP_SERIES_ANIME,
    GET_TOP_AIRING_ANIME,
    GET_TOP_UPCOMING_ANIME,
    GET_TOP_TV_SERIES_ANIME,
    GET_TOP_MOVIES_ANIME,
    GET_TOP_OVAS_ANIME,
    GET_TOP_SPECIAL_ANIME,
    GET_MOST_POPULAR_ANIME,
    GET_MOST_FAVORITED_ANIME,
    GET_SEASONAL_ANIME,
    GET_TOP_ANIME_CHARACTERS,
    GET_CHARACTER_INFO,
    GET_CHARACTER_PHOTOS
 } from './types'


/* ------------------------ all anime list by ranking ----------------------- */

export const getTopSeriesAnime = (page_number) => {
    return (dispatch) => {
        axios.get(`https://api.jikan.moe/v3/top/anime/${page_number}`)
            .then( response => {
                const data = response.data
                
                dispatch({
                    type: GET_TOP_SERIES_ANIME,
                    payload: data
                })
            })
            .catch( error => console.log(error))
    }
}

export const getTopAiringAnime = (page_number) => {
    return (dispatch) => {
        axios.get(`https://api.jikan.moe/v3/top/anime/${page_number}/airing`)
            .then( response => {
                const data = response.data
                dispatch({
                    type: GET_TOP_AIRING_ANIME,
                    payload: data
                })
            })
            .catch( error => console.log(error))
    }
}

export const getTopUpcomingAnime = (page_number) => {
    return (dispatch) => {
        axios.get(`https://api.jikan.moe/v3/top/anime/${page_number}/upcoming`)
            .then( response => {
                const data = response.data
                dispatch({
                    type: GET_TOP_UPCOMING_ANIME,
                    payload: data
                })
            })
            .catch( error => console.log(error))
    }
}

export const getTopTVSeriesAnime = (page_number) => {
    return (dispatch) => {
        axios.get(`https://api.jikan.moe/v3/top/anime/${page_number}/tv`)
            .then( response => {
                const data = response.data
                dispatch({
                    type: GET_TOP_TV_SERIES_ANIME,
                    payload: data
                })
            })
            .catch( error => console.log(error))
    }
}

export const getTopMoviesAnime = (page_number) => {
    return (dispatch) => {
        axios.get(`https://api.jikan.moe/v3/top/anime/${page_number}/movie`)
            .then( response => {
                const data = response.data
                dispatch({
                    type: GET_TOP_MOVIES_ANIME,
                    payload: data
                })
            })
            .catch( error => console.log(error))
    }
}

export const getTopOVAAnime = (page_number) => {
    return (dispatch) => {
        axios.get(`https://api.jikan.moe/v3/top/anime/${page_number}/ova`)
            .then( response => {
                const data = response.data
                dispatch({
                    type: GET_TOP_OVAS_ANIME,
                    payload: data
                })
            })
            .catch( error => console.log(error))
    }
}

export const getTopSpecialAnime = (page_number) => {
    return (dispatch) => {
        axios.get(`https://api.jikan.moe/v3/top/anime/${page_number}/special`)
            .then( response => {
                const data = response.data
                dispatch({
                    type: GET_TOP_SPECIAL_ANIME,
                    payload: data
                })
            })
            .catch( error => console.log(error))
    }
}

export const getMostPopularAnime = (page_number) => {
    return (dispatch) => {
        axios.get(`https://api.jikan.moe/v3/top/anime/${page_number}/bypopularity`)
            .then( response => {
                const data = response.data
                dispatch({
                    type: GET_MOST_POPULAR_ANIME,
                    payload: data
                })
            })
            .catch( error => console.log(error))
    }
}

export const getMostFavoritedAnime = (page_number) => {
    return (dispatch) => {
        axios.get(`https://api.jikan.moe/v3/top/anime/${page_number}/favorite`)
            .then( response => {
                const data = response.data
                dispatch({
                    type: GET_MOST_FAVORITED_ANIME,
                    payload: data
                })
            })
            .catch( error => console.log(error))
    }
}

/* ----------------------------- seasonal anime ----------------------------- */

export const getSeasonalAnime = (year, season) => {
    return (dispatch) => {
        axios.get(`https://api.jikan.moe/v3/season/${year}/${season}`)
            .then( response => {
                const data = response.data
                dispatch({
                    type: GET_SEASONAL_ANIME,
                    payload: data
                })
            })
            .catch( error => console.log(error))
    }
}

/* -------------------------- top anime characters -------------------------- */

export const getTopAnimeCharacters = () => {
    return (dispatch) => {
        axios.get(`https://api.jikan.moe/v3/top/characters`)
            .then( response => {
                const data = response.data
                dispatch({
                    type: GET_TOP_ANIME_CHARACTERS,
                    payload: data
                })
            })
            .catch( error => console.log(error))
    }
}

/* ----------------------------- character info ----------------------------- */

export const getCharacterInfo = (id) => {
    return (dispatch) => {
        axios.get(`https://api.jikan.moe/v3/character/${id}`)
            .then( response => {
                const data = response.data
                dispatch({
                    type: GET_CHARACTER_INFO,
                    payload: data
                })
            })
            .catch( error => console.log(error))
    }
}

export const getCharacterPhotos = (id) => {
    return (dispatch) => {
        axios.get(`https://api.jikan.moe/v3/character/${id}/pictures`)
            .then( response => {
                const data = response.data
                dispatch({
                    type: GET_CHARACTER_PHOTOS,
                    payload: data
                })
            })
            .catch( error => console.log(error))
    }
}