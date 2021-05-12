import React from 'react';
import { Link } from 'react-router-dom';


const Home = (state) => {

    // if (currentUser) {
    //     return (
    //         <div>
    //             <p>Find a trail where you belong!</p>
    //             <h2>Welcome, {currentUser.fname}</h2>
    //             <button onClick={logout}>Logout</button>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <p>Find a trail where you belong!</p>
    //             <nav>
    //                 <Link to="/signup">Sign up</Link>
    //                 <br />
    //                 <Link to='/login'>Login</Link>
    //             </nav>
    //         </div>
    //     )
    // }

    return (
        <div className="homepage">
            <div className="homepage-1" >
                <h3>Find the trails where you belong!</h3>
                <p>*** Search bar goes here***</p>
                <p>pic in the background</p>
                <p>*******************</p>
            </div>
            <div className="homepage-2">
                <p>100,000+ trails, this where dreams are made </p>
                <p>*******************</p>
            </div>
            <div className="homepage-3">
                <p>another pic of something sick</p>
                <p>*******************</p>
            </div>
        </div>
      
    )


}

export default Home;