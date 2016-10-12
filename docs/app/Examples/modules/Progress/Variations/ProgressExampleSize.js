import React from 'react'
import { Progress } from 'semantic-ui-react'

const ProgressExampleSize = () => (
  <div>
    <Progress percent={10} size='tiny'>
      tiny
    </Progress>
    <Progress percent={20} size='small'>
      small
    </Progress>
    <Progress percent={35} size='medium'>
      medium
    </Progress>
    <Progress percent={60} size='large'>
      large
    </Progress>
    <Progress percent={90} size='big'>
      big
    </Progress>
  </div>
)
export default ProgressExampleSize
