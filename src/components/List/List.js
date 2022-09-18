import { useContext } from 'react'
import MainContext from '../../context/mainContext'

import data from '../../util/data'

import './List.scss'

export default function List() {
  const { setCurrentPosition, active, setActive } = useContext(MainContext)

  const changePositionHandler = (lat, lng, id) => {
    setCurrentPosition([lat, lng])
    setActive(id)
  }

  return (
    <div className='list-wrapper'>
      <ul>
        {data.map((item) => (
          <li key={item.id} id={'item' + item.id}>
            <input
              type='radio'
              onChange={() =>
                changePositionHandler(item.lat, item.lng, item.id)
              }
              name='position'
              id={item.id}
              checked={item.id === active}
            />
            <label htmlFor={item.id}>{item.name}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}