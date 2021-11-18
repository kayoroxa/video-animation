import React from 'react'

import { ContainerModeEdit } from './styles-mode-edit'
import View from '../../organisms/EditView'
import { useState, useEffect } from 'react'

interface IProps {}
const ModeEdit = ({}: IProps) => {
  const [indexLayer, setIndexLayer] = useState(0)

  const [frames, setFrames] = useState([
    [
      <div id="primeiro">primeiro text</div>,
      <div id="segundo">segundo text</div>,
    ],
    [
      <div id="primeiro">primeiro text</div>,
      <div id="segundo">segundo text</div>,
      <div id="terceiro">terceiro text</div>,
    ],
  ])

  function handleIncrease() {
    setIndexLayer(prev => Math.min(prev + 1, frames.length - 1))
  }
  function handleDecrease() {
    setIndexLayer(prev => Math.max(prev - 1, 0))
  }

  return (
    <ContainerModeEdit>
      <div>{indexLayer}</div>
      <div>
        <button onClick={handleIncrease}>Increase Index Layer</button>
        <button onClick={handleDecrease}>Decrease Index Layer</button>
      </div>
      {/* <TimeLine /> */}
      <View layers={frames[indexLayer]} />
      {/* <Controls /> */}
    </ContainerModeEdit>
  )
}

export default ModeEdit
