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
            <div className="homepage-section" >
                <div className="search-container">
                    <div className="section-1-text">
                        <div>Begin Your Journey</div>
                    </div>
                    <div className="search-bar">
                        <div className='search-text'>
                            <form>
                                <input 
                                    className="search-bar-text" type="text" />
                            </form>
                        </div>
                        <div className='search-button'>
                            <img src="https://cdn.discordapp.com/attachments/768905648288956421/842228298889297950/3762887.png" />
                        </div>
                    </div>
                </div>
                {/* <h3>Find the trails where you belong!</h3>
                <p>*** Search bar goes here***</p>
                <p>pic in the background</p> */}
                <img src="https://cdn.discordapp.com/attachments/768905648288956421/841833138035359754/1951020.png" />
                {/* <p>*******************</p> */}
            </div>
            <div className="homepage-section">
                <div className="container-3">
                    <div className="sub-container-2">
                        <p>100,000+ trails. 20 million Explorers. Endless memories. </p>
                    </div>
                    <div className="sub-container-3">
                        <p>Create your free account now! </p><Link to="/signup">Sign up</Link>
                    </div>
                </div>
            </div>
            <div className="homepage-section">
                <div className="homepage-section-3">
                    <p>Stuff Goes Here</p>
                </div>
                <img src="https://images.unsplash.com/photo-1442965416224-f6a7eca980fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
                {/* <p>Inspiration for where your trail leads</p> */}
            </div>
        </div>

    )


}

export default Home;