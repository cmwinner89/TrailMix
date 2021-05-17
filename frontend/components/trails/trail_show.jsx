import React from 'react';
import TrailMap from '../maps/trail_map';
import NearbyTrailsContainer from './nearby_trails_container';

class TrailShow extends React.Component {

    constructor(props) {
        super(props);
        // debugger
        // console.log("YO FROM TRAILSHOW CONSTRUCTOR");
        // console.log(this.props);

    }

    componentWillMount() {
        this.props.fetchTrail(this.props.match.params.trailId);
    }

    render() {
        // const {trail_name, summary, description, } = this.props.trail;


        return (
            <div className="trail-container">
                <div className="content-container">
                    <div className="sub-nav">
                        <div className="trail-location-container">
                            <p>United States {' > '} Virginia {' > '} Shenandoah National Park </p>
                        </div>
                        <div className="sub-nav-search-container">
                            <div className="sub-search-text-bar">
                                <form>
                                    <input
                                        className="sub-search-bar-text"
                                        type="text"
                                    />
                                </form>
                            </div>
                            <div className="sub-search-button">
                                <img src="https://cdn.discordapp.com/attachments/768905648288956421/842228298889297950/3762887.png" />
                            </div>
                        </div>
                    </div>

                    <div className="trail-head">
                        <div className="trail-name-stats-container">
                            <div className="trail-name">
                                {this.props.trail ? <p>{this.props.trail.trailName}</p> : <p>Please wait sir</p>}
                            </div>
                            <div className="stats-container">
                                <div className="difficulty">
                                    {this.props.trail ? <p>{this.props.trail.difficulty}</p> : ""}
                                </div>
                                <div className="rating">
                                    <div>rating:⚝⚝⚝⚝⚝ </div>
                                </div>
                            </div>
                        </div>
                        <div className="other-action-container">
                            <p>dir</p>
                            <p>print</p>
                            <p>share</p>
                        </div>
                        <div className="border">

                        </div>
                        <div className="trail-img-container">
                            <img src="https://images.unsplash.com/photo-1494472155656-f34e81b17ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" />
                        </div>
                    </div>


                    <div className="trail-info-container">
                        <div className="trail-info-sub-container">
                            <div className="trail-summary">
                                {this.props.trail ? <p>{this.props.trail.summary}</p> : <p>Please wait sir</p>}
                            </div>
                            <div className="trail-details">
                                <div className="length-div">
                                    <div className="trail-length-img">
                                        <img src="https://static.thenounproject.com/png/3396001-200.png" />
                                    </div>
                                    <div className="trail-length">
                                        <h3>Length</h3>
                                        {this.props.trail ? <p>{this.props.trail.length} mi.</p> : ""}
                                    </div>
                                </div>
                                <div className="trail-elevation">
                                    <h3>Elevation gain</h3>
                                    {this.props.trail ? <p>{this.props.trail.elevationGain} ft.</p> : ""}
                                </div>
                                <div className="trail-route-type">
                                    <p>Route type</p>
                                    {this.props.trail ? <p>{this.props.trail.routeType}</p> : ""}
                                </div>
                            </div>
                            <div className="description-header">
                                <p>Description</p>
                            </div>

                            <div className="trail-description">
                                {this.props.trail ? <p>{this.props.trail.description}</p> : ''}
                            </div>
                        </div>
                        <div className="map-box">

                            {this.props.trail ? <TrailMap longitude={this.props.trail.longitude} latitude={this.props.trail.latitude} /> : <p>WAIT</p>}
                        </div>
                    </div>

                    <div className="something">
                        <div className="reviews-container">
                            <div className="reviews-content">
                                <div className="reviews-header">
                                    <p>Reviews</p>
                                </div>
                                <div className="all-reviews">


                                </div>
                            </div>
                        </div>
                        <div className="nearby-trails-container">
                            <div className="nearby-trails-sub-container">
                                <div className="nearby-trails-header">
                                    <p>Nearby Trails</p>
                                </div>
                                <div className="nearby-trails-info">

                                    {this.props.trail ? <NearbyTrailsContainer trailId={this.props.trail.id} /> : <p>Please wait</p>}
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