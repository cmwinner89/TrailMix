import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { signUp } from '../../actions/session_actions';
import SessionSignupForm from './session_signup_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'sign up',
    navLink: <Link to='/login'>Login</Link>
});

const mDTP = (dispatch) => ({
    action: user => dispatch(signUp(user)),
    login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionSignupForm);