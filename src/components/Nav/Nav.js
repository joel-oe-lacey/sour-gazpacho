import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../actions';
import bloodSplatter from '../../assets/blood-splatter.png';
import PropTypes from 'prop-types'

export const Nav = ({ user, logOutFromStore }) => {
    return (
        <nav className="nav">
            {
                user.id ? <Link to="/" className="nav-link" onClick={logOutFromStore}>Log Out</Link> : <Link to="/login" className="nav-link" onClick={logOutFromStore}>Login</Link>
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

Nav.propTypes = {
  user: PropTypes.object,
  logOutFromStore: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
