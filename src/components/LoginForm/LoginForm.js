import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../actions';
import './LoginForm.scss'

//need to edit to create a post request on login
//if successful proceed and post via dispatch 
//if unsuccessful need to display error and prompt for retry 
//how to display loading state in between?

//set up tests for login also. 

class LoginForm extends Component {
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
            body: JSON.stringify({ email, password }),
        }

        fetch('https://rancid-tomatillos.herokuapp.com/api/v1/login', options)
            .then(response => response.json())
            .then(data => {
                data.error && this.setState({error: data.error})
                if(data.user) {
                    this.props.addUserToStore(data.user) 
                    this.setState({ auth: true })
                }
            })
    }

    render() {
        if(this.state.auth) {
            return <Redirect to="/" />
        } else {
            return (
                <section className="form-container"> 
                    <form className="form">
                        <h1>Please Login</h1>
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

const mapDispatchToProps = (dispatch) => ({
    addUserToStore: (user) => { dispatch(loginUser(user)) }
})

export default connect(null, mapDispatchToProps)(LoginForm);