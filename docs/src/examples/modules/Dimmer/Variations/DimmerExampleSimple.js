import React from 'react'
import { Dimmer, Image, Segment } from 'semantic-ui-react'

const DimmerExampleSimple = () => (
  <Dimmer.Dimmable as={Segment} dimmed>
    <Dimmer simple />

    <p>
      <Image src='/assets/images/wireframe/short-paragraph.png' />
    </p>
    <p>
      <Image src='/assets/images/wireframe/short-paragraph.png' />
    </p>
  </Dimmer.Dimmable>
)

export default DimmerExampleSimple
