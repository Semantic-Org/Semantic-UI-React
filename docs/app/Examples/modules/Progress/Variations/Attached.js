import React from 'react'
import { Progress, Segment } from 'semantic-ui-react'

const ProgressAttachedExample = () => (
  <Segment>
    <Progress percent={50} attached='top' />
    La la la la
    <Progress percent={50} attached='bottom' />
  </Segment>
)

export default ProgressAttachedExample
