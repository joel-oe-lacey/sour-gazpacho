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