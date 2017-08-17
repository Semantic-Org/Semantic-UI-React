import React from 'react'
import { Input, Popup } from 'semantic-ui-react'

const PopupExampleMultiple = () => (
  <Popup
    trigger={<Input icon='search' placeholder='Search...' />}
    header='Movie Search'
    content='You may search by genre, header, year and actors'
    on={['focus', 'hover']}
  />
)

export default PopupExampleMultiple
