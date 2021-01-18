import {
    GET_TOP_SERIES_ANIME,
    GET_TOP_AIRING_ANIME,
    GET_TOP_UPCOMING_ANIME,
    GET_TOP_TV_SERIES_ANIME,
    GET_TOP_MOVIES_ANIME,
    GET_TOP_OVAS_ANIME,
    GET_TOP_SPECIAL_ANIME,
    GET_MOST_POPULAR_ANIME,
    GET_MOST_FAVORITED_ANIME
} from '../actions/types'

const INITIAL_STATE = {
    loading: true,
    topAnime: []
}

const anime = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TOP_SERIES_ANIME:
            return {
                topAnime: action.payload,
                topTitle: 'Top Series',
                loading: false
            }
        case GET_TOP_AIRING_ANIME:
            return {
                topAnime: action.payload,
                topTitle: 'Top Airing',
                loading: false
            }
        case GET_TOP_UPCOMING_ANIME:
            return {
                topAnime: action.payload,
                topTitle: 'Top Upcoming',
                loading: false
            }
        case GET_TOP_TV_SERIES_ANIME:
            return {
                topAnime: action.payload,
                topTitle: 'Top TV',
                loading: false
            }
        case GET_TOP_MOVIES_ANIME:
            return {
                topAnime: action.payload,
                topTitle: 'Top Movies',
                loading: false
            }
        case GET_TOP_OVAS_ANIME:
            return {
                topAnime: action.payload,
                topTitle: 'Top OVAs',
                loading: false
            }
        case GET_TOP_SPECIAL_ANIME:
            return {
                topAnime: action.payload,
                topTitle: 'Top Special',
                loading: false
            }
        case GET_MOST_POPULAR_ANIME:
            return {
                topAnime: action.payload,
                topTitle: 'Most Popular',
                loading: false
            }
        case GET_MOST_FAVORITED_ANIME:
            return {
                topAnime: action.payload,
                topTitle: 'Most Favorited',
                loading: false
            }
        default:
            return state
    }
}

export default anime