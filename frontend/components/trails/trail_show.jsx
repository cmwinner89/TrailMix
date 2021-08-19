import React from 'react';
import TrailMap from '../maps/trail_map';
import ReviewIndex from '../reviews/review_index';
import NearbyTrailsContainer from './nearby_trails_container';
import ReviewIndexContainer from '../reviews/review_index_container';
import ReviewFormContainer from '../reviews/review_form_container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDirections } from "@fortawesome/free-solid-svg-icons";
import SubSearch from '../searches/sub_search';

class TrailShow extends React.Component {

    constructor(props) {
        super(props);
        // debugger
        // console.log("YO FROM TRAILSHOW CONSTRUCTOR");
        // console.log("Yo from trail show", this.props);
        this.state = {
            trailId: this.props.match.params.trailId,
            // park: this.props.entities.parks
        }
        // console.log("STATE", this.state);

    }

    componentDidMount() {
        this.props.fetchTrail(this.props.match.params.trailId)
            .then(() => this.props.fetchPark(this.props.trail.park_id))
    }

    componentDidUpdate(prevProps) {

        if (this.state.trailId !== this.props.match.params.trailId) {
            this.props.fetchTrail(this.props.match.params.trailId)
                .then(() => this.props.fetchPark(this.props.trail.park_id))
        }
        if (this.props.reviews !== prevProps.reviews) {
            this.props.fetchReviews(this.props.match.params.trailId);
        }

    }


    render() {
        if (!this.props.trail) {
            return null;
        }
        // if(!this.props.park) {
        //     return null;
        // }

        // console.log("curr", this.props.currentUser);
        const renderReview = (this.props.currentUser ? (
            <ReviewIndexContainer />
        ) : "")

        // console.log("YOYOYYO", this.state);
        return (
            <div className="trail-container">
                <div className="content-container">
                    <div className="sub-nav">
                        <div className="trail-location-container">
                            <p>United States {' > '} Shendandoah National Park</p>
                            {/* { this.state.park ? this.state.park.park_name : ''} */}
                        </div>
                        <SubSearch />
                    </div>

                    <div className="trail-head">
                        <div className="trail-name-stats-container">
                            <div className="trail-name">
                                <p>{this.props.trail.trail_name}</p>
                            </div>
                            <div className="stats-container">
                                <div className="difficulty">
                                    <p>{this.props.trail.difficulty}</p>
                                </div>
                                <div className="rating">
                                    <div>Rating: </div>
                                    <div className="active-star">
                                        ★★★★★
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="other-action-container">
                            <div className='trail-directions-container'>
                                <p>Get Directions</p>
                                <a target="_blank" href={`https://www.google.com/maps/dir/Current+Location/${this.props.trail.latitude},${this.props.trail.longitude}`}>
                                    <FontAwesomeIcon icon={faDirections} />
                                </a>
                            </div>
                            <div className="trail-print-container">
                                {/* <a href={'javascript:window.print()'}>Print</a> */}
                            </div>

                        </div>
                        <div className="border">

                        </div>
                        <div className="trail-img-container">
                            {/* <img src="https://www.americansouthwest.net/wyoming/photographs1118/observation2.jpg" /> */}
                            <img src={this.props.trail.backgroundPhotoUrl} />
                        </div>
                    </div>


                    <div className="trail-info-container">
                        <div className="trail-info-sub-container">
                            <div className="trail-summary">
                                <p>{this.props.trail.summary}</p>
                            </div>
                            <div className="trail-details">
                                <div className="length-div">
                                    <div className="trail-length-img">
                                        {/* <img src="https://static.thenounproject.com/png/3396001-200.png" /> */}
                                    </div>
                                    <div className="trail-length">
                                        <h3>Length</h3>
                                        <p>{this.props.trail.length} mi.</p>
                                    </div>
                                </div>
                                <div className="trail-elevation">
                                    <h3>Elevation gain</h3>
                                    <p>{this.props.trail.elevation_gain} ft.</p>
                                </div>
                                <div className="trail-route-type">
                                    <p>Route type</p>
                                    <p>{this.props.trail.route_type}</p>
                                </div>
                            </div>
                            <div className="description-header">
                                <p>Description</p>
                            </div>

                            <div className="trail-description">
                                <p>{this.props.trail.description}</p>
                            </div>
                        </div>
                        <div className="map-box">

                            <TrailMap longitude={this.props.trail.longitude} latitude={this.props.trail.latitude} />
                        </div>
                    </div>

                    <div className="something">
                        <div className="reviews-container">
                            <div className="reviews-content">
                                <div className="reviews-header">
                                    <p>Reviews</p>
                                </div>
                                <div className="add-review-container">
                                    {<ReviewFormContainer trail_id={this.props.trail.id} />}
                                </div>
                                <div className="all-reviews">
                                    {<ReviewIndexContainer />}
                                </div>
                            </div>
                        </div>
                        <div className="nearby-trails-container">
                            <div className="nearby-trails-sub-container">
                                <div className="nearby-trails-header">
                                    <p>Nearby Trails</p>
                                </div>
                                <div className="nearby-trails-info">
                                    <NearbyTrailsContainer trailId={this.props.trail.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrailShow;