import React from 'react';
import './Homepage.scss';
import MovieCard from '../MovieCard/MovieCard'


const Homepage = ({ allMovies }) => {
  console.log(allMovies);
  let movieData =  allMovies.map(movie => {
    return <MovieCard key={movie.id} title={movie.title} averageRating={movie.average_rating} poster={movie.poster_path}/>
  })

    return (
        <section className="homepage">
          <h1 className='movie-list-title'>Movies by Title</h1>
          {movieData}
        </section>
    )
}

export default Homepage;
