import { moviesReducer } from './movies';
import { userReducer } from './user';
import { ratingReducer } from './rating';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    movies: moviesReducer,
    user: userReducer,
    ratings: ratingReducer
})

export default rootReducer;