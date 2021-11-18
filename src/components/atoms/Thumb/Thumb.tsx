import React from 'react'

import { ContainerThumb } from './styles-thumb'

interface IProps {
  children: React.ReactNode
  onClick: (index?: number) => void
  highlight?: boolean
}
const Thumb = ({ children, onClick, highlight }: IProps) => {
  return (
    <ContainerThumb highlight={highlight} onClick={() => onClick()}>
      {children}
    </ContainerThumb>
  )
}

export default Thumb
