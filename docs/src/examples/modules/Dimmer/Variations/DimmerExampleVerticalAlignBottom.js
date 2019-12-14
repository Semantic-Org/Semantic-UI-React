import React, { Component } from 'react'
import { Button, Dimmer, Header, Image, Segment } from 'semantic-ui-react'

export default class DimmerExampleVerticalAlignBottom extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state

    return (
      <div>
        <Dimmer.Dimmable as={Segment} dimmed={active}>
          <p>
            <Image src='/images/wireframe/short-paragraph.png' />
          </p>
          <p>
            <Image src='/images/wireframe/short-paragraph.png' />
          </p>

          <Dimmer
            active={active}
            onClickOutside={this.handleHide}
            verticalAlign='bottom'
          >
            <Header as='h2' inverted>
              Title
            </Header>

            <Button primary>Add</Button>
            <Button>View</Button>
          </Dimmer>
        </Dimmer.Dimmable>

        <Button.Group>
          <Button icon='plus' onClick={this.handleShow} />
          <Button icon='minus' onClick={this.handleHide} />
        </Button.Group>
      </div>
    )
  }
}
