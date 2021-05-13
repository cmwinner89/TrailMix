import { RECEIVE_TRAIL, RECEIVE_TRAILS } from '../actions/trail_actions'

const trailsReducer = (state={}, action) => {
    Object.freeze(state);
    // debugger
    // console.log(action.trail);
    switch (action.type) {
        case RECEIVE_TRAILS:
            return action.trails;
        case RECEIVE_TRAIL:
            return Object.assign({}, state, {[action.trail.id]: action.trail})
        default:
            return state;
    }
}

export default trailsReducer;