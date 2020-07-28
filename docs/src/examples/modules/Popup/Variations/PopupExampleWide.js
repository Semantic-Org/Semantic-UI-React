import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'

const PopupExampleWide = () => (
  <>
    <Popup trigger={<Icon circular name='heart' />}>
      Hello. This is a regular pop-up which does not allow for lots of content.
      You cannot fit a lot of words here as the paragraphs will be pretty
      narrow.
    </Popup>
    <Popup trigger={<Icon circular name='heart' />} wide>
      Hello. This is a wide pop-up which allows for lots of content with
      additional space. You can fit a lot of words here and the paragraphs will
      be pretty wide.
    </Popup>
    <Popup trigger={<Icon circular name='heart' />} wide='very'>
      Hello. This is a very wide pop-up which allows for lots of content with
      additional space. You can fit a lot of words here and the paragraphs will
      be pretty wide.
    </Popup>
  </>
)

export default PopupExampleWide
