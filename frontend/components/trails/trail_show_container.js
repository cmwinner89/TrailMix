import { connect } from 'react-redux';
import TrailShow from './trail_show';
import { fetchTrail } from '../../actions/trail_actions';

const mSTP = (state, ownProps) => ({
    
    // console.log("state from container", state);
    // trail: state.entities.trails[ownProps.match.params.trailId]
 
    // return 
    //     ({
    //         trail: state.entities.trails[ownProps.match.params.trailId],
    //         currentUser: state.entities.user
    //     })

    trail: state.entities.trails[ownProps.match.params.trailId],
    // currentUserId: state.entities.user.id
});

const mDTP = dispatch => ({
    fetchTrail: trailId => dispatch(fetchTrail(trailId))
});

export default connect(mSTP, mDTP)(TrailShow);
