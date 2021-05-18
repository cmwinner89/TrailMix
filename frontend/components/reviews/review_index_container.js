import { connect } from "react-redux";
import { fetchReviews } from "../../actions/review_actions";
import ReviewIndex from './review_index';

const mSTP = (state, ownProps) => {
    // console.log("Yo from ReviewIndexContainer", state);
    return ({reviews: state.entities.reviews.reviews})
};

const mDTP = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews())
});

export default connect(mSTP, mDTP)(ReviewIndex);