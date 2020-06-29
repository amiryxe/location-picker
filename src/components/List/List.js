import React from 'react';
import data from '../../util/Data';
import './List.scss';

const List = () => {
  return (
    <div className='list-wrapper'>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
};

export default List;
