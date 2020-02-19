import React, { Component } from 'react';
import { connect } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.scss'


export default class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({ todo: e.target.value });
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
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="Password..."
                        onChange={this.handleChange}
                    />
                    <button
                        //onChange in here 
                        //should hit dispatch to send to store 
                        //needs to wrap in a link.
                    >
                        Login
                    </button>
                </form>
            </section>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     ideas: 
// }