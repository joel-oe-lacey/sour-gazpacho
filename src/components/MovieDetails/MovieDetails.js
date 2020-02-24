import React, { Component } from 'react';
import './MovieDetails.scss';
import { connect } from 'react-redux';
import { render } from 'enzyme';
import { fetchData } from '../../utils/fetchCalls'
import { Link } from 'react-router-dom';

class MovieDetails extends Component{
  constructor() {
    super()
    this.state = {
      userRating: 0
    }
  }

  addRating = (rating) => {
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movie_id: this.props.movie.id, rating: parseInt(rating) }),
    }
    fetchData(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${this.props.userId}/ratings`, options)
      .then(response => response.json())
      .then(rating => this.props.ratings.push(rating.rating))
      .then(data => this.setState({ userRating: data }))
  }

  removeRating = (ratings, movie, userId) => {
    let ratingToRemove = ratings.find(rating => rating.movie_id === movie.id)
    let ratingIndex = ratings.indexOf(ratingToRemove)

    const options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetchData(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${parseInt(userId)}/ratings/${ratingToRemove.id}`, options)
      .then(() => ratings.splice(ratingIndex, 1))
      .then(() => this.setState({ userRating: 0 }))
  }

  render() {
    let { movie, userId, ratings } = this.props;
    let month;
    const sectionStyle = {
      backgroundImage: `url(${movie.backdrop_path})`
    }
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

    const mapRating = ratings.find(rating => rating.movie_id === movie.id)

    return (
      <section className="movie-details" style={ sectionStyle }>
        <h1 className='movie-title-detail'>{movie.title}</h1>
        <div className='movie-detail-card'>
          <img src={movie.poster_path} alt='movie poster' className='movie-poster-detail' />
          <h2 className='detail-title'>{movie.title}</h2>
          <h3 className='detail-rating'>Average Rating: {Math.floor(movie.average_rating)}</h3>
          {mapRating && this.props.userId &&
            <section>
              <h3 className='detail-rating'>{`Your Rating: ${mapRating.rating}`}</h3>
              <button onClick={ (event) => this.removeRating(ratings, movie, userId) } >Delete Rating</button>
            </section>}
          {!mapRating && this.props.userId &&
            <select name="rating" id="rating" onChange={(event) => this.addRating(event.target.value)}>
              <option name="rate" value="">Add Rating</option>
              <option name="rate" value="1">1</option>
              <option name="rate" value="2">2</option>
              <option name="rate" value="3">3</option>
              <option name="rate" value="4">4</option>
              <option name="rate" value="5">5</option>
              <option name="rate" value="6">6</option>
              <option name="rate" value="7">7</option>
              <option name="rate" value="8">8</option>
              <option name="rate" value="9">9</option>
              <option name="rate" value="10">10</option>
            </select>}
          <h3 className='detail-release'>Release Date: {month} {formatDate[2]}, {formatDate[0]}</h3>
          <p className='detail-summary'>Overview: {movie.overview}</p>
        </div>
       <div className='detail-btns'>
        <Link className='movie-btn' to={`/movies/${movie.id-1}`}>See Previous Movie</Link>
        <Link className='movie-btn' to='/'>Go Back to All Movies</Link>
        <Link
         className='movie-btn' to={`/movies/${movie.id+1}`}>See Next Movie</Link>
      </div>
      </section>
    )
  }
}

//make a post on rating
//post returns rating, add that rating into store via dispatch
//does component need to be stateful?




const mapStateToProps = state => ({
  userId: state.user.id,
  ratings: state.ratings
})

export default connect(mapStateToProps)(MovieDetails);
