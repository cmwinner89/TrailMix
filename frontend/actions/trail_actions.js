import * as TrailsApiUtil from '../util/trails_api_util';
import { receiveErrors } from './session_actions';
//RECEIVE_TRAIL
//RECEIVE_TRAILS
//RECEIVE_NEARBY_TRAILS

export const RECEIVE_TRAILS = "RECEIVE_TRAILS";
export const RECEIVE_TRAIL = "RECEIVE_TRAIL";
export const RECEIVE_NEARBY_TRAILS = "RECEIVE_NEARBY_TRAILS";

const receiveNearbyTrails = (nearbyTrails) => ({
    type: RECEIVE_NEARBY_TRAILS,
    nearbyTrails
})

const receiveTrails = (trails) => ({
    type: RECEIVE_TRAILS,
    trails
});

const receiveTrail = trail => ({
    type: RECEIVE_TRAIL,
    trail
});

export const fetchTrail = (trailId) => dispatch => {
    // console.log(trailId);
    return TrailsApiUtil.fetchTrail(trailId)
        .then(trail => dispatch(receiveTrail(trail)))
};

export const fetchTrails = () => dispatch => {
    return TrailsApiUtil.fetchTrails()
        .then( trails => dispatch(receiveTrails(trails)))
};

export const fetchNearbyTrails = (trailId) => dispatch => {
    return TrailsApiUtil.fetchNearbyTrails(trailId)
        .then(nearbyTrails => dispatch(receiveNearbyTrails(nearbyTrails)))
}