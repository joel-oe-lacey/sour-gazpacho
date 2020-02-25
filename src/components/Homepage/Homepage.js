import React from 'react';
import './Homepage.scss';
import MovieCard from '../MovieCard/MovieCard'
import PropTypes from 'prop-types'


const Homepage = ({ allMovies }) => {
  let movieData =  allMovies.map(movie => {
    return <MovieCard key={movie.id} title={movie.title} averageRating={movie.average_rating} poster={movie.poster_path} id={movie.id} />
  })

    return (
        <section className="homepage">
          <h1 className='movie-list-title'>Movies by Title</h1>
          <div className='movie-homepage'>{movieData}</div>
        </section>
    )
}

Homepage.propTypes = {
  allMovies: PropTypes.array
}

export default Homepage;
