import React from 'react';
import TrailMap from '../maps/trail_map';

class TrailShow extends React.Component {

    constructor (props) {
        super(props);
        debugger
        console.log("YO FROM TRAILSHOW CONSTRUCTOR");
        console.log(this.props);
        
    }

    componentWillMount() {
        this.props.fetchTrail(this.props.match.params.trailId);
    }

    render () {
        // const {trail_name, summary, description, } = this.props.trail;
        
        console.log("yo from trail render");
        console.log(this.props)
        // debugger
        return (
            <div>
                { this.props.trail ? <h3>{ this.props.trail.trail_name}</h3> : <p>Please wait sir</p>}

                {this.props.trail ? <p>{this.props.trail.summary}</p> : <p>Please wait sir</p>}

                {this.props.trail ? <TrailMap longitude={this.props.trail.longitude} latitude={this.props.trail.latitude}/> : <p>WAIT</p>}

            </div>
        )
    }
}

export default TrailShow;