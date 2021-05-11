import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './home/home';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';


const App = () => (
    <div>
        <header>
            <h1>TrailMix</h1>
            <Home />
        </header>

        <Route path='/signup' component={SignupFormContainer} />
        <Route path='/login' component={LoginFormContainer} />
    </div>
);

export default App;