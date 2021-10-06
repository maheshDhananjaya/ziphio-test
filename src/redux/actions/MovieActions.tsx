import {ActionType} from '../constants/ActionType';


export const getMovie = (movies:[]) => {
    return {
        type:ActionType.GET_MOVIE,
        payload:movies
    }
}

export const getMovieDetails = (movieDetails:{}) => {
    return {
        type:ActionType.SELECTED_MOVIE,
        payload:movieDetails
    }
}