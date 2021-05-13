import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class SessionSignupForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fname: 'First name',
            lname: 'Last name',
            email: 'Email',
            password: 'Password'
        }
        // debugger
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    update(field) {
        return (
            e => this.setState({ [field]: e.currentTarget.value })
        )
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.action(this.state);
        this.setState({
            fname: '',
            lname: '',
            email: '',
            password: ''
        });
    }

    demo(e) {
        e.preventDefault();
        // debugger
        const demoUser = {
            fname: "Demo",
            lname: "User",
            email: "demo@trailmix.com",
            password: 'password'
        };

        this.props.login(demoUser);
    }

    render() {
        const { fname, lname, email, password } = this.state;
        const { formType, errors, navLink } = this.props;
        // debugger
        const fnameError = (errors) => {
            if (errors) {
                errors.map((error, idx) => {
                    if (error.includes("Fname")) {
                        return (
                            <ul>
                                <li key={idx}>Name can't be black</li>
                            </ul>
                        )
                    }
                })
            }
        }

        // const passwordError = (errors) => {
        //     if (errors) {
        //         errors.map((error, idx) => {
        //             if (error.includes("Password")) {
        //                 return (
        //                     <ul>
        //                         <li key={idx}>{error}</li>
        //                     </ul>
        //                 )
        //             }
        //         })
        //     } else {
        //         return "";
        //     }
        // };

        const passwordError = (errors ? (
            errors.map((error, idx) => {
                if (error.includes("Password")) {
                    return (
                        <ul>
                            <li key={idx}>{error}</li>
                        </ul>
                    )
                }
            })
        ) : "")

        const isSignup = (formType === 'sign up' ? (

            <div>
                <label className="text-field">
                    <input
                        type="text"
                        value={fname}
                        onChange={this.update('fname')}
                        required
                    />
                </label>
                <br />
                <br />
                <label className="text-field">
                    <input
                        type="text"
                        value={lname}
                        onChange={this.update('lname')}
                        required
                    />
                </label>
                <br />
                <br />
            </div>
        ) : "")


        return (
            <div className="session-form-container">
                <div className="form-card">

                    <br />
                    <form onSubmit={this.handleSubmit}>

                        <p className="form-title">Create your free account now!</p>

                        {isSignup}

                        <label className="text-field">
                            <input
                                type="email"
                                value={email}
                                onChange={this.update('email')}
                                required
                            />
                        </label>
                        <br />
                        <br />
                        <label className="text-field">
                            <input
                                type="password"
                                value={password}
                                onChange={this.update('password')}
                                required
                            />
                        </label>
                        {/* {fnameError} */}
                        {/* {passwordError} */}
                        <br />
                        <br />
                        <button className="login-button">{formType}</button>
                        <br />
                        <br />
                        {/* <p>Alreadt have an account?</p> */}
                        <p className="other-form"> Already have an account? {navLink}</p>

                    </form>

                    {/* <button className="big-head-button" onClick={this.demo}>Demo User</button> */}


                </div>
                <img src="https://images.unsplash.com/photo-1547890860-24c88b77778c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2003&q=80" />

            </div>
        )
    }
}


export default SessionSignupForm;