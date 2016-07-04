import React, { Component } from 'react'
import { Accordion } from 'stardust'
import faker from 'faker'
import _ from 'lodash'

const panels = _.times(3, () => ({
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(),
}))

export default class AccordionPanelsPropExample extends Component {
  render() {
    return (
      <Accordion panels={panels} />
    )
  }
}
