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
            if(errors) {
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
        ): "")

        const isSignup = (formType === 'sign up' ? (
            <div>
                <label className="text-field">First Name:
                        <input
                        type="text"
                        value={fname}
                        onChange={this.update('fname')}
                        required
                    />
                </label>
                <br />
                <br />
                <label className="text-field">Last Name:
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
            <div className="session-form ">
                <h3>{formType}</h3>

                <form onSubmit={this.handleSubmit}>
                    
                    {isSignup}

                    <label className="text-field">Email:
                        <input
                            type="email"
                            value={email}
                            onChange={this.update('email')}
                            required
                        />
                    </label>
                    <br />
                    <br />
                    <label className="text-field">Password:
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
                    <button className="big-head-button">{formType}</button>
                </form>
                <br/>
                {/* <button className="big-head-button" onClick={this.demo}>Demo User</button> */}
                <Link to="/">Home</Link>
                <p>{navLink}</p>
            </div>
        )
    }
}


export default SessionSignupForm;