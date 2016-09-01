import React from 'react'
import { Progress, Segment } from 'stardust'

const ProgressInvertedExample = () => (
  <Segment inverted>
    <Progress percent={21} inverted label>
      Uploading Files
    </Progress>
    <Progress percent={100} inverted label success>
      success
    </Progress>
    <Progress percent={100} inverted label warning>
      warning
    </Progress>
    <Progress percent={100} inverted label error>
      error
    </Progress>
  </Segment>
)
export default ProgressInvertedExample
