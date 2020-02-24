import React from 'react';
import { MovieDetails, mapStateToProps } from './MovieDetails.js';
import { shallow } from 'enzyme';

describe('MovieDetails', () => {
let wrapper;
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

})
