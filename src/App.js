import MapPreview from './components/Map/MapPreview'
import List from './components/List/List'
import Info from './components/Info'
import MainState from './context/MainState'
import 'vazirmatn/Vazirmatn-font-face.css'
import 'leaflet/dist/leaflet.css'
import './App.scss'

export default function App() {
  return (
    <div className='container'>
      <MainState>
        <div>
          <MapPreview />
          <Info />
        </div>
        <div style={{ width: 350 }}>
          <List />
        </div>
      </MainState>
    </div>
  )
}