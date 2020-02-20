import React from 'react';
import './MovieDetails.scss';


const MovieDetails = ({ movie }) => {

  return (
    <section className="movie-details">
      <h2>{movie.title}</h2>
      <h3>Average Rating: {movie.average_rating}</h3>
      <h3>Release Date: {movie.release_date}</h3
      <p>Summary: {movie.overview}</p>
    </section>
  )
}

export default MovieDetails;

// {
//             "id": 22,
//             "title": "Parasite",
//             "poster_path": "https://image.tmdb.org/t/p/original//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
//             "backdrop_path": "https://image.tmdb.org/t/p/original//TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
//             "release_date": "2019-05-30",
//             "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
//             "average_rating": 4
//         }
