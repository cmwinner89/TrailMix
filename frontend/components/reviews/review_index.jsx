import React from 'react';
import ReviewItem from './review_item';

class ReviewIndex extends React.Component {

    constructor(props) {
        super(props)
        // console.log("Yo from reviewIndex constructor", this.props);
    }

    componentDidMount() {
        this.props.fetchReviews();
    }

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
                            />)
                    })
                }
            </div>
        )
    }
}
export default ReviewIndex;