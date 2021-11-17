import React, { useState, useEffect, useRef } from 'react'

import { ContainerTimeLine } from './styles-time-line'

import Move from '../Move'

interface IProps {}
const TimeLine = ({}: IProps) => {
  useEffect(() => {
    document.querySelector('.layersin').style.transform = 'translateX(0)'
  }, [])

  const target = useRef<null | HTMLDivElement>(null)
  const [frame, setFrame] = useState({
    translate: [0, 0],
  })

  return (
    <ContainerTimeLine>
      <div ref={target} className="layersin">
        ois
      </div>
      {target && <Move target={target} frame={frame} setFrame={setFrame} />}
    </ContainerTimeLine>
  )
}

export default TimeLine
