import React from 'react';
import MovieCard from './MovieCard.js';
import { shallow } from 'enzyme';

describe('MovieCard', () => {
let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieCard
      id={22}
      title='Parasite'
      poster='https:/image.some.jpg'
      averageRating={5.0}
      userRating={null}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

})
