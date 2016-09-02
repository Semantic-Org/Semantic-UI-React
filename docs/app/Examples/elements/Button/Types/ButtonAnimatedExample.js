import React from 'react'
import { Button, Icon } from 'stardust'

const ButtonAnimatedExample = () => (
  <Button animated>
    <div className='visible content'>Next</div>
    <div className='hidden content'>
      <Icon name='right arrow' />
    </div>
  </Button>
)

export default ButtonAnimatedExample
