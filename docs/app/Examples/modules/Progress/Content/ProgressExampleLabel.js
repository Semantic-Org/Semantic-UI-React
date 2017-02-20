import React from 'react'
import { Progress } from 'semantic-ui-react'

const ProgressExampleLabel = () => (
  <div>
    <Progress value='3' total='5' label='ratio' />
    <Progress value='4' total='5' label='percent' />
  </div>
)

export default ProgressExampleLabel
