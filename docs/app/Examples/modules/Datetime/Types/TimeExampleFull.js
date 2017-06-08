import React from 'react'
import { Datetime } from 'semantic-ui-react'

const TimeExampleFull = () => (
  <Datetime date={false} time defaultValue={new Date()} icon='time' />
)

export default TimeExampleFull
