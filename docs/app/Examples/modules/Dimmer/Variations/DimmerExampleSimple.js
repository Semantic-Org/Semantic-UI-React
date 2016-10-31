import React from 'react'
import { Dimmer, Segment } from 'semantic-ui-react'

const DimmerExampleSimple = () => (
  <Dimmer.Dimmable as={Segment} dimmed>
    <Dimmer simple />

    <p>
      <img src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </p>
    <p>
      <img src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </p>
  </Dimmer.Dimmable>
)

export default DimmerExampleSimple
