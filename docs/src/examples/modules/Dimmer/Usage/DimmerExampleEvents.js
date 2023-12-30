import React, { Component } from 'react'
import { DimmerDimmable, Button, Header, Image } from 'semantic-ui-react'

export default class DimmerExampleEvents extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state
    const content = (
      <div>
        <Header as='h2' inverted>
          Title
        </Header>

        <Button primary>Add</Button>
        <Button>View</Button>
      </div>
    )

    return (
      <DimmerDimmable
        as={Image}
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
        size='medium'
        src='/images/wireframe/image.png'
      />
    )
  }
}
