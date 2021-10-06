import {combineReducers} from 'redux';
import {movieReducer,movieDetailReducer} from './MovieReducer';

export const reducer = combineReducers({
    movies:movieReducer,
    movieDetail:movieDetailReducer
});