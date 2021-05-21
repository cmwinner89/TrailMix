import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHiking, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { IconName } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { deleteReview, fetchReviews } from '../../util/reviews_api_util';

const ReviewItem = (props) => {
    // console.log("Yo from reviewItem", props);
    const { post_date, rating } = props.review;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
        // dispatch(fetchReviews(props.review.trail_id));
    }, [props.review])

    const owner = useSelector((state) => state.entities.users[props.review.user_id])
    const currentUser = useSelector((state) => state.entities.users[state.session.id])
    // console.log("YOYOYOYO", props.review.trail_id);
    // console.log(props);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        rating >= i ? stars.push(<div key={i} className="active-star">⚝</div>) : stars.push(<div key={i} className="">⚝</div>)
    }

    const renderDelete = (currentUser && currentUser.id === props.review.user_id ?
        <form >
            <div onClick={() => deleteReview(props.review.id)} className="review-delete-container">
                <FontAwesomeIcon icon={faTrashAlt} />
            </div>
        </form>
        : "")

    return (
        <>
            <div className='review-card-container'>
                <div className='review-card-sub-container'>
                    <div className="review-user-info-cont">
                        <div className='review-card-user-img'>

                            <FontAwesomeIcon icon={faHiking} />
                        </div>
                        <div className='review-card-user-name'>
                            <div className="review-first-name">
                                {owner ? owner.fname : ""}
                            </div>
                            <div className="review-last-name">
                                {owner ? owner.lname : ""}
                            </div>
                        </div>
                    </div>
                    <div className="review-card-post-rating-cont">
                        <div className="review-card-post-date">
                            {post_date}
                        </div>
                        <div className="review-card-rating-cont">
                            <div className="review-card-rating-title">
                                <p>Rating: </p>
                            </div>
                            <div className="review-card-rating-stars">
                                {stars}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='review-card-text-container'>
                    {props.review.review}
                </div>
            </div>
            {renderDelete}
        </>
    )
}
export default ReviewItem;