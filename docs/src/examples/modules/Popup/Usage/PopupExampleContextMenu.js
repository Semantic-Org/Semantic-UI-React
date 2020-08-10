import React from 'react'
import { Menu, Popup, Segment } from 'semantic-ui-react'

function createContextFromEvent(e) {
  const left = e.clientX
  const top = e.clientY
  const right = left + 1
  const bottom = top + 1

  return {
    getBoundingClientRect: () => ({
      left,
      top,
      right,
      bottom,

      height: 0,
      width: 0,
    }),
  }
}

function PopupExampleContextMenu() {
  const contextRef = React.useRef()
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Segment
        onContextMenu={(e) => {
          e.preventDefault()

          contextRef.current = createContextFromEvent(e)
          setOpen(true)
        }}
        secondary
        style={{ height: 200 }}
        tabIndex={0}
      >
        Press Context Menu button or perform a right click in this area to open
        a popup
      </Segment>

      <Popup
        basic
        context={contextRef}
        onClose={() => setOpen(false)}
        open={open}
      >
        <Menu
          items={[
            { key: 'copy', content: 'Copy', icon: 'copy' },
            { key: 'code', content: 'View source code', icon: 'code' },
          ]}
          onItemClick={() => setOpen(false)}
          secondary
          vertical
        />
      </Popup>
    </>
  )
}

export default PopupExampleContextMenu
