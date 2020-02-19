import { moviesReducer } from './movies';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    movies: moviesReducer,
})

export default rootReducer;