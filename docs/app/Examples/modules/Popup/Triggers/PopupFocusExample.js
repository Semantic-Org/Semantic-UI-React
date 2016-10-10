import React from 'react'
import { Input, Popup } from 'semantic-ui-react'

const PopupFocusExample = () => (
  <Popup
    trigger={<Input icon='search' placeholder='Search...' />}
    header='Movie Search'
    content='You may search by genre, header, year and actors'
    on='focus'
  />
)

export default PopupFocusExample
