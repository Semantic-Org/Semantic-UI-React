import { Location } from '@reach/router'
import React from 'react'

const withLocation = ChildComponent => (componentProps) => (
  <Location>
    {({ location }) => <ChildComponent location={location} {...componentProps} />}
  </Location>
)

export default withLocation
