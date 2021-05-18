import React from 'react';

const ReviewItem = (props) => {
    // console.log("Yo from reviewItem", props);
    const { postDate, rating, review } = props.review;

    return (
        <div className='review-card-container'>
            <div className="review-user-info-cont">
                <div className='review-card-user-img'>
                    <p>User Pic</p>
                </div>
                <div className='review-card-user-name'>
                    <p>User</p>
                </div>
            </div>
            <div className="review-card-post-rating-cont">
                <div className="review-card-postDate">
                    {postDate}
                </div>
                <div>
                    {rating}
                </div>
            </div>
            <div>
                {review}
            </div>
        </div>
    )
}
export default ReviewItem;