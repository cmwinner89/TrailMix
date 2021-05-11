import React from 'react';
import ReactDOM from 'react-dom';
import {signUp, login, logout} from './util/session_api_util';
import Root from './components/root';
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    window.store = store;
    window.signup = signUp;
    window.login = login;
    window.logout = logout;

    ReactDOM.render(<Root store={store}/>, root);
});  