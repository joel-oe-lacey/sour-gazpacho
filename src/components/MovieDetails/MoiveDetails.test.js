import React from 'react';
import MovieDetails from './MovieDetails.js'
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

  beforeEach(() => {
    wrapper = shallow(<MovieDetails
        movie={mockMovie}
      />)
  })

  it('should be an instance of movieDetails', () => {
   expect(wrapper).toMatchSnapshot();
 })

})
