import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link, useHistory, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faAngellist, faLinkedIn, faGlassMartini} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const history = useHistory();
    const git = <FontAwesomeIcon icon={faGithub}/>;
    const angel = <FontAwesomeIcon icon={faAngellist}/>;
    const martini = <FontAwesomeIcon icon={faGlassMartini}/>
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
                   
                    <a target="_blank" href="https://github.com/cmwinner89">{martini}</a>
                </div>
            </div>
        </footer>
    )
}

export default withRouter(Footer);