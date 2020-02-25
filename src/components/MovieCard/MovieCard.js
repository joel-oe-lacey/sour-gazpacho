import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.scss';


const MovieCard = ({ id, title, userRating, averageRating, poster }) => {
    return (
        <article className="movie-card">
          <Link to={`/movies/${id}`}><img src={poster} alt='movie poster' className='movie-poster'/></Link>
          <div className='movie-info'>
            <h3 className='movie-title'>{title}</h3>
            <h4 className='movie-rating'>Average Rating: {(averageRating).toFixed(1)}</h4>
            {userRating && <h4 className='movie-rating'>Your Rating: {averageRating}</h4>}
          </div>
        </article>
    )
}

export default MovieCard;
