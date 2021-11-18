import React from 'react'

import { ContainerModeEdit } from './styles-mode-edit'
import EditView from '../../organisms/EditView'
import TimeLine from '../../organisms/TimeLine'
import { useState, useEffect } from 'react'
import { Textfit } from 'react-textfit'
interface IProps {}
const ModeEdit = ({}: IProps) => {
  const [indexLayer, setIndexLayer] = useState(0)

  const [frames, setFrames] = useState([
    [
      <Textfit mode="single">me text</Textfit>,
      <Textfit mode="single">segundo text</Textfit>,
      // <div id="primeiro">primeiro text</div>,
      // <div id="segundo">segundo text</div>,
    ],
    [
      <div id="primeiro">primeiro text</div>,
      <div id="segundo">segundo text</div>,
      <div id="terceiro">terceiro text</div>,
    ],
  ])
  return (
    <ContainerModeEdit>
      <TimeLine
        setIndexLayer={setIndexLayer}
        indexLayer={indexLayer}
        len={frames.length}
        frames={frames}
      />
      <EditView
        layers={frames[indexLayer]}
        forceIndex={frames[indexLayer].length}
      />
      {/* <Controls /> */}
    </ContainerModeEdit>
  )
}

export default ModeEdit
