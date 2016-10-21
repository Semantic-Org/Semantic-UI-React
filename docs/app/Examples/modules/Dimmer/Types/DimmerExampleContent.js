import React, { Component } from 'react'
import { Button, Dimmer, Header, Icon, Image, Segment } from 'semantic-ui-react'

export default class DimmerExampleDimmer extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state

    return (
      <div>
        <Dimmer.Dimmable as={Segment} dimmed={active}>
          <Dimmer active={active} onClickOutside={this.handleHide}>
            <Header as='h2' icon inverted>
              <Icon name='heart' />
              Dimmed Message!
            </Header>
          </Dimmer>

          <Header as='h3'>Overlayable Section</Header>

          <Image.Group size='small' className='ui small images'>
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
          </Image.Group>

          <Image size='medium' src='http://semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Dimmer.Dimmable>

        <Button.Group>
          <Button icon='plus' onClick={this.handleShow} />
          <Button icon='minus' onClick={this.handleHide} />
        </Button.Group>
      </div>
    )
  }
}
