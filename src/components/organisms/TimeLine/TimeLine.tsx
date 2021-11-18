import React from 'react'
import Thumb from '../../atoms/Thumb'
import EditView from '../EditView'

import { ContainerTimeLine } from './styles-time-line'

interface IProps {
  setIndexLayer: React.Dispatch<React.SetStateAction<number>>
  indexLayer: number
  len: number
  frames: React.ReactNode[][]
}
const TimeLine = ({ setIndexLayer, indexLayer, len, frames }: IProps) => {
  function handleIncrease() {
    setIndexLayer(prev => Math.min(prev + 1, len - 1))
  }
  function handleDecrease() {
    setIndexLayer(prev => Math.max(prev - 1, 0))
  }
  return (
    <ContainerTimeLine>
      <div className="index">{indexLayer}</div>
      <div className="container-buttons">
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
      </div>
      <div className="container-thumbs">
        {frames.map((frame, index) => (
          <Thumb key={index} onClick={() => setIndexLayer(index)}>
            <EditView
              layers={frame}
              forceIndex={frame.length}
              fixed={true}
              fontSize={10}
            />
          </Thumb>
        ))}
      </div>
    </ContainerTimeLine>
  )
}

export default TimeLine
