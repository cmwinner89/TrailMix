import React from 'react';

const ReviewItem = (props) => {
    // console.log("Yo from reviewItem", props);
    const { post_date, rating, review } = props.review;

    return (
        <div className='review-card-container'>
            <div className="review-user-info-cont">
                <div className='review-card-user-img'>
                    <p>User Pic</p>
                </div>
                <div className='review-card-user-name'>
                    <div className="review-first-name">
                        {props.user_fname}
                    </div>
                    <div className="review-last-name">
                        {props.user_lname}
                    </div>
                </div>
            </div>
            <div className="review-card-post-rating-cont">
                <div className="review-card-postDate">
                    {post_date}
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