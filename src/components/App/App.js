import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import LoadingPage from '../LoadingPage/LoadingPage';

export default class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="app">
        <Nav />
        <LoadingPage />
      </div>
    )
  }
}
