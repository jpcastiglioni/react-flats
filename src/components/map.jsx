import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div className="marker"></div>  ;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.88,
      lng: 2.34
    },
    zoom: 12
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBgMx7z-GuH6RSFhyaHi--6v6fK14i17i8' }}
          center={this.props.center}
          zoom={this.props.zoom}
        >
          <Marker
            lat={this.props.lat}
            lng={this.props.lng}
            text="MarkATRON"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
