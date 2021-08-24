import React from 'react';

class ReviewForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ...this.props.review,
            starValueSelected: 1,
            starValueHovered: -1,
            toggleReviewContainer: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleReviewHandler = this.toggleReviewHandler.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            rating: this.state.starValueSelected
        });

        this.props.action(this.state);
        this.toggleReviewHandler();

        this.setState({
            post_date: '',
            rating: 1,
            review: ''
        });
    }

    toggleReviewHandler() {
        this.setState({ ...this.state, toggleReviewContainer: !this.state.toggleReviewContainer })
    }

    updateStarValueHovered(idx) {
        this.setState({ ...this.state, starValueHovered: idx });
    }

    updateSelectedStar(idx) {
        this.setState({
            ...this.state,
            starValueSelected: idx,
            rating: idx
        });
    }

    update(field) {
        return (
            e => this.setState({ [field]: e.currentTarget.value })
        )
    }

    render() {
        const { post_date, rating, review } = this.state;
        const { deleteReview, currentUserId } = this.props;
        // console.log("user_id", this.props);
        if (!currentUserId) {
            return <></>
        }
        if (!this.state.toggleReviewContainer) {
            return (
                <div className="big-review-container">
                    <div className="review-action-buttons">
                        <button className="big-head-button" onClick={() => this.toggleReviewHandler()}>Write review</button>
                        {/* <button className="big-head-button">Upload Photo</button> */}
                    </div>
                </div>
            )
        }
        return (
            <div className="big-review-container">
                <div className="review-form-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="review-post-date-container">
                            {/* <div className="review-title">
                                <p>Post Date</p>
                            </div> */}
                            {/* <div className="review-post-date-input">
                                <input
                                    className="review-date-input"
                                    type="date"
                                    value={post_date}
                                    onChange={this.update("post_date")}
                                />
                            </div> */}

                        </div>
                        <div className="review-rating-container">
                            <div className="review-title">

                                <p>Rating: </p>
                            </div>
                            <div className="review-rating-stars">
                                <div onMouseLeave={() => this.setState({ ...this.state, starValueHovered: -1 })} onMouseEnter={() => this.updateStarValueHovered(1)} onClick={() => this.updateSelectedStar(1)} className={`star ${this.state.starValueHovered !== -1 && 1 <= this.state.starValueHovered ? 'active-star' : ''} ${this.state.starValueHovered === -1 && this.state.starValueSelected >= 1 ? 'active-star' : ''}`}>
                                    ★
                                </div>
                                <div onMouseLeave={() => this.setState({ ...this.state, starValueHovered: -1 })} onMouseEnter={() => this.updateStarValueHovered(2)} onClick={() => this.updateSelectedStar(2)} className={`star ${this.state.starValueHovered !== -1 && 2 <= this.state.starValueHovered ? 'active-star' : ''} ${this.state.starValueHovered === -1 && this.state.starValueSelected >= 2 ? 'active-star' : ''}`}>
                                    ★
                                </div>
                                <div onMouseLeave={() => this.setState({ ...this.state, starValueHovered: -1 })} onMouseEnter={() => this.updateStarValueHovered(3)} onClick={() => this.updateSelectedStar(3)} className={`star ${this.state.starValueHovered !== -1 && 3 <= this.state.starValueHovered ? 'active-star' : ''} ${this.state.starValueHovered === -1 && this.state.starValueSelected >= 3 ? 'active-star' : ''}`}>
                                    ★
                                </div>
                                <div onMouseLeave={() => this.setState({ ...this.state, starValueHovered: -1 })} onMouseEnter={() => this.updateStarValueHovered(4)} onClick={() => this.updateSelectedStar(4)} className={`star ${this.state.starValueHovered !== -1 && 4 <= this.state.starValueHovered ? 'active-star' : ''} ${this.state.starValueHovered === -1 && this.state.starValueSelected >= 4 ? 'active-star' : ''}`}>
                                    ★
                                </div>
                                <div onMouseLeave={() => this.setState({ ...this.state, starValueHovered: -1 })} onMouseEnter={() => this.updateStarValueHovered(5)} onClick={() => this.updateSelectedStar(5)} className={`star ${this.state.starValueHovered !== -1 && 5 <= this.state.starValueHovered ? 'active-star' : ''} ${this.state.starValueHovered === -1 && this.state.starValueSelected >= 5 ? 'active-star' : ''}`}>
                                    ★
                                </div>
                            </div>
                        </div>

                        <div className="review-text-container">
                            <div className="review-title">

                                <p>Review</p>
                            </div>
                            <div className="review-text-area-cont">
                                <textarea
                                    className="review-text-input"
                                    value={review}
                                    onChange={this.update("review")}
                                />
                            </div>
                        </div>
                        <div className="review-form-buttons">
                            <button className="big-head-button-1">Submit Review</button>
                            <button className="big-head-button-2" onClick={() => this.toggleReviewHandler()}>Cancel</button>
                        </div>
                    </form>
                    {/* <div onClick={() => deleteReview(review.id)}>Delete Review</div> */}
                </div >
            </div>
        )
    }
}

export default ReviewForm;