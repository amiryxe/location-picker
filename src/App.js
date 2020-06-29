import React from 'react';
import MapPreview from './components/Map/MapPreview';
import List from './components/List/List';
import 'leaflet/dist/leaflet.css';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div style={{ width: 300 }}>
        <MapPreview />
      </div>
      <div style={{ width: 300 }}>
        <List />
      </div>
    </div>
  );
}

export default App;
