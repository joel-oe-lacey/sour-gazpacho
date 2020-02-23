import { moviesReducer } from './movies';

describe('moviesReducer', () => {

  it('should have an initial state of an empty array', () => {
    const expected = []
    const result = moviesReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should be able to add movies to state', () => {
    const mockState = [
    {
        "id": 21,
        "title": "Sonic the Hedgehog",
        "poster_path": "https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//tCUcf3oNWMW8kwAj3WC6CvIN5ah.jpg",
        "release_date": "2020-02-12",
        "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
        "average_rating": 7
    },

  ]
    const movies = [
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
    const mockAction = {
      type: 'LOAD_MOVIES',
      movies
    }
    const expected = [
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
    const result = moviesReducer(mockState, mockAction)

    expect(result).toEqual(expected)
  })
})
