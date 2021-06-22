import React from 'react';
import ReviewItem from './review_item';

class ReviewIndex extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            reviews: this.props.reviews
        }   
        // console.log("Yo from reviewIndex constructor", this.props);
    }

    componentDidMount() {   
        // getTrailId();
        this.props.fetchReviews(this.props.match.params.trailId);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.reviews !== prevState) {
    //         this.props.fetchReviews(this.props.match.params.trailId);
    //     }
    // }

    render() {
        const { reviews } = this.props;
        // console.log("Yo from reviewIndex render 1", reviews);
        // debugger
        if (!this.props.reviews) {
            return null;
        }

        // console.log("Yo from reviewIndex render 2", this.props);

        
        return (
            
            <div>
                {
                    this.props.reviews.map(review => {
                        // console.log("Yo From ReviewIndex Map", review)
                        return (
                            <ReviewItem
                                key={review.id}
                                review={review}
                                deleteReview={this.props.deleteReview}
                                // user_fname={this.props.currentUser.fname}
                                // user_lname={this.props.currentUser.lname}
                                // user_id={this.props.currentUser.id}
                            />)
                    })
                }
            </div>
        )
    }
}
export default ReviewIndex;