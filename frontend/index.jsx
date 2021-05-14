import React from 'react';
import ReactDOM from 'react-dom';
import {signUp, login, logout} from './util/session_api_util';
import Root from './components/root';
import configureStore from './store/store'
import {fetchTrail, fetchTrails, fetchNearbyTrails} from './actions/trail_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById("root");
    // store = configureStore();

    window.store = store;
    window.signup = signUp;
    window.login = login;
    window.logout = logout;
    window.fetchTrail = fetchTrail;
    window.fetchTrails = fetchTrails;
    window.fetchNearbyTrails = fetchNearbyTrails;

    ReactDOM.render(<Root store={store}/>, root);
});  