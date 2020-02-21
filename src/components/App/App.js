import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import LoadingPage from '../LoadingPage/LoadingPage';
import Homepage from '../Homepage/Homepage';
import LoginForm from '../LoginForm/LoginForm';
import MovieDetails from '../MovieDetails/MovieDetails'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { loadMovies } from '../../actions';
import { fetchData } from '../../utils/fetchCalls'

class App extends Component {
  componentDidMount() {
    fetchData('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
      .then(response => response.json())
      .then(movieData => {
        this.props.loadMoviesToStore(movieData.movies)
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/login" component={LoginForm} />
        <Route exact path='/' render={() => {
          return (
            <section>
              <Nav />
              {!this.props.movies.length && <LoadingPage />}
              {this.props.movies.length && <Homepage allMovies={this.props.movies} />}
            </section>
          )}
        } />
        <Route exact path='/movies/:id' render={({ match }) => {
          const movieData = this.props.movies.find(movie => movie.id === parseInt(match.params.id))
          return (
            <section>
            <Nav /><MovieDetails movie={movieData} />
            </section>
          )}
        } />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadMoviesToStore: (movies) => { dispatch(loadMovies(movies)) }
});

const mapStateToProps = state => ({
  movies: state.movies,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
