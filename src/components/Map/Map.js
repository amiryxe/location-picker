import React, { useEffect } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const Mapp = () => {
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, []);

  const position = [32.640724, 51.666823];

  return (
    <Map center={position} zoom={15} style={{ height: '100vh' }}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};

export default Mapp;
