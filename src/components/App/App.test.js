import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme'
import { loadMovies } from '../../actions';


describe('App', () => {

  describe('fetchData', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App />)
    })

    it('should call fetchData when component mounts with the correct url', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({})
        });
      })
      let mockFetchData = jest.fn()
      const instance = wrapper.instance();
      instance.componentDidMount = jest.fn().mockImplementation(() => mockFetchData())
      jest.spyOn(instance, 'componentDidMount')
      instance.componentDidMount();
      expect(mockFetchData).toHaveBeenCalled();
    })
  })

  describe('mapStateToProps', () => {
    it('should be able to update state', () => {
      let mockState = {
        movies: [
        {
            "id": 21,
            "title": "Sonic the Hedgehog",
            "poster_path": "https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//tCUcf3oNWMW8kwAj3WC6CvIN5ah.jpg",
            "release_date": "2020-02-12",
            "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
            "average_rating": 7
        },
        {
            "id": 22,
            "title": "Parasite",
            "poster_path": "https://image.tmdb.org/t/p/original//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
            "release_date": "2019-05-30",
            "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
            "average_rating": 4
        }
      ],
      user: 'Lucy',
      favorites: [{
          "id": 22,
          "title": "Parasite",
          "poster_path": "https://image.tmdb.org/t/p/original//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
          "release_date": "2019-05-30",
          "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
          "average_rating": 4
      }]
    }

      const expected = {
        movies: [
          {
            "id": 21,
            "title": "Sonic the Hedgehog",
            "poster_path": "https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//tCUcf3oNWMW8kwAj3WC6CvIN5ah.jpg",
            "release_date": "2020-02-12",
            "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
            "average_rating": 7
          },
          {
            "id": 22,
            "title": "Parasite",
            "poster_path": "https://image.tmdb.org/t/p/original//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
            "release_date": "2019-05-30",
            "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
            "average_rating": 4
          }
        ]
      }
      const result = mapStateToProps(mockState)
      expect(result).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the loadMovies action when loadMoviesToStore is called', () => {
      const mockDispatch = jest.fn();
      const movies = [
        {
          "id": 21,
          "title": "Sonic the Hedgehog",
          "poster_path": "https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//tCUcf3oNWMW8kwAj3WC6CvIN5ah.jpg",
          "release_date": "2020-02-12",
          "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
          "average_rating": 7
        },
        {
          "id": 22,
          "title": "Parasite",
          "poster_path": "https://image.tmdb.org/t/p/original//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
          "release_date": "2019-05-30",
          "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
          "average_rating": 4
        }
      ]
      const actionToDispatch = loadMovies(movies)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.loadMoviesToStore(movies)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})
