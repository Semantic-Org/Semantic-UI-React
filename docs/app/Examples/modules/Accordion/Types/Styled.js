import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Accordion } from 'stardust'

const panels = _.times(3, () => ({
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(),
}))

export default class AccordionStyledExample extends Component {
  render() {
    return (
      <Accordion panels={panels} styled />
    )
  }
}
