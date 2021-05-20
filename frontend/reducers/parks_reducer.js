import { RECEIVE_PARK, 
        RECEIVE_PARKS, 
        RECEIVE_TRAILS_IN_PARK } from '../actions/park_actions';

const ParksReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PARKS:
            return {...state, parks: action.parks};
        case RECEIVE_PARK:
            return Object.assign({}, state, {[action.park.id]: action.park});
        case RECEIVE_TRAILS_IN_PARK:
            return Object.assign({}, state, {trailsInPark: action.trailsInPark})
        default:
            return state;
    }
}

export default ParksReducer;