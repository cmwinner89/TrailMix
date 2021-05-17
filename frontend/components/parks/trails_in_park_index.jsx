import React from 'react';
import TrailsInParkItem from './trails_in_park_item';

class TrailsInParkIndex extends React.Component {
    constructor (props) {
        super(props);
        console.log("Yo from TrailsInParkIndex", this.props);
    }
    componentWillMount() {
        this.props.fetchTrailsInPark(this.props.parkId);
    }

    render() {
        const { trailsInPark, parkName } = this.props;
        if (!trailsInPark) {
            return null;
        }
        return (
            <div>
            {/* // <ul> */}
                {
                    trailsInPark.map(trail => (
                        <TrailsInParkItem
                            key={trail.id}
                            trail={trail}
                            parkName={parkName}
                        />
                    ))
                }
            {/* // </ul> */}
            </div>
        )
    }
}


export default TrailsInParkIndex;