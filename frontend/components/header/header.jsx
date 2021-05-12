import React from 'react';
import HomeContainer from '../home/home_container'
import { Link } from 'react-router-dom';

const Header = (props) => {
    const { currentUser } = props;
    const isUser = (currentUser) => {
        if (currentUser) {
            return (
                <div className='big-head-section'>
                    <h2>Welcome, {currentUser.fname}</h2>
                    <button className="big-head-button" onClick={logout}>Logout</button>
                </div>
            )
        } else {
            return (
                <div className='big-head-section'>
                    <Link className='big-head-button' to="/signup">Sign up</Link>
                    <Link className='big-head-button' to='/login'>Login</Link>
                </div>
            )
        }
    }


    return (
        <header className="big-head">
            <div className='big-head-section'>

            </div>
            <div className='big-head-section'>
                {/* <Link to="/" > */}
                    <img className="big-head-logo" src="https://cdn.discordapp.com/attachments/768905648288956421/841861903063973898/yeet.png" alt="" />
                    <p>TrailMix</p>
                {/* </Link> */}
            </div>
            <div className='big-head-section'>
                <Link className='big-head-button' to="/signup">Sign up</Link>
                <Link className='big-head-button' to='/login'>Login</Link>
            </div>
        </header>
    )
}

export default Header;