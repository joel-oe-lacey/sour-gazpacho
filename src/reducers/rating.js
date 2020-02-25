export const ratingReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_RATINGS':
            return action.ratings;
        case 'ADD_RATING':
            return [...state, action.rating]
        case 'REMOVE_RATING':
            return action.ratings
        default:
            return state;
    }
}
