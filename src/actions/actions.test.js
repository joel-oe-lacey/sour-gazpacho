import * as actions from '../actions'


describe('actions', () => {
  it('should have a type of LOAD_MOVIES', () => {
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
    const result = actions.loadMovies(movies)
    const expectedAction = {
      type: 'LOAD_MOVIES',
      movies: movies
    }

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of LOGIN_USER', () => {
    const user = {
      id: 21,
      name: "Lucy",
      email: "lucy@turing.io"
    }
    const result = actions.loginUser(user)
    const expectedAction = {
      type: 'LOGIN_USER',
      user: user
    }

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of LOG_OUT', () => {
    const result = actions.logOut()
    const expectedAction = {
      type: 'LOG_OUT',
      user: {}
    }

    expect(result).toEqual(expectedAction);
  });
});
