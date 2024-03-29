import { useState } from 'react'
import MainContext from './mainContext'

export default function MainState(props) {
  const [currentPosition, setCurrentPosition] = useState([32.637253, 51.65407])

  const [active, setActive] = useState(5)

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
  )
}