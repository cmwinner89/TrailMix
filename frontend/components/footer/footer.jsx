import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link, useHistory, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fas } from '@fortawesome/free-brands-svg-icons';
// import { faGithub, faAngellist, faLinkedIn} from "@fortawesome/free-solid-svg-icons";
// import { faGithub, faAngellist, faLinkedIn} from "@fortawesome/fontawesome-svg-core";


const Footer = () => {
    // library.add(fas, faGithub, faAngelist, faLinkedIn)
    const history = useHistory();
    // const git = <FontAwesomeIcon icon={faGithub}/>;
    // const angel = <FontAwesomeIcon icon={faAngellist}/>;
    // const martini = <FontAwesomeIcon icon={faGlassMartini}/>
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
                   <div className="links">
                       <a target="_blank" href="https://github.com/cmwinner89">GitHub</a>
                       <a target="_blank" href="https://www.linkedin.com/in/collin-winner-791203176/">LinkedIn</a>
                       <a target="_blank" href="https://angel.co/u/collin-winner">Angel List</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default withRouter(Footer);