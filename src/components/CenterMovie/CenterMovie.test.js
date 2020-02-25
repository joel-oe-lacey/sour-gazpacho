import React from 'react';
import CenterMovie from './CenterMovie.js';
import { shallow } from 'enzyme';
import { mockRandom } from 'jest-mock-random';

describe('CenterMovie', () => {

  beforeEach(() => {
    mockRandom([0.1]);
  })

  it('should match the snapshot', () => {
    let wrapper = shallow(<CenterMovie
      movie={[{
        title:'Parasite',
        poster_path:'https:/image.some.jpg',
        average_rating:5,
        overview:'Movie Summary',
        release_date:'2020-01-12'
      }, {
        title:'Sonic The Hedhehog',
        poster_path:'https:/image.some.jpg',
        average_rating:7,
        overview:'Movie Summary',
        release_date:'2020-10-19'
      }, {
        title:'Charlie\'s Angels',
        poster_path:'https:/image.some.jpg',
        average_rating:7,
        overview:'Movie Summary',
        release_date:'2019-12-10'
      }]}
      />);
      let mockState = {
        currentMovie: {
          title:'Sonic The Hedhehog',
          poster_path:'https:/image.some.jpg',
          average_rating:7,
          overview:'Movie Summary',
          release_date:'2020-10-19'
        }
      }
    wrapper.setState(mockState);
    expect(wrapper).toMatchSnapshot();
  })

  it('should setState with a movie when component mounts', () => {
    let wrapper = shallow(<CenterMovie
      movie={[{
        title:'Parasite',
        poster_path:'https:/image.some.jpg',
        average_rating:5,
        overview:'Movie Summary',
        release_date:'2020-01-12'
      }, {
        title:'Sonic The Hedhehog',
        poster_path:'https:/image.some.jpg',
        average_rating:7,
        overview:'Movie Summary',
        release_date:'2020-10-19'
      }, {
        title:'Charlie\'s Angels',
        poster_path:'https:/image.some.jpg',
        average_rating:7,
        overview:'Movie Summary',
        release_date:'2019-12-10'
      }]}
      />);
    const expected = {
      title:'Charlie\'s Angels',
      poster_path:'https:/image.some.jpg',
      average_rating:7,
      overview:'Movie Summary',
      release_date:'2019-12-10'
    };
    wrapper.instance().componentDidMount();
    expect(wrapper.state('currentMovie')).toEqual(expected);
  })

})
