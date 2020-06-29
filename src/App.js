import React from 'react';
import MapPreview from './components/Map/MapPreview';
import List from './components/List/List';
import 'vazir-font/dist/font-face.css';
import 'leaflet/dist/leaflet.css';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div style={{ width: 600 }}>
        <MapPreview />
      </div>
      <div style={{ width: 300 }}>
        <List />
      </div>
    </div>
  );
}

export default App;
