import React from 'react';
import Map from './components/Map/Map';
import './App.css';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className='container'>
      <div>scroll</div>

      <div>
        <Map />
      </div>
    </div>
  );
}

export default App;
