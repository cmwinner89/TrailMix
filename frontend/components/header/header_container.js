import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mSTP = ({session, entities: {users}}) => ({
    currentUser: users[session.id]
});

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(mSTP, mDTP)(Header));