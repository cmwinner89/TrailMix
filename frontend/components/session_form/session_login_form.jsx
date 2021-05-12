import React from 'react';

class SessionLoginForm extends React.Component {

    constructor(props){
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

        this.props.action(demoUser);
    }

    render (){
        const { email, password } = this.state;
        const { formType, navLink } = this.props;
        // debugger
        return (
            <div>
                <h2>{formType}</h2>
                {/* <h1>YO FROM LOGIN FORM</h1> */}
                <form onSubmit={this.handleSubmit}>
                    <label className="text-field">Email: 
                        <input 
                            type="email"
                            value={email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <br />
                    <br />
                    <label className="text-field">Password: 
                        <input 
                            type="password"
                            value={password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <br /> 
                    <br />
                    <button className="big-head-button">{formType}</button>
                </form>
                <br />
                <button className="big-head-button" onClick={this.demo}>Demo User</button>
                
                <p>{navLink}</p>
            
            </div>
        )
    }
}


export default SessionLoginForm;