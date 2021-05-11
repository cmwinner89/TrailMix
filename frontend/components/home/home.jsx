import React from 'react';
import { Link } from 'react-router-dom';


const Home = ({ currentUser, logout }) => {

    if (currentUser) {
        return (
            <div>
                <h2>Welcome, {currentUser.fname}</h2>
                <button onClick={logout}>Logout</button>
            </div>
            )
    } else {
        return( 
            <nav>
                <Link to="/signup">Sign up</Link>
                <br />
                <Link to='/login'>Login</Link>
            </nav>
        )
    }
}

export default Home;