export const ratingReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_RATINGS':
            return action.ratings;
        default:
            return state;
    }
}