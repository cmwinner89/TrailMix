import * as SessionApiUtil from '../util/session_api_util';
//login(user)
//logout
//signup(user)


//RECEIVE_CURRENT_USER
//LOGOUT_CURRENT_USER
//RECEIVE_ERRORS

//thunks
//login(user)
//logout()
//signUp(user)

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
//??
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const login = (user) => dispatch => {
    return SessionApiUtil.login(user)
        .then( currentUser => dispatch(receiveCurrentUser(currentUser))),
        error => (dispatch(receiveErrors(error)))
};

export const logout = () => dispatch => {
    return SessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser())),
        error => (dispatch(receiveErrors(error)))
};

export const signUp = (user) => dispatch => {
    return SessionApiUtil.signUp(user)
        .then((user) => dispatch(receiveCurrentUser(user)))
};
