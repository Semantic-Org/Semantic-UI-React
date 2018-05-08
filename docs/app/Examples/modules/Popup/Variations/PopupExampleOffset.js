import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'

const PopupExampleOffset = () => (
  <div>
    <Popup
      trigger={<Icon size='large' name='heart' circular />}
      content='Way off to the left'
      horizontalOffset={50}
      position='left center'
    />
    <Popup
      trigger={<Icon size='large' name='heart' circular />}
      content='As expected this popup is way off to the right'
      horizontalOffset={50}
      position='right center'
    />
    <Popup
      trigger={<Icon size='large' name='heart' circular />}
      content='Way off to the top'
      verticalOffset={50}
      position='top center'
    />
    <Popup
      trigger={<Icon size='large' name='heart' circular />}
      content='As expected this popup is way off to the bottom'
      verticalOffset={50}
      position='bottom center'
    />
  </div>
)

export default PopupExampleOffset
