import React from 'react';
import './MovieCard.scss';


const MovieCard = ({ id, title, averageRating, poster }) => {

    return (
        <article className="movie-card">
          <img src={poster} alt='movie poster' className='movie-poster'/>
          <h3 className='movie-title'>{title}</h3>
          <h4 className='movie-rating'>AverageRating: {averageRating}</h4>
        </article>
    )
}

export default MovieCard;
