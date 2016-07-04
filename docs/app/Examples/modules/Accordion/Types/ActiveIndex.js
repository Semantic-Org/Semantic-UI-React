import faker from 'faker'
import _ from 'lodash'
import React, { Component } from 'react'
import { Accordion } from 'stardust'

const panels = _.times(3, () => ({
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(),
}))

export default class AccordionActiveIndexExample extends Component {
  state = { activeIndex: 0 }

  handleSliderChange = (e) => this.setState({
    activeIndex: Number(e.target.value),
  })

  handleTitleClick = (e, i) => this.setState({
    activeIndex: this.state.activeIndex === i ? -1 : i,
  })

  render() {
    const { activeIndex } = this.state
    return (
      <div>
        <div>activeIndex: {activeIndex}</div>
        <input
          type='range'
          min='-1'
          max={panels.length - 1}
          value={activeIndex}
          onChange={this.handleSliderChange}
        />
        <Accordion
          activeIndex={activeIndex}
          panels={panels}
          onTitleClick={this.handleTitleClick}
        />
      </div>
    )
  }
}
