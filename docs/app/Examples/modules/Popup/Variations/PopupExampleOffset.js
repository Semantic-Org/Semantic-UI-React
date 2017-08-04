import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'

const PopupExampleOffset = () => (
  <div>
    <Popup
      trigger={<Icon size='large' name='heart' circular />}
      content='Way off to the left'
      offset={50}
      position='left center'
    />
    <Popup
      trigger={<Icon size='large' name='heart' circular />}
      content='As expected this popup is way off to the right'
      offset={50}
      position='right center'
    />
  </div>
)

export default PopupExampleOffset
