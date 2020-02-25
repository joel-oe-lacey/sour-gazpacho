import React, { Component } from 'react';
import './CenterMovie.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CenterMovie extends Component{
  constructor({ movie }) {
    super({ movie })
    this.state = {
      currentMovie: movie[Math.floor(Math.random() * 20)]
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ currentMovie: this.props.movie[Math.floor(Math.random() * 20)] }), 6000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    let month;
    const formatDate = this.state.currentMovie.release_date.split('-')
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
      <Link to={`/movies/${this.state.currentMovie.id}`}><img src={this.state.currentMovie.poster_path} alt='movie poster' className='center-poster'/></Link>
      <img src={this.state.currentMovie.poster_path} alt='movie poster' className='center-reflection'/>
      </div>
      <div className='center-info'>
      </div>
      <section className='text-box'>
      <h3 className='center-text' id='center-title'>{this.state.currentMovie.title}</h3>
      <h4 className='center-text' id='center-rating'>Average Rating: {(this.state.currentMovie.average_rating).toFixed(1)}</h4>
      <h4 className='center-text' id='center-date'>{month} {formatDate[2]}, {formatDate[0]}</h4>
      <p className='center-text' id='center-overview'>{this.state.currentMovie.overview}</p>
      </section>
      </article>
    )
  }
}

CenterMovie.propTypes = {
  movie: PropTypes.object
}

export default CenterMovie
