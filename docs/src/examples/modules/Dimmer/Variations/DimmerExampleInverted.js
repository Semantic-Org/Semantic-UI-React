import React, { Component } from 'react'
import {
  DimmerDimmable,
  ButtonGroup,
  Button,
  Dimmer,
  Image,
  Segment,
} from 'semantic-ui-react'

export default class DimmerExampleInverted extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state

    return (
      <div>
        <DimmerDimmable as={Segment} dimmed={active}>
          <Dimmer active={active} inverted onClickOutside={this.handleHide} />

          <p>
            <Image src='/images/wireframe/paragraph.png' />
          </p>
          <p>
            <Image src='/images/wireframe/paragraph.png' />
          </p>
        </DimmerDimmable>

        <ButtonGroup>
          <Button icon='plus' onClick={this.handleShow} />
          <Button icon='minus' onClick={this.handleHide} />
        </ButtonGroup>
      </div>
    )
  }
}
