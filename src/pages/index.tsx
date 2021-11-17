import Layer from '../components/Layer'
import TimeLine from '../components/TimeLine'
import Viewer from '../components/Viewer'
import { Title } from '../components/elements'
import { useState, useEffect } from 'react'
import 'animate.css'

export default function Home() {
  const [index, setIndex] = useState(0)
  const [elements, setElements] = useState<null | NodeListOf<Element>>(null)
  const [full, setFull] = useState(false)

  function handleKey(event: KeyboardEvent) {
    if (!elements) {
      console.log('no elements')
      return
    }

    if (event.key === 'ArrowLeft') {
      setIndex(prev => Math.max(prev - 1, 0))
    }
    if (event.key === 'ArrowRight') {
      setIndex(prev => Math.min(prev + 1, elements.length - 1))
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setIndex(1)
    }, 300)
  }, [])
  useEffect(() => {
    window.addEventListener('keydown', handleKey)

    return () => {
      window.removeEventListener('keydown', handleKey)
    }
  }, [elements])

  useEffect(() => {
    const elements = document.querySelectorAll('.container > div > *')
    setElements(elements)

    if (index >= elements.length - 1) setFull(true)
    else setFull(false)
    // ;[...elements].slice(0, index).forEach((el: any) => {
    //   el.classList.add('animate__backInDown', 'show')
    // })
    // ;[...elements].slice(index).forEach((el: any) => {
    //   el.classList.remove('animate__backInDown', 'show')
    //   // el.classList.add('animate__animated', 'animate__fadeOutDown')
    // })
  }, [index])

  return (
    <div className="container">
      <Viewer full={full}>
        <Title className="animate__backInDown animate__animated">
          O que significa have??
        </Title>
        <p className="animate__animated">have significa que você tem algo</p>
        <p className="animate__animated">por exemplo uma casa</p>
        <div>
          <p className="animate__animated"> meu carro é novo</p>
          <p className="animate__animated"> eu tenho um carro</p>
        </div>
      </Viewer>
    </div>
  )
}
