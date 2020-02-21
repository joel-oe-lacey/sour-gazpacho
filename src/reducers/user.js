export const userReducer = (state = {}, action) => {
    console.log('hit', action)
    switch (action.type) {
        case 'LOGIN_USER':
            return action.user;
        case 'LOG_OUT':
            return action.user;
        default:
            return state;
    }
}