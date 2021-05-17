import { connect } from 'react-redux';
import { fetchTrailsInPark } from '../../actions/park_actions';
import TrailsInParkIndex from './trails_in_park_index';

const mSTP = (state, ownProps) => ({
    // console.log("OWNPROPS", ownProps);
    trailsInPark: state.entities.parks.trailsInPark,
    parkName: ownProps.parkName
   
})

const mDTP = dispatch => ({
    fetchTrailsInPark: trailId => dispatch(fetchTrailsInPark(trailId))
});

export default connect(mSTP, mDTP)(TrailsInParkIndex);
