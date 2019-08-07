import React, { Component } from 'react'
import { Button, Divider, Embed } from 'semantic-ui-react'

export default class EmbedExampleActive extends Component {
  state = {}

  handleClick = () => this.setState({ active: true })

  render() {
    const { active } = this.state

    return (
      <div>
        <Embed
          active={active}
          icon='arrow circle down'
          id='90Omh7_I8vI'
          placeholder='/images/image-16by9.png'
          source='youtube'
        />

        <Divider hidden />

        <Button
          content='Activate'
          icon='bomb'
          labelPosition='left'
          onClick={this.handleClick}
        />
      </div>
    )
  }
}
