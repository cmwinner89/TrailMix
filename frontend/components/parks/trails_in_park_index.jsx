import React from 'react';

class TrailsInParkIndex extends React.Component {
    constructor (props) {
        super(props);
        console.log("Yo from TrailsInParkIndex", this.props);
    }
    componentWillMount() {
        this.props.fetchTrailsInPark(this.props.parkId);
    }

    render() {
   
        return (

            <ul>

            </ul>
        )
    }
}


export default TrailsInParkIndex;