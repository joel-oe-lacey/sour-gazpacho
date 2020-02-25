import React from 'react';
import './Homepage.scss';
import MovieCard from '../MovieCard/MovieCard';
import CenterMovie from '../CenterMovie/CenterMovie';
import PropTypes from 'prop-types';
import biscuits from '../../assets/biscuits.png';


const Homepage = ({ allMovies }) => {
  let movieData =  allMovies.map(movie => {
    return <MovieCard key={movie.id} title={movie.title} averageRating={movie.average_rating} poster={movie.poster_path} id={movie.id} />
  })

  let centerMovie = <CenterMovie movie={allMovies}/>
    return (
        <section className="homepage">
          <div className='movie-centerpiece'>{centerMovie}</div>
          <h1 className='movie-list-title'>All Movies</h1>
          <div className='movie-homepage'>{movieData}</div>
          <img className='biscuits' src={ biscuits } />
        </section>
    )
}

Homepage.propTypes = {
  allMovies: PropTypes.array
}

export default Homepage;
