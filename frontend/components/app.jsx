import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import HomeContainer from './home/home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Header from './header/header';

const App = () => (
    <div>
        <Header>
         
        </Header>
       
            <Switch>

                <AuthRoute exact path='/signup' component={SignupFormContainer} />
                <AuthRoute exact path='/login' component={LoginFormContainer} />
                <Route exact path="/" component={HomeContainer} />
            </Switch>
   
    </div>
)

export default App;