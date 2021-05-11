import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';


const Auth = ({ component: Component, path, loggedIn, exact}) => (
    <Route
        path={path}
        exact={exact}
        remder={props => 
            !loggedIn? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

const mSTP = (state) => ({
    loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(
    connect(mSTP)(Auth)
);