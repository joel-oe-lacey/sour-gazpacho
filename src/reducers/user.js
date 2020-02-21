export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return action.user;
        case 'LOG_OUT':
            return action.user;
        default:
            return state;
    }
}