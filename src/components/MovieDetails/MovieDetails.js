import React from 'react';
import './MovieDetails.scss';


const MovieDetails = ({ movie }) => {
  const sectionStyle = {
    backgroundImage: `url(${movie.backdrop_path})`
  }
  console.log(movie);
  return (
    <section className="movie-details" style={ sectionStyle }>
      <h1 className='movie-title-detail'>{movie.title}</h1>
      <div className='movie-detail-card'>
        <img src={movie.poster_path} alt='movie poster' className='movie-poster-detail' />
        <h2 className='detail-title'>{movie.title}</h2>
        <h3 className='detail-rating'>Average Rating: {movie.average_rating}</h3>
        <h3 className='detail-rating'>Your Rating</h3>
        <h3 className='detail-release'>Release Date: {movie.release_date}</h3>
        <p className='detail-summary'>Overview: {movie.overview}</p>
      </div>
    </section>
  )
}

export default MovieDetails;
