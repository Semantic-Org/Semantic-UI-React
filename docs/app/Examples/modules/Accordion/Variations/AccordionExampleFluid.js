import _ from 'lodash'
import faker from 'faker'
import React from 'react'
import { Accordion } from 'semantic-ui-react'

const panels = _.times(3, () => ({
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(),
}))

const AccordionExampleFluid = () => (
  <Accordion panels={panels} fluid />
)

export default AccordionExampleFluid
