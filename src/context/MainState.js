import React, { useState } from 'react';
import MainContext from './mainContext';

const MainState = (props) => {
  const [currentPosition, setCurrentPosition] = useState([
    32.633277,
    51.666087,
  ]);

  const [active, setActive] = useState(7);

  return (
    <MainContext.Provider
      value={{
        currentPosition,
        setCurrentPosition,

        active,
        setActive,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
