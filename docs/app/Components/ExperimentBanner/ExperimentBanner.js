import React from 'react'
import { Segment, Divider, Icon } from 'src'

const ExperimentBanner = () => (
  <a href='https://github.com/TechnologyAdvice/stardust/pull/427' target='_blank'>
    <Segment className='inverted basic orange center aligned'>
      <Icon name='warning sign' />
      <strong>EXPERIMENT</strong> in progress. Click here to help out on PR #427.
    </Segment>
    <Divider hidden />
  </a>
)

export default ExperimentBanner
