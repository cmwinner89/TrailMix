import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import HomeContainer from './home/home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';


const App = () => (
    <div>
        <header>
            <h1>TrailMix</h1>
            <HomeContainer />
        </header>
       
            <Switch>

                <Route exact path='/signup' component={SignupFormContainer} />
                <Route exact path='/login' component={LoginFormContainer} />
                {/* <Route exact path="/" component={HomeContainer} /> */}
            </Switch>
   
    </div>
)

export default App;