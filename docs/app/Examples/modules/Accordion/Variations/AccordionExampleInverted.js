import _ from 'lodash'
import faker from 'faker'
import React from 'react'
import { Accordion, Segment } from 'semantic-ui-react'

const panels = _.times(3, () => ({
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(),
}))

const AccordionExampleInverted = () => (
  <Segment inverted>
    <Accordion panels={panels} inverted />
  </Segment>
)

export default AccordionExampleInverted
