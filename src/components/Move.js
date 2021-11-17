import Moveable from 'react-moveable'

export default function Move({ target, frame, setFrame }) {
  return (
    <Moveable
      target={target}
      resizable={true}
      originDraggable={true}
      originRelative={true}
      draggable={true}
      keepRatio={false}
      throttleResize={0}
      renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
      edge={false}
      zoom={1}
      origin={true}
      padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
      onResizeStart={e => {
        e.setOrigin(['%', '%'])
        e.dragStart && e.dragStart.set(frame.translate)
      }}
      onResize={e => {
        const beforeTranslate = e.drag.beforeTranslate

        setFrame(v => ({ ...v, translate: beforeTranslate }))
        e.target.style.width = `${e.width}px`
        e.target.style.height = `${e.height}px`
        e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`
      }}
      onDragStart={e => {
        e.set(frame.translate)
      }}
      onDrag={e => {
        const beforeTranslate = e.beforeTranslate
        setFrame(v => ({ ...v, translate: beforeTranslate }))
      }}
      onRender={e => {
        const { translate, rotate, transformOrigin } = frame
        e.target.style.transformOrigin = transformOrigin
        e.target.style.transform =
          `translate(${translate[0]}px, ${translate[1]}px)` +
          ` rotate(${rotate}deg)`
      }}
    />
  )
}
