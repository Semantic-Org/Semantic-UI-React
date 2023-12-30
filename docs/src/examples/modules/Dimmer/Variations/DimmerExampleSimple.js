import React from 'react'
import { DimmerDimmable, Dimmer, Image, Segment } from 'semantic-ui-react'

const DimmerExampleSimple = () => (
  <DimmerDimmable as={Segment} dimmed>
    <Dimmer simple />

    <p>
      <Image src='/images/wireframe/short-paragraph.png' />
    </p>
    <p>
      <Image src='/images/wireframe/short-paragraph.png' />
    </p>
  </DimmerDimmable>
)

export default DimmerExampleSimple
