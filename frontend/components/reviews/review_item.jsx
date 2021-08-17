import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHiking, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { IconName } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { deleteReview, fetchReviews } from '../../actions/review_actions';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ReviewEditForm from './review_edit_form';

const ReviewItem = (props) => {
    // console.log("Yo from reviewItem", props);
    const { post_date, rating } = props.review;
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchUsers());
        // if (!props.review) {

        // } else {
        //     dispatch(fetchReview(props.review.trail_id));
        // }

    }, [props.review])

    const owner = useSelector((state) => state.entities.users[props.review.user_id])
    const currentUser = useSelector((state) => state.entities.users[state.session.id])
    const params = useParams();
    const [editReview, setEditReview] = useState(false);

    const stars = [];

    for (let i = 1; i <= 5; i++) {
        rating >= i ? stars.push(<div key={i} className="active-star">★</div>) : stars.push(<div key={i} className="">★</div>)
    }

    const renderDelete = (currentUser && currentUser.id === props.review.user_id ?
        <div className="review-delete-edit-container">
            <div className="review-delete-container" onClick={() => {
                dispatch(deleteReview(props.review.id))
                // console.log(deleteReview(props.review.id));
                // fetchReviews(params.trailId)
            }
            } >
                <FontAwesomeIcon icon={faTrashAlt} />
            </div>
            <Link to={{pathname: `/reviews/${props.review.id}/edit`,
                        state: props.review}}>
                <div className="reveiw-edit-containter"
                    onClick={() => {
                        setEditReview(!editReview);

                    }}>
                    {editReview ? <ReviewEditForm reviewIdx={props.idx} reviewToEdit={props.review} /> : ""}
                    <FontAwesomeIcon icon={faEdit} />
                </div>
            </Link>
        </div>
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