import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import data from '../../util/Data';
import './MapPreview.scss';

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapPreview = () => {
  const position = [32.633277, 51.666087];

  return (
    <Map
      className='map-wrapper'
      center={position}
      zoom={15}
      style={{ height: '80vh' }}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {data.map((item) => (
        <Marker key={item.id} position={[item.lat, item.lng]}>
          <Popup>{item.name}</Popup>
        </Marker>
      ))}
    </Map>
  );
};

export default MapPreview;
