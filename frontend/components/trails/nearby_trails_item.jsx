import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchPark } from '../../actions/park_actions';

const NearbyTrailsItem = ({ trail, trailId }) => {

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => (
        dispatch(fetchPark(trail.park_id))
    ), [])

    const park = useSelector((state) => state.entities.parks[trail.park_id]);
    const cardClickHandle = (e) => {
        e.preventDefault();

        history.push(`/trails/${trailId}`);
    }
    // console.log("Yo from nearbytrailsitem", park);
    return (
        <div >
            <div onClick={cardClickHandle} className="trail-card-container">

                <div className="trail-card-img">
                    <img src={trail.backgroundPhotoUrl} />
                </div>
                <div className="trail-card-details">
                    <div className="trail-card-trail-name">

                        {trail.trail_name}
                    </div>
                    <div className="trail-card-park_type">
                        {park ? park.park_name : ""}
                    </div>
                    <div className="trail-card-difficulty-rating">
                        <p>{trail.difficulty}</p>
                        <div className="trail-card-rating">
                            <p>rating: </p>
                            <div className="active-star">
                                ⚝⚝⚝⚝⚝
                            </div>
                        </div>
                    </div>
                    <div className="trail-card-length">
                        <p>Length: </p>
                        {trail.length} mi.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NearbyTrailsItem;