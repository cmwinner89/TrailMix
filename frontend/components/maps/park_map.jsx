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
            // latitude: this.props.latitude,
            // longitude: this.props.longitude,
            // zoom: 14.77,
            // center: [127.60597, 35.67283],
            // pitch: 43,
            // style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y'
            latitude: this.props.latitude,
            longitude: this.props.longitude,
            zoom: 9
        }
        this.mapContainer = React.createRef();

    }

    componentDidMount() {
        const { longitude, latitude, zoom, pitch } = this.state;
        this.map = new mapboxgl.Map({
            // container: this.mapContainer.current,
            // style: this.state.style,
            // center: [longitude, latitude],
            // latitude: latitude,
            // longitude: longitude,
            // zoom: zoom,
            // pitch: this.state.pitch

            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [longitude, latitude],
            zoom: zoom
        })

        var el = document.createElement('div');
        el.className = 'marker';


        new mapboxgl.Marker(el)
            .setLngLat([longitude, latitude])
            .addTo(this.map);

        // this.map.on('move', () => {
        //     this.setState({
        //         longitude: this.map.getCenter().longitude.toFixed(4),
        //         latitude: this.map.getCenter().latitude.toFixed(4),
        //         zoom: this.map.getZoom().toFixed(2)
        //     });
        // });
    }

    render() {



        return (
            <div>
                <div className="park-map" ref={this.mapContainer} />
            </div>
        )
    }
}

export default ParkMap;