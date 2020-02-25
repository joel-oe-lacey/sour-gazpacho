import { ratingReducer } from './rating';

describe('ratingReducer', () => {

    it('should have an initial state of an empty array', () => {
        const expected = []
        const result = ratingReducer(undefined, {})

        expect(result).toEqual(expected)
    })

    it('should be able to initially load ratings into state', () => {
        let mockState = []
        
        const ratings = [
                { id: 827, user_id: 21, movie_id: 22, rating: 5 },
                { id: 800, user_id: 21, movie_id: 32, rating: 6 }
            ]

        const mockAction = {
            type: 'LOAD_RATINGS',
            ratings
        }

        const expected = [
                { id: 827, user_id: 21, movie_id: 22, rating: 5 },
                { id: 800, user_id: 21, movie_id: 32, rating: 6 }
            ]

        const result = ratingReducer(mockState, mockAction)

        expect(result).toEqual(expected)
    })

    it('should be able to add movies to state', () => {
        let mockState = [
            { id: 826, user_id: 21, movie_id: 23, rating: 8 },
            { id: 827, user_id: 21, movie_id: 22, rating: 5 }
        ]
  
        const rating = { id: 800, user_id: 21, movie_id: 32, rating: 6 }
        
        const mockAction = {
            type: 'ADD_RATING',
            rating
        }

        const expected = [
                { id: 826, user_id: 21, movie_id: 23, rating: 8 },
                { id: 827, user_id: 21, movie_id: 22, rating: 5 },
                { id: 800, user_id: 21, movie_id: 32, rating: 6 }
            ]

        const result = ratingReducer(mockState, mockAction)

        expect(result).toEqual(expected)
    })
})
