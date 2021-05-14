import React from 'react';

class SessionLoginForm extends React.Component {

    constructor(props) {
        super(props);
        // debugger
        this.state = {
            email: '',
            password: ''
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
                <div className="login-form-card">
                    {/* <h2>{formType}</h2> */}
                    {/* <h1>YO FROM LOGIN FORM</h1> */}
                    <form onSubmit={this.handleSubmit}>

                        <p className="login-form-title">Log in here and begin your journey</p>
                        <label className="text-field">
                        <input
                                type="email"
                                placeholder="Email"
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
                                placeholder="Password"
                                value={password}
                                onChange={this.update('password')}
                                required
                            />
                        </label>
                        <br />
                        <br />
                        <button className="login-button">{formType}</button>
                        <br />
                        <p className="other-form">Don't have an account? {navLink}</p>
                        <button className="big-head-button" onClick={this.demo}>Demo User</button>
                    </form>
        
                </div>
                <img src="https://images.unsplash.com/photo-1618776574386-1003feb9e86f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80" />
            </div>
        )
    }
}


export default SessionLoginForm;