import faker from 'faker'
import times from 'lodash/times'
import React from 'react'
import { Accordion } from 'semantic-ui-react'

const panels = times(3, (i) => ({
  key: `panel-${i}`,
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(),
}))

const AccordionExampleExclusive = () => (
  <Accordion
    defaultActiveIndex={[0, 2]}
    panels={panels}
    exclusive={false}
    fluid
  />
)

export default AccordionExampleExclusive
