import React, { Component } from 'react'
import {
  DimmerDimmable,
  ImageGroup,
  ButtonGroup,
  Button,
  Dimmer,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'

export default class DimmerExampleDimmer extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state

    return (
      <div>
        <DimmerDimmable as={Segment} dimmed={active}>
          <Header as='h3'>Overlayable Section</Header>
          <ImageGroup size='small' className='ui small images'>
            <Image src='/images/wireframe/image.png' />
            <Image src='/images/wireframe/image.png' />
            <Image src='/images/wireframe/image.png' />
          </ImageGroup>
          <Image size='medium' src='/images/wireframe/media-paragraph.png' />

          <Dimmer active={active} onClickOutside={this.handleHide} />
        </DimmerDimmable>

        <ButtonGroup>
          <Button icon='plus' onClick={this.handleShow} />
          <Button icon='minus' onClick={this.handleHide} />
        </ButtonGroup>
      </div>
    )
  }
}
