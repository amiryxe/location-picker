import React from 'react';
import data from '../../util/Data';

const List = () => {
  return (
    <div>
      {data.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </div>
  );
};

export default List;
