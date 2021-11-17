import React from 'react'

import { ContainerViewer } from './styles-viewer'

interface IProps {
  children: any
  full?: boolean
}
const Viewer = ({ children, full }: IProps) => {
  return <ContainerViewer full={full || false}>{children}</ContainerViewer>
}

export default Viewer
