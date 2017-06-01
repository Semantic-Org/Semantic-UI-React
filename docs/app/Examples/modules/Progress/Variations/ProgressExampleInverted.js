import React from 'react'
import { Progress, Segment } from 'semantic-ui-react'

const ProgressExampleInverted = () => (
  <Segment inverted>
    <Progress percent={21} inverted progress>
      Uploading Files
    </Progress>
    <Progress percent={100} inverted progress success>
      success
    </Progress>
    <Progress percent={100} inverted progress warning>
      warning
    </Progress>
    <Progress percent={100} inverted progress error>
      error
    </Progress>
  </Segment>
)
export default ProgressExampleInverted
