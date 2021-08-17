import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class SessionSignupForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: ''
        }
        // debugger
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demo = this.demo.bind(this);
    }

    update(field) {
        return (
            e => this.setState({ [field]: e.currentTarget.value })
        )
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.action(this.state);
        // this.props.action(this.state).then(this.props.login(this.state));
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
        // console.log(this.props.login);
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
                        className="input-text"
                        type="text"
                        value={fname}
                        placeholder=" Firstname"
                        onChange={this.update('fname')}
                        required
                    />
                </label>
                <br />

                <label className="text-field">
                    <input
                        className="input-text"
                        type="text"
                        placeholder=" Lastname"
                        value={lname}
                        onChange={this.update('lname')}
                        required
                    />
                </label>
                <br />

            </div>
        ) : "")


        return (
            <div className="session-form-container">
                <div className="form-card">

                    <br />
                    <form className="signup-form" onSubmit={this.handleSubmit}>
                        <div>
                            <p className="form-title">Create your free account now!</p>
                        </div>

                        {isSignup}
                        <div className="email-input">
                            <label className="text-field">
                                <input 
                                    className="input-text"
                                    type="email"
                                    placeholder=" Email"
                                    value={email}
                                    onChange={this.update('email')}
                                    required
                                />
                            </label>
                        </div>
                        <br />
                        <div className="password-input">
                            <label className="text-field">
                                <input 
                                    className="input-text"
                                    type="password"
                                    placeholder=" Password"
                                    value={password}
                                    onChange={this.update('password')}
                                    required
                                />
                            </label>
                        </div>
                        {/* {fnameError} */}
                        {/* {passwordError} */}
                        <br />
                        <div>
                            <button className="signup-button">{formType}</button>
                        </div>
                        {/* <p>Alreadt have an account?</p> */}
                        <div className="lower-text">
                            <p className="other-form"> Already have an account? {navLink}</p>
                            <div className="other-form" > Try as a demo user <a onClick={this.demo}>Demo User</a></div>
                        </div>

                    </form>



                </div>
                <img src="https://images.unsplash.com/photo-1547890860-24c88b77778c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2003&q=80" />

            </div>
        )
    }
}


export default SessionSignupForm;