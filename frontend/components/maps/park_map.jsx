import React from 'react';
import mapboxgl from '!mapbox-gl';
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');


mapboxgl.accessToken = 'pk.eyJ1IjoiY213aW5uZXI4OSIsImEiOiJja28xZWNkd2kwOHpyMnBzNXQ2ZmhidGh5In0.iqJ9BJvA3FrghuTCFEYnJg';


// let map = new mapboxgl.Map({
//     container: 'map-render-area',
//     style: 'mapbox://styles/mapbox/streets-v11'
// });

class ParkMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: this.props.latitude,
            longitude: this.props.longitude,
            zoom: 9
        }
        this.mapContainer = React.createRef();

    }

    componentDidMount() {
        const { longitude, latitude, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [longitude, latitude],
            zoom: zoom
        })
    }




    render() {

        // let x = document.createElement('div');
        // x.className = "marker";
        // new mapboxgl.Marker(x)
        //     .setLngLat([latitude, longitude])
        //     .addTo(map)

        return (
            <div>
                <div className="park-map" ref={this.mapContainer} />
            </div>
        )
    }
}

export default ParkMap;