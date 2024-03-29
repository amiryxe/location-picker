import { useContext, useRef, useEffect } from 'react'
import MainContext from '../../context/mainContext'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import data from '../../util/data'

import './MapPreview.scss'

import L from 'leaflet'
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

export default function MapPreview() {
  const { currentPosition, setActive, active } = useContext(MainContext)
  const mapRef = useRef()

  useEffect(() => {
    mapRef.current?.flyTo(currentPosition);
  }, [currentPosition])

  const clickMarkerHandler = (id) => {
    setActive(id)
    const item = document.getElementById('item' + id)
    item.scrollIntoView()
  }

  return (
    <MapContainer
      className='map-wrapper'
      center={currentPosition}
      zoom={16}
      style={{ height: '80vh' }}
      whenCreated={mapInstance => { mapRef.current = mapInstance }}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {data.map(({ id, lat, lng, name }) => (
        <Marker
          key={id}
          position={[lat, lng]}
          onClick={() => clickMarkerHandler(id)}
          opacity={active === id ? 1 : 0.6}
        >
          <Popup>{name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}