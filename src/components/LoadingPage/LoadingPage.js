import React from 'react';
import './LoadingPage.scss';

const LoadingPage = () => {
    return (
        <section className="loading">
          <h1 className="loading-header">Loading Movies . . .</h1>
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
    )
}

export default LoadingPage;
