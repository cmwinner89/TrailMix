import { connect } from "react-redux";
import { fetchReviews } from "../../actions/review_actions";
import ReviewIndex from './review_index';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    // console.log("Yo from ReviewIndexContainer", state);
    return ({
        reviews: state.entities.reviews.reviews,
        currentUser: state.entities.users[state.session.id]
    })
};

const mDTP = dispatch => ({
    fetchReviews: (trail_id) => dispatch(fetchReviews(trail_id))
});

export default withRouter(connect(mSTP, mDTP)(ReviewIndex));