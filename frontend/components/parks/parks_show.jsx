import React from 'react';
import TrailsInParkContainer from './trails_in_park_container';

class ParkShow extends React.Component {

    constructor(props) {
        super(props);
        console.log("Yo from park show", this.props);
    }

    componentWillMount() {
        this.props.fetchPark(this.props.match.params.parkId);
    }

    render() {

        return (
            <div className="park-show-container">
                <div className="content-container">
                    <div className="sub-nav">
                        <p>sub nav</p>
                    </div>
                    <div className="park-content">
                        <div className="park-pic-container" >
                            <p>sick pics of park</p>
                        </div>
                        <div className="title-rating">
                            <p>title and rating here</p>
                        </div>
                        <div className="park-summary-container">
                            <p>Summary Goes Here</p>
                        </div>
                        <div className="park-description-container">
                            <p>Description</p> 
                        </div>
                        <div className="trails-in-park">
                            {this.props.park ? <TrailsInParkContainer parkId={this.props.park.id} /> : " "}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ParkShow;