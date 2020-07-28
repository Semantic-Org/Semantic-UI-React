import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'

const PopupExampleOffset = () => (
  <>
    <Popup
      trigger={<Icon size='large' name='heart' circular />}
      content='Way off to the left'
      offset='0, 50px'
      position='left center'
    />
    <Popup
      trigger={<Icon size='large' name='heart' circular />}
      content='As expected this popup is way off to the right'
      offset='0, 50px'
      position='right center'
    />
    <Popup
      trigger={<Icon size='large' name='heart' circular />}
      content='Way off to the top'
      offset='0, 50px'
      position='top center'
    />
    <Popup
      trigger={<Icon size='large' name='heart' circular />}
      content='As expected this popup is way off to the bottom'
      offset='0, 50px'
      position='bottom center'
    />
  </>
)

export default PopupExampleOffset
