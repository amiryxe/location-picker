import React, { useContext } from 'react';
import MainContext from '../../context/mainContext';

import data from '../../util/Data';
import './List.scss';

const List = () => {
  const { setCurrentPosition } = useContext(MainContext);

  const changePositionHandler = (lat, lng) => {
    setCurrentPosition([lat, lng]);
  };

  return (
    <div className='list-wrapper'>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <button onClick={() => changePositionHandler(item.lat, item.lng)}>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
