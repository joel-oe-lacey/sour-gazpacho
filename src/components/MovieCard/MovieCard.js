import React from 'react';
import './MovieCard.scss';


const MovieCard = ({ id, title, averageRating }) => {


    return (
        <article className="movie-card">
          <h3>Title: {title}</h3>
          <h4>AverageRating: {averageRating}</h4>
        </article>
    )
}

export default MovieCard;
