import { withRouter, Route, Redirect, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';


const Auth = ({ component: Component, path, loggedIn, exact, location }) => {
    const history = useHistory();
    console.log("location", document.referrer);
    
    return (
        <Route
            path={path}
            exact={exact}
            render={props =>
                !loggedIn ? <Component {...props} /> : <Redirect to='/' />
            }
        />
    )
};

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            loggedIn ? <Component {...props} /> : <Redirect to='/signup' />
        }
    />
)

const mSTP = (state) => ({
    loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(
    connect(mSTP)(Auth)
);

export const ProtectedRoute = withRouter(
    connect(mSTP)(Protected)
);