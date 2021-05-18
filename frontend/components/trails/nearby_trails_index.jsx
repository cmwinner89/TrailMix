import React from 'react';
import NearbyTrailsItem from './nearby_trails_item';

class NearbyTrailsIndex extends React.Component {

    constructor(props) {
        super(props);
        // console.log("Yo from NearbyTrailsIndex Constructor")
        // console.log(this.props);
    }

    componentDidMount() {
        this.props.fetchNearbyTrails(this.props.trailId);
    }

    render() {
        const { nearbyTrails } = this.props;
        if (!nearbyTrails) {
            return null;
        }

        return (
            <div>
                {/* <ul> */}
                    {
                        nearbyTrails.map(trail => {
                            // console.log("Yo from nearbytrails map", trail);
                            return (<NearbyTrailsItem
                                key={trail.id}
                                trail={trail}
                                trailId={trail.id}
                            />)
                        })
                    }
                {/* </ul> */}
            </div>
        )
    }
}

export default NearbyTrailsIndex;