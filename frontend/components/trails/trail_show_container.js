import { connect } from 'react-redux';
import TrailShow from './trail_show';
import { fetchTrail } from '../../actions/trail_actions';
import { fetchPark } from '../../actions/park_actions';

const mSTP = (state, ownProps) => {
    
    console.log("state from container", state);
    // trail: state.entities.trails[ownProps.match.params.trailId]
 
    return ({
            trail: state.entities.trails[ownProps.match.params.trailId],
            currentUser: state.entities.users[state.session.id],
            // park_name: state.entitiies.parks[state.entities.trails[ownProps.match.params.trailId].id].park_name
        })

    // trail: state.entities.trails[ownProps.match.params.trailId],
    
    // currentUserId: state.entities.user.id
};

const mDTP = dispatch => ({
    fetchTrail: trailId => dispatch(fetchTrail(trailId)),
    fetchPark: parkId => dispatch(fetchPark(parkId))
});

export default connect(mSTP, mDTP)(TrailShow);
