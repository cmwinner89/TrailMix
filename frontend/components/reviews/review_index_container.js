import { connect } from "react-redux";
import { fetchReviews } from "../../actions/review_actions";
import ReviewIndex from './review_index';
import { withRouter } from 'react-router-dom';
import { deleteReview } from "../../actions/review_actions";

const mSTP = (state, ownProps) => {
    // console.log("Yo from ReviewIndexContainer", state);
    return ({
        reviews: state.entities.reviews.reviews,
        // currentUser: state.entities.users[state.session.id]
    })
};

const mDTP = dispatch => ({
    fetchReviews: (trail_id) => dispatch(fetchReviews(trail_id)),
    deleteReview: (review_id) => dispatch(deleteReview(review_id))
});

export default withRouter(connect(mSTP, mDTP)(ReviewIndex));