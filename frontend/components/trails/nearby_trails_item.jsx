import React from 'react';


const NearbyTrailsItem = ({ trail, trailId }) => {

    // console.log("Yo from nearbytrailsitem", trail, trailId);
    return (
        // <li>
        <div>
            <div className="trail-card-container">

                <div className="trail-card-img">
                    <p>img</p>
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