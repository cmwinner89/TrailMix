import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'sign up',
    navLink: <Link to='/login'>Sign up</Link>
});

const mDTP = (dispatch) => ({
    action: user => dispatch(signUp(user))
});

export default connect(mSTP, mDTP)(SessionForm);