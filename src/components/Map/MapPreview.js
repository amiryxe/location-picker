import { useContext } from 'react';
import MainContext from '../../context/mainContext';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
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
  const { currentPosition, setActive, active } = useContext(MainContext);

  const clickMarkerHandler = (id) => {
    setActive(id);
    let item = document.getElementById('item' + id);
    item.scrollIntoView();
  };

  return (
    <MapContainer
      className='map-wrapper'
      center={currentPosition}
      zoom={16}
      style={{ height: '80vh' }}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {data.map((item) => (
        <Marker
          key={item.id}
          position={[item.lat, item.lng]}
          onClick={() => clickMarkerHandler(item.id)}
          opacity={active === item.id ? 1 : 0.6}
        >
          <Popup>{item.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapPreview;
