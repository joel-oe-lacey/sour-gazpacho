import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser, loadUserRatings } from '../../actions';
import './LoginForm.scss'
import { fetchData, fetchDataAlt } from '../../utils/fetchCalls';

//need to edit to create a post request on login
//if successful proceed and post via dispatch 
//if unsuccessful need to display error and prompt for retry 
//how to display loading state in between?

//set up tests for login also. 

export class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            error: '',
            auth: false
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    validateUser = (e, email, password) => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }

        fetchData('https://rancid-tomatillos.herokuapp.com/api/v1/login', options)
            .then(response => response.json())
            .then(data => {
                if(data.user) {
                    fetchDataAlt(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${data.user.id}/ratings`)
                        .then(response => response.json())
                        .then(ratingData => this.props.addUserRatingsToStore(ratingData.ratings))
                    this.props.addUserToStore(data.user) 
                    this.setState({ auth: true })
                }
            })
            .catch(() => {
                this.setState({ error: "Invalid Login" })
            })
    }

    render() {
        if(this.state.auth) {
            return <Redirect to="/" />
        } else {
            return (
                <section className="form-container"> 
                    <form className="form">
                        <h1>Sour Gazpacho</h1>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email..."
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="password"
                            placeholder="Password..."
                            onChange={this.handleChange}
                            required
                        />
                        <h4>{`${this.state.error}`}</h4>
                        <button
                            onClick={(e) => this.validateUser(e, this.state.email, this.state.password)}
                        >
                            Login
                        </button>
                    </form>
                </section>
            )
        }
    }
}

export const mapDispatchToProps = (dispatch) => ({
    addUserToStore: (user) => { dispatch(loginUser(user)) },
    addUserRatingsToStore: (ratings) => { dispatch(loadUserRatings(ratings)) }
})

export default connect(null, mapDispatchToProps)(LoginForm);