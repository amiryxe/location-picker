import React from 'react';
import data from '../../util/Data';
import './List.scss';

const List = () => {
  return (
    <div className='list-wrapper'>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <button>{item.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
