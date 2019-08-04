import React, { Component } from 'react'
import { Button, Dimmer, Header, Icon } from 'semantic-ui-react'

export default class DimmerExamplePage extends Component {
  state = {}

  handleOpen = () => this.setState({ active: true })
  handleClose = () => this.setState({ active: false })

  render() {
    const { active } = this.state

    return (
      <div>
        <Button
          content='Show'
          icon='plus'
          labelPosition='left'
          onClick={this.handleOpen}
        />

        <Dimmer active={active} onClickOutside={this.handleClose} page>
          <Header as='h2' icon inverted>
            <Icon name='heart' />
            Dimmed Message!
            <Header.Subheader>Dimmer sub-header</Header.Subheader>
          </Header>
        </Dimmer>
      </div>
    )
  }
}
