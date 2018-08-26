import React, { Component } from 'react'
import { Button, Dimmer, Image, Segment } from 'semantic-ui-react'

export default class DimmerExampleInverted extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state

    return (
      <div>
        <Dimmer.Dimmable as={Segment} dimmed={active}>
          <Dimmer active={active} inverted onClickOutside={this.handleHide} />

          <p>
            <Image src='/images/wireframe/paragraph.png' />
          </p>
          <p>
            <Image src='/images/wireframe/paragraph.png' />
          </p>
        </Dimmer.Dimmable>

        <Button.Group>
          <Button icon='plus' onClick={this.handleShow} />
          <Button icon='minus' onClick={this.handleHide} />
        </Button.Group>
      </div>
    )
  }
}
