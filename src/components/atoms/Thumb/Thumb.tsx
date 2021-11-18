import React from 'react'

import { ContainerThumb } from './styles-thumb'

interface IProps {
  children: React.ReactNode
  onClick: (index?: number) => void
}
const Thumb = ({ children, onClick }: IProps) => {
  return <ContainerThumb onClick={() => onClick()}>{children}</ContainerThumb>
}

export default Thumb
