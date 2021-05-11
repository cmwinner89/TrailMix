import React from 'react';

class SessionSignupForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (
            e => this.setState({ [field]: e.currentTarget.value})
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

        this.props.login(demoUser);
    }

    render (){
        const { fname, lname, email, password } = this.state;
        const { formType, errors, navLink } = this.props;

        return (
            <div>
                <h3>{formType}</h3>

                <form onSubmit={this.handleSubmit}>
                    <label>First Name: 
                        <input 
                            type="text"
                            value={fname}
                            onChange={this.update('fname')}
                        />
                    </label>
                    <br />
                    <br />
                    <label>Last Name: 
                        <input 
                            type="text"
                            value={lname}
                            onChange={this.update('lname')}
                        />
                    </label>
                    <br />
                    <br />
                    <label>Email: 
                        <input 
                            type="text"
                            value={email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <br />
                    <br />
                    <label>Password: 
                        <input 
                            type="password"
                            value={password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <br />
                    <br />
                    <button>{formType}</button>
                </form>
                <p>{navLink}</p>
            </div>
        )
    }
}


export default SessionSignupForm;