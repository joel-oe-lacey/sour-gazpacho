import React from 'react';
import './CenterMovie.scss';
import { Link } from 'react-router-dom';


const CenterMovie = ({ movie }) => {
  console.log(movie);
  let month;
  const formatDate = movie.release_date.split('-')
  for(var i = 0; i < 13; i++) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    if (formatDate[1] === '10') {
      month = 'October'
    } else if (formatDate[1].includes(0)) {
      if(`0${i}` === formatDate[1]) {
        month = months[i - 1]
      }
    } else {
      if (`${i}` === formatDate[1]) {
        month = months[i - 1]
      }
    }
  }
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
