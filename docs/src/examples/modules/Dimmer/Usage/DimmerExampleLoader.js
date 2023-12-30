import React, { Component } from 'react'
import {
  DimmerDimmable,
  ButtonGroup,
  Button,
  Dimmer,
  Image,
  Loader,
  Segment,
} from 'semantic-ui-react'

export default class DimmerExampleLoader extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state

    return (
      <div>
        <DimmerDimmable as={Segment} dimmed={active}>
          <Dimmer active={active} inverted>
            <Loader>Loading</Loader>
          </Dimmer>

          <p>
            <Image src='/images/wireframe/short-paragraph.png' />
          </p>
          <p>
            <Image src='/images/wireframe/short-paragraph.png' />
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
