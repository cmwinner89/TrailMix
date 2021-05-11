import { connect } from 'react-redux';
import SessionLoginForm from './session_login_form';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'login',
    navLink: <Link to='/signup'>Sign up</Link>
});

const mDTP = (dispatch) => ({
    action: user => dispatch(login(user))
}); 

export default connect(mSTP, mDTP)(SessionLoginForm);

