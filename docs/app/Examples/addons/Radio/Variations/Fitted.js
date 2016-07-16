import React from 'react'
import { Radio, Segment } from 'stardust'

const RadioFittedExample = () => (
  <div>
    <Segment className='compact'>
      <Radio />
    </Segment>
    <Segment className='compact'>
      <Radio type='slider' />
    </Segment>
    <Segment className='compact'>
      <Radio type='toggle' />
    </Segment>
  </div>
)

export default RadioFittedExample
