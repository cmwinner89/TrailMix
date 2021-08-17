import React, { useEffect, useState } from 'react';
import HomeContainer from '../home/home_container'
import { Link, Redirect, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';

const Header = ({ currentUser, logout, history }) => {

    const sessionId = useSelector(state => state.session.id)
    const user = useSelector(state => state.entities.users[sessionId]);
    const users = useSelector(state => state.entities.users);
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(fetchUsers())

    }, []);

    // const [isCurrentUser, setCurrentUser] = useState(false);
    // const [currUser, setCurrUser] = useState()

    // useEffect(() => {
    //     if (user) {
    //         setCurrentUser(!isCurrentUser)
    //         setFname(user.fname)

    //     }
    // }, [user])

    const isUser = (currentUser ? (
        <div className='big-head-section'>
            <h2>Welcome, {currentUser.fname}</h2>
            <button className="big-head-button" onClick={logout}>Logout</button>
        </div>
    ) : <div className='big-head-section'>
        <Link className='link-button' to='/signup'>Sign up</Link>
        <Link className='link-button' to='/login' >Login</Link>
    </div>)


    return (
        <header className="big-head">
            <div className='big-head-section'>

            </div>
            <div className='big-head-section'>

                <img onClick={() => history.push('/')} className="big-head-logo" src="https://cdn.discordapp.com/attachments/768905648288956421/841861903063973898/yeet.png" alt="" />
                {/* <div className="header-name"> */}
                <p onClick={() => history.push('/')} >TrailMix</p>
                {/* </div> */}
            </div>
            {isUser}
        </header>
    )
}

export default Header;