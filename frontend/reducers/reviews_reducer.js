import { RECEIVE_ALL_REVIEWS, 
        RECEIVE_REVIEW, 
        REMOVE_REVIEW} from '../actions/review_actions';
        

const ReviewsReducer = (state={}, action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            return {...state, reviews: action.reviews};
        case RECEIVE_REVIEW:
            return {...state, reviews: [...state.reviews, action.review]};
        case REMOVE_REVIEW:
            // console.log("removing review");
            let newState = {...state}
            // delete newState[action.reviewId];
            // return newState;
            console.log("action payload", action.reviewId);
            newState.reviews = newState.reviews.filter((review) => review.id !== action.reviewId);
            console.log("newState", newState.reviews);
            return newState;
        default:
            return state;
    }
}

export default ReviewsReducer;