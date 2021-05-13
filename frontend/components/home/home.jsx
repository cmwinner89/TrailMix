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
                    <div className='search-text'>
                        {/* <p className="search-caption">Begin you journey</p> */}
                        <form>
                            <input className="search-bar-text" type="text" />
                        </form>
                    </div>
                    <div className='search-button'>
                        <img src="https://cdn.discordapp.com/attachments/768905648288956421/842228298889297950/3762887.png" />
                    </div>
                </div>
                {/* <h3>Find the trails where you belong!</h3>
                <p>*** Search bar goes here***</p>
                <p>pic in the background</p> */}
                <img src="https://cdn.discordapp.com/attachments/768905648288956421/841833138035359754/1951020.png" />
                {/* <p>*******************</p> */}
            </div>
            <div className="homepage-section">
                <p>100,000+ trails. 20 million Explorers. Endless memories. </p>
                <p>Create your free account now! <Link className='home-signup-button' to="/signup">Sign up</Link></p>
                {/* <p>*******************</p> */}
            </div>
            <div className="homepage-section">
                <img src="https://media.discordapp.net/attachments/768905648288956421/841832787945848832/rocky-mountains3.png?width=1440&height=675" />
                {/* <p>Inspiration for where your trail leads</p> */}
            </div>
        </div>

    )


}

export default Home;