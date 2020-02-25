import React from 'react';
import CenterMovie from './CenterMovie.js';
import { shallow } from 'enzyme';

describe('CenterMovie', () => {
let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CenterMovie
      movie={{
        title:'Parasite',
        poster_path:'https:/image.some.jpg',
        average_rating:5,
        overview:'Movie Summary',
        release_date:'2020-01-12'
      }}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

})
