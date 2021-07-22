//fetchReviews()
//fetchReview(reviewId)
//createReview(review)
//updateReview(review)
//deleteReview(reviewId)



export const fetchReviews = (trail_id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/trails/${trail_id}/reviews`
    })
};

export const fetchReview = (reviewId) => {
    return $.ajax({
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
    console.log("REVIE IN UTIL", review);
    return $.ajax({
        method: 'PATCH',
        url: `/api/reviews/${review.id}`,
        data: { review }
    })
};

export const deleteReview = (reviewId) => {
    console.log("in api util delete review");
    return $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${reviewId}`
    })
};


// $.ajax({
//     method: 'GET',
//     url: `/api/reviews`
// }).then(resp => console.log(resp));

// $.ajax({
//     method: 'GET',
//     url: `/api/reviews/1`
// }).then(resp => console.log(resp));3
// review2 = Review.create( post_date: "2018-07-22", rating: 5, review: "The view from the summit was amazing!", user_id: demo.id, trail_id: trail1.id)
// $.ajax({
//     method: 'POST',
//     url: `/api/reviews`
// })






