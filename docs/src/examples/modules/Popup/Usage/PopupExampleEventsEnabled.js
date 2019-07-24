import { useBooleanKnob } from '@stardust-ui/docs-components'
import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupExampleEventsEnabled = () => {
  const [eventsEnabled] = useBooleanKnob({
    name: 'eventsEnabled',
    initialValue: true,
  })
  const [open, setOpen] = useBooleanKnob({ name: 'open' })

  return (
    <Popup
      content='Hello'
      eventsEnabled={eventsEnabled}
      on='click'
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button content='A trigger' />}
    />
  )
}

export default PopupExampleEventsEnabled
