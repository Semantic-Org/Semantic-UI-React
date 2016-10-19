import React, { Component } from 'react'
import { Button, Dimmer, Segment } from 'semantic-ui-react'

export default class DimmerExampleBlurringInverted extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state

    return (
      <div>
        <Dimmer blurring dimmable={Segment} dimmed={active}>
          <Dimmer active={active} inverted />

          <p>
            <img src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
          </p>
          <p>
            <img src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
          </p>
        </Dimmer>

        <Button.Group>
          <Button icon='plus' onClick={this.handleShow} />
          <Button icon='minus' onClick={this.handleHide} />
        </Button.Group>
      </div>
    )
  }
}
