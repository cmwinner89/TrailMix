import React from 'react';
import TrailMap from '../maps/trail_map';

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

                    </div>

                    <div className="trail-head">
                        {this.props.trail ? <h3>{this.props.trail.trail_name}</h3> : <p>Please wait sir</p>}

                    </div>
                    <div className="box">
                        <div className="trail-info">
                            {this.props.trail ? <p>{this.props.trail.summary}</p> : <p>Please wait sir</p>}
                        </div>

                        <div className="map-box">

                            {this.props.trail ? <TrailMap longitude={this.props.trail.longitude} latitude={this.props.trail.latitude} /> : <p>WAIT</p>}
                        </div>
                    </div>

                    <div className="something">
                        <div className="reviews-container">

                        </div>
                        <div className="nearby-trails-container">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrailShow;