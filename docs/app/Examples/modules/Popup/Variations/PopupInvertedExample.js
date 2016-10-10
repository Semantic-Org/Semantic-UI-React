import React from 'react'
import { Button, Icon, Popup } from 'semantic-ui-react'

const PopupInvertedExample = () => (
  <div>
    <Popup
      trigger={<Button icon='add' />}
      content='Hello. This is an inverted popup'
      inverted
    />
    <Popup
      trigger={<Icon circular name='heart' />}
      content='Hello. This is an inverted popup'
      inverted
    />
  </div>
)

export default PopupInvertedExample
