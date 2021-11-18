import React, { useState, useEffect } from 'react'

import { ContainerEditView } from './styles-edit-view'

interface IProps {
  layers: React.ReactNode[]
  forceIndex?: number
  fixed?: boolean
  fontSize?: number
}
const EditView = ({ layers, forceIndex, fixed, fontSize }: IProps) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    forceIndex && setIndex(forceIndex)
  }, [forceIndex])

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') {
      setIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'ArrowRight') {
      setIndex(prev => Math.min(prev + 1, layers.length))
    }
  }

  useEffect(() => {
    if (!fixed) {
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [layers])

  return (
    <ContainerEditView fontSize={fontSize}>
      {layers.slice(0, index).map((layer, index) => (
        <div key={index}>{layer}</div>
      ))}
    </ContainerEditView>
  )
}

export default EditView
