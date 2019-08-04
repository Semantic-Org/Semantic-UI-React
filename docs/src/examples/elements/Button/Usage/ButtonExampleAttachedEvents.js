import React, { Component } from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react'

export default class ButtonExampleAttachedEvents extends Component {
  state = { log: [] }

  handleClick = () => this.updateLog('Button received click with mouse')

  handleKeyPress = (e) => {
    if (e.charCode === 32 || e.charCode === 13) {
      // Prevent the default action to stop scrolling when space is pressed
      e.preventDefault()
      this.updateLog('Button received click with keyboard')
    }
  }

  updateLog = (message) =>
    this.setState((prevState) => ({ log: [message, ...prevState.log] }))

  render() {
    const { log } = this.state

    return (
      <Grid>
        <Grid.Column width={8}>
          <Segment attached='top'>
            The button below accepts clicks with mouse and key presses with
            Space Bar or Enter.
          </Segment>
          <Button
            attached='bottom'
            content='Click'
            onClick={this.handleClick}
            onKeyPress={this.handleKeyPress}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Segment>
            <pre style={{ height: 100, overflowY: 'scroll' }}>
              {log.map((e, i) => (
                <p key={i}>{e}</p>
              ))}
            </pre>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
