import * as ReviewApiUti from '../util/reviews_api_util';

//RECEIVE_ALL_REVIEWS
//RECEIVE_REVIEW
//REMOVE_REVIEW

export const convertToSnakeCase = obj => {
    const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
    let newObj = {};
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let convertedKeys = keys.map(key => camelToSnakeCase(key));
    for(let i = 0; i < keys.length; i++) { newObj[convertedKeys[i]] = values[i] }
    return newObj;
}

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveAllReviews = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

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
        .then( review => dispatch(receiveReview(review)))
};

export const createReview = (review) => dispatch => {
    return ReviewApiUti.createReview(review)
    .then(review => dispatch(receiveReview(review)))
    // .then(review => convertToSnakeCase(review))
};

export const updateReview = (review) => dispatch => {
    return ReviewApiUti.updateReview(review)
        .then( review => dispatch(receiveReview(review)))
};

export const deleteReview = (reviewId) => dispatch => {
    return ReviewApiUti.deleteReview(reviewId)
        .then( reviewId => dispatch(removeReview(reviewId)))
};
