import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './MovieCard.scss';
import PropTypes from 'prop-types';


export const MovieCard = ({ id, title, averageRating, poster, userRating }) => {
    const mapRating = userRating.find(rating => rating.movie_id === id)

    return (
        <article className="movie-card">
        <Link to={`/movies/${id}`} className='movie-poster'><img src={poster} alt='movie poster' className='movie-poster'/></Link>
          <div className='movie-info'>
            <h3 className='movie-title'>{title}</h3>
            <h4 className='movie-rating'>Average Rating: {(averageRating).toFixed(1)}</h4>
            {mapRating && <h4 className='movie-rating'>{`Your Rating: ${mapRating.rating}`}</h4>} 
          </div>
        </article>
    )
}

export const mapStateToProps = state => ({
  userRating: state.ratings
})

export default connect(mapStateToProps)(MovieCard);
PropTypes.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  userRating: PropTypes.string,
  averageRating: PropTypes.string,
  poster: PropTypes.string
}