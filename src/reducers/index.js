import { moviesReducer } from './movies';
import { userReducer } from './user';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    movies: moviesReducer,
    user: userReducer
})

export default rootReducer;