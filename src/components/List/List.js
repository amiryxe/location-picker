import React from 'react';
import data from '../../util/Data';

const List = () => {
  return (
    <div>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
};

export default List;
