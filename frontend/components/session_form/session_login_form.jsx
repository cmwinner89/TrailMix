import React from 'react';

class SessionLoginForm extends React.Component {

    constructor(props) {
        super(props);
        // debugger
        this.state = {
            email: 'Email',
            password: 'Password'
        }

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

        this.setState({
            email: '',
            password: ''
        });
    }

    demo(e) {
        e.preventDefault();

        const demoUser = {
            email: "demo@trailmix.com",
            password: 'password'
        };

        this.props.action(demoUser);
    }

    render() {
        const { email, password } = this.state;
        const { formType, navLink } = this.props;
        // debugger
        return (
            <div className="session-form-container">
                <div className="form-card">
                    {/* <h2>{formType}</h2> */}
                    {/* <h1>YO FROM LOGIN FORM</h1> */}
                    <form onSubmit={this.handleSubmit}>

                        <p className="form-title">Log in here and begin your journey</p>
                        <label className="text-field">
                        <input
                                type="email"
                                value={email}
                                onChange={this.update('email')}
                            />
                        </label>
                        <br />
                        <br />
                        <label className="text-field">
                        <input
                                type="password"
                                value={password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <br />
                        <br />
                        <button className="login-button">{formType}</button>
                        <br />
                        <button className="big-head-button" onClick={this.demo}>Demo User</button>
                        <p className="other-form">Don't have an account? {navLink}</p>
                    </form>
        
                </div>
                <img src="https://images.unsplash.com/photo-1547890860-24c88b77778c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2003&q=80" />
            </div>
        )
    }
}


export default SessionLoginForm;