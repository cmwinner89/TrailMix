//fetchReviews()
//fetchReview(reviewId)
//createReview(review)
//updateReview(review)
//deleteReview(reviewId)



export const fetchReviews = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/reviews'
    })
};

export const fetchReview = (reviewId) => {
    return $e.ajax({
        method: 'GET',
        url: `/api/reviews/${reviewId}`
    })
};

export const createReview = (review) => {
    return $.ajax({
        method: 'POST',
        url: '/api/reviews',
        data: { review }
    })
};

export const updateReview = (review) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/reviews/${review.id}`,
        data: { review }
    })
};

export const deleteReview = (reviewId) => {
    return $.ajax({
        method: 'DESTROY',
        url: `/api/reviews/${reviewId}`
    })
};
