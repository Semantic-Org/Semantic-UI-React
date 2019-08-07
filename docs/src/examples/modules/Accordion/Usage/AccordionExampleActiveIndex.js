import faker from 'faker'
import _ from 'lodash'
import React, { Component } from 'react'
import { Accordion, Segment } from 'semantic-ui-react'

const panels = _.times(3, (i) => ({
  key: `panel-${i}`,
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(),
}))

export default class AccordionExampleActiveIndex extends Component {
  state = { activeIndex: 0 }

  handleSliderChange = (e) =>
    this.setState({ activeIndex: Number(e.target.value) })

  handleTitleClick = (e, itemProps) => {
    const { index } = itemProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <div>
        <Segment secondary>
          <div>activeIndex: {activeIndex}</div>
          <input
            type='range'
            min='-1'
            max={panels.length - 1}
            value={activeIndex}
            onChange={this.handleSliderChange}
          />
        </Segment>

        <Accordion
          activeIndex={activeIndex}
          panels={panels}
          onTitleClick={this.handleTitleClick}
        />
      </div>
    )
  }
}
