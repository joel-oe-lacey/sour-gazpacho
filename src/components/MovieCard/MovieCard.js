import React from 'react';
import './MovieCard.scss';


const MovieCard = ({ id, title, userRating, averageRating, poster }) => {
    return (
        <article key={id} className="movie-card">
          <img src={poster} alt='movie poster' className='movie-poster'/>
          <h3 className='movie-title'>{title}</h3>
          {userRating && <h4 className='movie-rating'>Your Rating: {averageRating}</h4>}
          <h4 className='movie-rating'>Average Rating: {averageRating}</h4>
        </article>
    )
}

export default MovieCard;
