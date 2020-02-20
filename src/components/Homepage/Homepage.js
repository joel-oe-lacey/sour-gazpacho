import React from 'react';
import './Homepage.scss';
import MovieCard from '../MovieCard/MovieCard'


const Homepage = ({ allMovies }) => {
  let movieData =  allMovies.map(movie => {
    return <MovieCard key={movie.id} title={movie.title} averageRating={movie.average_rating}/>
  })

    return (
        <section className="homepage">{movieData}</section>
    )
}

export default Homepage;
