import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import Container from '../Container';

class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 51.509865, lng: -0.118092 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
   return(
      <div>
      <Container>
        <GoogleMapExample
          containerElement={ <div style={{ height: `400px`, width: '400px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
        </Container>
      </div>
   );
   }
};
export default Map;
