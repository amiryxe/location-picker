import React, { useContext } from 'react';
import MainContext from '../../context/mainContext';

import data from '../../util/Data';
import './List.scss';

const List = () => {
  const { setCurrentPosition, currentPosition } = useContext(MainContext);

  const changePositionHandler = (lat, lng) => {
    setCurrentPosition([lat, lng]);
  };

  return (
    <div className='list-wrapper'>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <input
              type='radio'
              onClick={() => changePositionHandler(item.lat, item.lng)}
              name='position'
              id={item.id}
            />
            <label htmlFor={item.id}>{item.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
