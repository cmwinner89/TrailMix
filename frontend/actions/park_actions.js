import * as ParkApiUtil from '../util/parks_api_util';
import {receiveErrors} from './session_actions';

//RECEIVE_PARK
//RECEIVE_PARKS
//RECEIVE_TRAILS_IN_PARK

export const RECEIVE_PARK = 'RECEIVE_PARK';
export const RECEIVE_PARKS = 'RECEIVE_PARKS';
export const RECEIVE_TRAILS_IN_PARK = 'RECEIVE_TRAILS_IN_PARK';

const receiveParks = (parks) => ({
    type: RECEIVE_PARKS,
    parks
});

const receiveTrailsInPark = (trailsInPark) => ({
    type: RECEIVE_TRAILS_IN_PARK,
    trailsInPark
});

const receivePark = (park) => ({
    type: RECEIVE_PARK,
    park
});

export const fetchParks = () => dispatch => {
    return ParkApiUtil.fetchParks()
        .then(parks => dispatch(receiveParks(parks)))
};

export const fetchTrailsInPark = (parkId) => dispatch => {
    return ParkApiUtil.fetchTrailsInPark(parkId)
        .then(trailsInPark => dispatch(receiveTrailsInPark(trailsInPark)))
};

export const fetchPark = (parkId) => dispatch => {
    return ParkApiUtil.fetchPark(parkId)
        .then(park => dispatch(receivePark(park)))
        // .e(error => dispatch(receiveErrors(error)))
};