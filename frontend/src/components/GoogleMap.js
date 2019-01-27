import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


class SimpleMap extends Component {


    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:"AIzaSyBZ_DclHQNZ1AdsJBuiUgVIRLD9XgpIUYI" }}
                    defaultCenter={{
                        lat: 49.26,
                        lng: -123.25
                    }}
                    defaultZoom={15}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
