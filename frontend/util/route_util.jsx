import { withRouter, Route, Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';


const Auth = ({ component: Component, path, loggedIn, exact }) => {
    const history = useHistory();
    return (
        <Route
            path={path}
            exact={exact}
            render={props =>
                !loggedIn ? <Component {...props} /> : history.goBack()
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