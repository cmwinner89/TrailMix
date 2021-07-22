import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import HomeContainer from './home/home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import TrailShowContainter from './trails/trail_show_container'
import Footer from "./footer/footer";
import ParkShowContainer from './parks/parks_show_container';
import ReviewEditForm from './reviews/review_edit_form';


const App = () => (
    <div>
        <HeaderContainer />

        <Route exact path="/" component={HomeContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <Route path='/trails/:trailId' component={TrailShowContainter} />
        <Route path='/parks/:parkId' component={ParkShowContainer} />
        <Route path="/reviews/:reviewId/edit" component={ReviewEditForm} />

        <Footer />
    </div>
)

export default App;