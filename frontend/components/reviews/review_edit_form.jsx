import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { updateReview, fetchReview } from '../../actions/review_actions';

const ReviewEditForm = (props) => {

    const location = useLocation();
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(fetchReview(params.reviewId));
    }, [])

    

    const review = useSelector(state => state.entities.reviews.updateReview);
    
    useEffect(() => {
        if(review) {
            setStarValueSelected(review.rating);
            setReviewText(review.review)
        }
    }, [review]);

    const [rating, setRating] = useState()
    const [starValueSelected, setStarValueSelected] = useState(-1);
    const [starValueHovered, setStarValueHovered] = useState(-1);
    const [reviewText, setReviewText] = useState("");

    const updateSelectedStar = (idx) => {
        setStarValueSelected(idx);
    }

    const updateStarValueHovered = (idx) => {
        setStarValueHovered(idx);
    }

    const handleSubmit = () => {
        const editedReview = {
            ...review, 
            rating: starValueSelected,
            review: reviewText
        }
        
        dispatch(updateReview(editedReview))

        history.push(`/trails/${review.trail_id}`)
    }

     return ( review ? (
        <div className="whole-page-review-edit-cont">
            <form className="review-form-edit-container" onSubmit={() => handleSubmit()}>
                <div className="edit-review-form-title-container">
                    <p>EDIT REVIEW</p>
                </div>
                <div className="edit-review-form-rating-container">
                    <div className="edit-review-form-rating-title">
                        <p>Rating:</p>
                    </div>
                    <div className="edit-review-form-rating">
                        <div onMouseLeave={() => setStarValueHovered(-1)} onMouseEnter={() => updateStarValueHovered(1)} onClick={() => updateSelectedStar(1)} className={`stars ${starValueHovered !== -1 && 1 <= starValueHovered ? 'active-star' : ''} ${starValueHovered === -1 && starValueSelected >= 1 ? 'active-star' : ''}`}>
                            ★
                        </div>
                        <div onMouseLeave={() => setStarValueHovered(-1)} onMouseEnter={() => updateStarValueHovered(2)} onClick={() => updateSelectedStar(2)} className={`stars ${starValueHovered !== -1 && 2 <= starValueHovered ? 'active-star' : ''} ${starValueHovered === -1 && starValueSelected >= 2 ? 'active-star' : ''}`}>
                            ★
                        </div>
                        <div onMouseLeave={() => setStarValueHovered(-1)} onMouseEnter={() => updateStarValueHovered(3)} onClick={() => updateSelectedStar(3)} className={`stars ${starValueHovered !== -1 && 3 <= starValueHovered ? 'active-star' : ''} ${starValueHovered === -1 && starValueSelected >= 3 ? 'active-star' : ''}`}>
                            ★
                        </div>
                        <div onMouseLeave={() => setStarValueHovered(-1)} onMouseEnter={() => updateStarValueHovered(4)} onClick={() => updateSelectedStar(4)} className={`stars ${starValueHovered !== -1 && 4 <= starValueHovered ? 'active-star' : ''} ${starValueHovered === -1 && starValueSelected >= 4 ? 'active-star' : ''}`}>
                            ★
                        </div>
                        <div onMouseLeave={() => setStarValueHovered(-1)} onMouseEnter={() => updateStarValueHovered(5)} onClick={() => updateSelectedStar(5)} className={`stars ${starValueHovered !== -1 && 5 <= starValueHovered ? 'active-star' : ''} ${starValueHovered === -1 && starValueSelected >= 5 ? 'active-star' : ''}`}>
                            ★
                        </div>
                    </div>
                </div>
                <div className="edit-review-form-text-container">
                    <div className="edit-review-form-text-title">
                        <p>Review</p>
                    </div>
                    <div className="edit-review-form-text">
                        <textarea
                            className="edit-review-from-text-area"
                            type="text"
                            value={reviewText}
                            onChange={e => setReviewText(e.target.value)}>
                        </textarea>
                    </div>
                </div>
                <div className="edit-review-form-buttons-container">
                    <div className="edit-review-form-submit-button">
                        <button className="big-head-button-3" type="submit">Submit Review</button>
                    </div>
                    <div className="edit-review-form-cancel-button">
                        <button className="big-head-button-4" onClick={() => history.push(`/trails/${review.trail_id}`)}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    ) : "")
}

export default ReviewEditForm;