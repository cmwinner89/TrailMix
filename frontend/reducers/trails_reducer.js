import { RECEIVE_TRAIL,
        RECEIVE_TRAILS,
        RECEIVE_NEARBY_TRAILS} from '../actions/trail_actions'

const trailsReducer = (state={}, action) => {
    Object.freeze(state);
    // debugger
    // console.log(action.trail);
    switch (action.type) {
        case RECEIVE_TRAILS:
            return {...state, trails: action.trails};
        case RECEIVE_TRAIL:
            return Object.assign({}, state, {[action.trail.id]: action.trail})
        case RECEIVE_NEARBY_TRAILS:
            return Object.assign({}, state, {nearbyTrails: action.nearbyTrails});
        default:
            return state; 
    }
}

export default trailsReducer;