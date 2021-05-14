import React from 'react';
import { Link, withRouter } from "react-router-dom"

const Footer = () => {

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <img onClick={() => history.push('/')} className="footer-logo" src="https://cdn.discordapp.com/attachments/768905648288956421/841861903063973898/yeet.png" alt="" />
                    {/* <div className="header-name"> */}
                    <p onClick={() => history.push('/')} >TrailMix</p>
                    {/* </div> */}
                </div>
                <div className="footer-section">

                </div>
            </div>
        </footer>
    )
}

export default withRouter(Footer);