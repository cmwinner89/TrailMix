import React from 'react';


class TrailShow extends React.Component {

    constructor (props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchTrail(ownProps.match.params.trailId);
    }

    render () {
        const {trail_name, summary, description, }
        return (
            <div>
                <h3>{trail_name}</h3>

                <p>{summary}</p>
            </div>
        )
    }
}

export default TrailShow;