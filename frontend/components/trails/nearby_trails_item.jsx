import React from 'react';


const NearbyTrailsItem = ({trail, trailId}) => {

    console.log("Yo from nearbytrailsitem", trail, trailId);
    return (
        <li>
            {trail.trailName}
            {/* {trail.parkId.parkName} */}
            <br />
            {trail.length}
        </li>
    )
}

export default NearbyTrailsItem;