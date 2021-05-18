import React from 'react';
import TrailsInParkContainer from './trails_in_park_container';
import TrailMap from '../maps/trail_map';


class ParkShow extends React.Component {

    constructor(props) {
        super(props);
        // console.log("Yo from park show", this.props);
    }

    componentWillMount() {
        this.props.fetchPark(this.props.match.params.parkId);
    }

    render() {
        const { park } = this.props;
        if (!park) {
            return null
        }
        return (
            <div className="park-show-container">
                <div className="content-container">
                    <div className="sub-nav">
                        <div className="trail-location-container">
                            <p>United States {'>'} Virginia {'>'} Shenandoah National Park </p>
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
                    <div className="park-content">
                        <div className="park-pic-container" >
                            <p>sick pics of park</p>
                        </div>
                        <div className="title-rating">
                            <div className="park-title-container">
                               <p>{park.parkName}</p>
                            </div>
                            <div className="rating-container">
                                <p>rating: ⚝⚝⚝⚝⚝ </p>
                            </div>
                        </div>
                        <div className="park-summary-container">
                            <div className="park-summary">
                                {this.props.park ? <p>{this.props.park.summary}</p> : ""}
                            </div>
                        </div>
                        <div className="park-description-container">
                            <div className="park-description-header">
                                <p>Description</p>
                            </div>
                            <div className="park-description-body">
                                {this.props.park ? <p>{this.props.park.description}</p> : ""}
                            </div>


                            <div className="park-map-container">
                                {/* <TrailMap latitude={50} longitude={-77}/> */}
                                <p>MAP</p>
                            </div>

                            <div className="other-park-actions">
                                <p>dir</p>
                                <p>print</p>
                                <p>share</p>
                            </div>
                        </div>

                    </div>
                    <div className="park-information-container">
                        <div className="park-information-header">
                            <p>Park Information</p>
                        </div>
                        <div className="park-information-details">
                            <div className="park-acreage">
                                <p>Acreage:</p>
                                <p>{this.props.park.acreage} acres</p>
                            </div>
                            <div className="park-contact">
                                <p>Contact:</p>
                                <p>{park.contact}</p>
                            </div>
                        </div>
                    </div>
                    <div className="trails-in-park-container">
                        <div className="park-information-header">
                            <p>Top Trails</p>
                        </div>
                        <div className='trails-in-park-sub-container'>
                           
                            <div className='trail-in-park-details-container'>

                                {<TrailsInParkContainer parkId={this.props.park.id} parkName={this.props.park.parkName} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ParkShow;