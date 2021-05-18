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
            let newState = Object.assign({}, state);
            delete newState[action.reviewId];
            return newState;
        default:
            return state;
    }
}

export default ReviewsReducer;