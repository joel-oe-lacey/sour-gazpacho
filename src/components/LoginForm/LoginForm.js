import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions';
import './LoginForm.scss'


class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
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
                    <Link to="/"><button
                        onClick={() => this.props.addUserToStore({
                            email: this.state.email,
                            password: this.state.password
                        })}
                    >
                        Login
                    </button></Link>
                </form>
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addUserToStore: (user) => { dispatch(loginUser(user)) }
})

export default connect(null, mapDispatchToProps)(LoginForm);