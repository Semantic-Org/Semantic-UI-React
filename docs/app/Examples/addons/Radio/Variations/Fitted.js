import React from 'react'
import { Radio, Segment } from 'semantic-ui-react'

const RadioFittedExample = () => (
  <div>
    <Segment compact>
      <Radio />
    </Segment>
    <Segment compact>
      <Radio slider />
    </Segment>
    <Segment compact>
      <Radio toggle />
    </Segment>
  </div>
)

export default RadioFittedExample
