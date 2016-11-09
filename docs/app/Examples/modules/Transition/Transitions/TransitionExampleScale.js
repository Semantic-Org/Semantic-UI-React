import React from 'react'
import { Image, Transition } from 'semantic-ui-react'

const TransitionExampleScale = () => (
  <div>
    <Transition
      active
      animation='scale'
      as={Image}
      size='small'
      src='http://semantic-ui.com/images/leaves/1.png'
      visible
    />
  </div>
)
export default TransitionExampleScale
