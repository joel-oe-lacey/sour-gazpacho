import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../actions';
import bloodSplatter from '../../assets/blood-splatter.png';

export const Nav = ({ user, logOutFromStore }) => {
    return (
        <nav className="nav">
            {
                user.id ? <Link to="/"><button onClick={logOutFromStore}>Log Out</button></Link> : <Link to="/login"><button>Login</button></Link>
            }
            <h1>Sour Gazpacho</h1>
            <img src={bloodSplatter} alt='kill bill style blood splatter' id='blood-splatter'/>
        </nav>
    )
}

export const mapStateToProps = state => ({
    user: state.user
})

export const mapDispatchToProps = dispatch => ({
    logOutFromStore: () => { dispatch(logOut()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
