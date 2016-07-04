import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Accordion, Segment } from 'stardust'

const panels = _.times(3, () => ({
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(),
}))

export default class AccordionInvertedExample extends Component {
  render() {
    return (
      <Segment className='inverted'>
        <Accordion panels={panels} inverted />
      </Segment>
    )
  }
}
