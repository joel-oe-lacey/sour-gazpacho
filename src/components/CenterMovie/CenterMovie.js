import React from 'react';
import './CenterMovie.scss';
import { Link } from 'react-router-dom';


const CenterMovie = ({ movie }) => {
  return (
    <article className="center-card">
      <div className='image-reflection'>
        <Link to={`/movies/${movie.id}`}><img src={movie.poster_path} alt='movie poster' className='center-poster'/></Link>
        <img src={movie.poster_path} alt='movie poster' className='center-reflection'/>
      </div>
      <div className='center-info'>
      </div>
      <section className='text-box'>
        <h3 className='center-text' id='center-title'>{movie.title}</h3>
        <h4 className='center-text' id='center-rating'>Average Rating: {(movie.average_rating).toFixed(1)}</h4>
        <h4 className='center-text' id='center-date'>{month} {formatDate[2]}, {formatDate[0]}</h4>
        <p className='center-text' id='center-overview'>{movie.overview}</p>
      </section>
    </article>
  )
}

export default CenterMovie
