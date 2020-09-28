import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'

function PopupExampleOffsetFunction() {
  const offset = ({ placement, popper }) => {
    if (placement === 'bottom') {
      return [0, popper.height / 2]
    }

    return []
  }

  return (
    <>
      <Popup
        trigger={<Icon size='large' name='heart' circular />}
        content='Has no offset'
        offset={offset}
        position='top center'
      />
      <Popup
        trigger={<Icon size='large' name='heart' circular />}
        content='Has a half width offset'
        offset={offset}
        position='bottom center'
      />
    </>
  )
}

export default PopupExampleOffsetFunction
