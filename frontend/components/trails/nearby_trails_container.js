import { connect } from 'react-redux';
import NearbyTrailsIndex from './nearby_trails_index';
import { fetchNearbyTrails } from '../../actions/trail_actions';

const mSTP = (state, ownProps) => {
    // console.log("Yo from NearbyTrailsContainer")
    // console.log(state)
    return ({nearbyTrails: (state.entities.trails.nearbyTrails)}) 
}

const mDTP = (dispatch) => ({
    fetchNearbyTrails: trailId => dispatch(fetchNearbyTrails(trailId))
})


export default connect(mSTP, mDTP)(NearbyTrailsIndex);