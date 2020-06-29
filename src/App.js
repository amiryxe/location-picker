import React from 'react';
import MapPreview from './components/Map/MapPreview';
import List from './components/List/List';
import Info from './components/Info';
import MainState from './context/MainState';
import 'vazir-font/dist/font-face.css';
import 'leaflet/dist/leaflet.css';
import './App.css';

function App() {
  return (
    <div className='container'>
      <MainState>
        <div style={{ width: 800 }}>
          <MapPreview />
          <Info />
        </div>
        <div style={{ width: 350 }}>
          <List />
        </div>
      </MainState>
    </div>
  );
}

export default App;
