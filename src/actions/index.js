export const loadMovies = (movies) => ({ 
    type: 'LOAD_MOVIES',
    movies 
});

export const loginUser = (user) => ({
    type: 'LOGIN_USER',
    user
})

export const logOut = () => ({
    type: 'LOG_OUT',
    user: {}
})

export const loadUserRatings = (ratings) => ({
    type: 'LOAD_RATINGS',
    ratings
})

export const addUserRating = rating => ({
    type: 'ADD_RATING',
    rating
})