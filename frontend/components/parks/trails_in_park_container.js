import { connect } from 'react-redux';
import { fetchTrailsInPark } from '../../actions/park_actions';
import TrailsInParkIndex from './trails_in_park_index';

const mSTP = (state) => ({
    trailsInPark: state.entities.parks.trailsInPark
})

const mDTP = dispatch => ({
    fetchTrailsInPark: trailId => dispatch(fetchTrailsInPark(trailId))
});

export default connect(mSTP, mDTP)(TrailsInParkIndex);
