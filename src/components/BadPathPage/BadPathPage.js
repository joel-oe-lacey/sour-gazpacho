import React from 'react';
import './BadPathPage.scss';
import { Link } from 'react-router-dom';


const BadPathPage = () => {
    return (
      <main>
        <Link to="/"><button>Homepage</button></Link>
        <h1>PAGE NOT FOUND . . .</h1>
      </main>
    )
}

export default BadPathPage;
