import { connect } from 'react-redux';
import TrailShow from './trail_show';
import { fetchTrail } from '../../actions/trail_actions';

const mSTP = (state, ownProps) => ({
    trail: state.trails[ownProps.match.params.trailId]
});

const mDTP = dispatch => ({
    fetchTrail: trailId => dispatch(fetchTrail(trailId))
});

export default connect(mSTP, mDTP)(TrailShow);
