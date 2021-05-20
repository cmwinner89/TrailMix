import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview, updateReview, deleteReview } from '../../actions/review_actions';

const mSTP = (state, ownProps) => {
    // console.log("Yo from reveiwContainer", state);
    // console.log("Yo from reveiwContainer", ownProps);
    return ({
        review: {
            post_date: '',
            rating: 1,
            review: '',
            user_id: state.session.id,
            trail_id: ownProps.trail_id
        },
        currentUserId: state.session.id,
       
    });

}
const mDTP = dispatch => ({
    action: review => dispatch(createReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))

});

export default connect(mSTP, mDTP)(ReviewForm);