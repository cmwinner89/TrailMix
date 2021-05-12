import * as TrailsApiUtil from '../util/trails_api_util';

//RECEIVE_TRAIL

export const RECEIVE_TRAIL = "RECEIVE_TRAIL";

const receiveTrail = trail => ({
    type: RECEIVE_TRAIL,
    trail
})

export const fetchTrail = (trailId) => dispatch => {
    return TrailsApiUtil.fetchTrail(trailId)
        .then(trail => dispatch(receiveTrail(trail)))
}