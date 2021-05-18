import React from 'react';
import { useHistory } from 'react-router';


const NearbyTrailsItem = ({ trail, trailId }) => {

    const history = useHistory();
    const cardClickHandle = (e) => {
        e.preventDefault();

        history.push(`/trails/${trailId}`);
    }
    // console.log("Yo from nearbytrailsitem", trail, trailId);
    return (
        // <li>
        <div >
            <div onClick={cardClickHandle} className="trail-card-container">

                <div className="trail-card-img">
                    <img src={trail.backgroundPhotoUrl}/>
                </div>
                <div className="trail-card-details">
                    <div className="trail-card-trail-name">

                        {trail.trailName} :
                    </div>
                    <div className="trail-card-park_type">
                        <p>National Park</p>
                    </div>
                    <div className="trail-card-difficulty-rating">
                        {trail.difficulty}
                        <p>rating: ⚝⚝⚝⚝⚝</p>
                    </div>
                    <div className="trail-card-length">
                        <p>Length: </p>
                        {trail.length} mi.
                    </div>
                </div>
            </div>
            {/* {trail.parkId.parkName} */}

        </div>
        // </li>
    )
}

export default NearbyTrailsItem;