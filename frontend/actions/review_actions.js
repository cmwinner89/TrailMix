import * as ReviewApiUti from '../util/reviews_api_util';

//RECEIVE_ALL_REVIEWS
//RECEIVE_REVIEW
//REMOVE_REVIEW

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const EDIT_REVIEW = 'EDIT_REVIEW';

const receiveAllReviews = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

const editReview = (review) => ({
    type: EDIT_REVIEW,
    review
})

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const fetchReviews = (trail_id) => dispatch => {
    return ReviewApiUti.fetchReviews(trail_id)
        .then(reviews => dispatch(receiveAllReviews(reviews)))
};

export const fetchReview = (reviewId) => dispatch => {
    return ReviewApiUti.fetchReview(reviewId)
        .then( review => dispatch(editReview(review)))
};

export const createReview = (review) => dispatch => {
    return ReviewApiUti.createReview(review)
    .then(review => dispatch(receiveReview(review)))
    // .then(review => convertToSnakeCase(review))
};

export const updateReview = (review) => dispatch => {
    return ReviewApiUti.updateReview(review)
        .then( review => {
            console.log("EDITED REVIEW", review)
            dispatch(receiveReview(review)
        )})
};

export const deleteReview = (reviewId) => dispatch => {
    console.log("in delete review");
    return ReviewApiUti.deleteReview(reviewId)
        .then( reviewId => {
            console.log("reviewId", reviewId)
            dispatch(removeReview(reviewId.id))})
};
