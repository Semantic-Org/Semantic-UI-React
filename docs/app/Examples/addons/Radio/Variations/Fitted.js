import React from 'react'
import { Radio, Segment } from 'stardust'

const RadioFittedExample = () => (
  <div>
    <Segment className='compact'>
      <Radio />
    </Segment>
    <Segment className='compact'>
      <Radio slider />
    </Segment>
    <Segment className='compact'>
      <Radio toggle />
    </Segment>
  </div>
)

export default RadioFittedExample
