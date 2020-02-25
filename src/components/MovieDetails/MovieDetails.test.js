import React from 'react';
import { MovieDetails, mapStateToProps, mapDispatchToProps, addRating, removeRating } from './MovieDetails.js';
import { shallow } from 'enzyme';
import { updateStore, addUserRating } from '../../actions';


describe('MovieDetails', () => {
let wrapper, instance, mockRating, mockOptions, mockResponse, mockProps;

let mockMovie = {
  id: 22,
  title: 'Parasite',
  poster_path: 'https://image.some.jpg',
  backdrop_path: 'https://image.another.jpg',
  release_date: '2019-05-30',
  overview: 'All unemployed, Ki-taek\'s family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.',
  average_rating: 5
}
let mockRatings = [
     { id: 826, user_id: 21, movie_id: 23, rating: 8 },
     { id: 827, user_id: 21, movie_id: 22, rating: 5 }
   ]

  beforeEach(() => {
    wrapper = shallow(<MovieDetails
        movie={mockMovie}
        ratings={mockRatings}
        // double check with Eric
      />)
  })

  it('should be an instance of movieDetails', () => {
   expect(wrapper).toMatchSnapshot();
 })

 describe('mapStateToProps', () => {
    it('should return an object with a userId and ratings', () => {
      const mockState = {
        movies: [{id: 1, name: 'Parasite'}, {id: 2, name: 'Sonic'}, {id: 3, name: 'Charlies Angels'}],
        user: { id: 21, name: 'Lucy' },
        ratings: [
             { id: 826, user_id: 21, movie_id: 23, rating: 8 },
             { id: 827, user_id: 21, movie_id: 22, rating: 5 }
           ]
      }
      const expected = {
        userId: 21,
        ratings: mockRatings
      }
      const mappedProps = mapStateToProps( mockState );
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('class methods', () => {

    beforeEach(() => {
      mockRating = '5'
      mockProps = {
        movie: {
          id: 21,
          title: "Sonic the Hedgehog",
          poster_path: "https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
          backdrop_path: "https://image.tmdb.org/t/p/original//tCUcf3oNWMW8kwAj3WC6CvIN5ah.jpg",
          release_date: "2020-02-12",
          overview: "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
          average_rating: 7.333333333333333,
        },
        userId: 21,
        ratings: [
        {
          id: 826,
          user_id: 21,
          movie_id: 21,
          rating: 8,
          created_at: "2020-02-23T22:01:31.515Z",
          updated_at: "2020-02-23T22:01:31.515Z"
        }, {
          id: 881,
          user_id: 21,
          movie_id: 25,
          rating: 6,
          created_at: "2020-02-24T06:21:04.738Z",
          updated_at: "2020-02-24T06:21:04.738Z"

        }, {
          id: 883,
          user_id: 21,
          movie_id: 22,
          rating: 4,
          created_at: "2020-02-24T06:23:01.718Z",
          updated_at: "2020-02-24T06:23:01.718Z"
        }]
      }
    wrapper = shallow(<MovieDetails
      {...mockProps}
      />)
      instance = wrapper.instance()
      mockOptions = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movie_id: instance.props.movie.id, rating: parseInt(mockRating) }),
      }
      mockResponse = { rating: {user_id: 21, movie_id: 19, rating: 5} }
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      })
    })

    describe('addRating', () => {

      it('should call fetch with the correct url', () => {
        instance.addRating(mockRating);
        expect(window.fetch).toHaveBeenCalledWith(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${instance.props.userId}/ratings`, mockOptions);
        });

      it('should call setRating', () => {
        let mockSetRating = jest.fn()
        const instance = wrapper.instance();
        instance.addRating = jest.fn().mockImplementation(() => mockSetRating())
        let spy = jest.spyOn(instance, 'addRating')
        instance.addRating();
        expect(mockSetRating).toHaveBeenCalled();
        })
      })

    describe('setRating', () => {
      it('should update state', () => {
        expect(wrapper.state('userRating')).toEqual(0)
        instance.setRating(mockResponse)
        expect(wrapper.state('userRating')).toEqual(5)
      })
    })

    it('should update the ratings array when called', () => {
      const expected = [ {
        id: 826,
        user_id: 21,
        movie_id: 21,
        rating: 8,
        created_at: "2020-02-23T22:01:31.515Z",
        updated_at: "2020-02-23T22:01:31.515Z"
      }, {
        id: 881,
        user_id: 21,
        movie_id: 25,
        rating: 6,
        created_at: "2020-02-24T06:21:04.738Z",
        updated_at: "2020-02-24T06:21:04.738Z"

      }, {
        id: 883,
        user_id: 21,
        movie_id: 22,
        rating: 4,
        created_at: "2020-02-24T06:23:01.718Z",
        updated_at: "2020-02-24T06:23:01.718Z"
      },
      { user_id: 21, movie_id: 19, rating: 5 } ]
      instance.setRating(mockResponse)
      expect(instance.props.ratings).toEqual(expected)
    })
  })

  describe('removeRating', () => {
    it('should call fetch with the correct url', () => {
      const mockDeleteOptions = {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        },
      }
      const mockRatingToRemove = instance.props.ratings[0]
      instance.removeRating(instance.props.ratings, instance.props.movie, instance.props.userId);
      expect(window.fetch).toHaveBeenCalledWith(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${parseInt(instance.props.userId)}/ratings/${mockRatingToRemove.id}`, mockDeleteOptions);
      });

    it('should update state', () => {
      const newMockResponse = { rating: {user_id: 21, movie_id: 21, rating: 4} }
      expect(instance.state.userRating).toEqual(0)
      instance.setRating(newMockResponse)
      expect(instance.state.userRating).toEqual(4)
      instance.removeRating(instance.props.ratings, instance.props.movie, instance.props.userId);
      expect(wrapper.state('userRating')).toEqual(0)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the updateStore action when updateRatingsInStore is called', () => {
      const mockDispatch = jest.fn();
      let mockRatings = [
           { id: 826, user_id: 21, movie_id: 23, rating: 8 },
           { id: 827, user_id: 21, movie_id: 22, rating: 5 }
         ]
      const actionToDispatch = updateStore(mockRatings)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.updateRatingsInStore(mockRatings)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

  it('should call dispatch with the addUserRating action when addRatingToStore is called', () => {
    const mockDispatch = jest.fn();
    let mockRating = { id: 827, user_id: 21, movie_id: 22, rating: 5 }
    const actionToDispatch = addUserRating(mockRatings)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.addRatingToStore(mockRatings)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})
