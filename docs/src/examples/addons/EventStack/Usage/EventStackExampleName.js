import React, { Component } from 'react'
import { Button, Checkbox, EventStack, Label, Grid, Segment } from 'semantic-ui-react'

export default class EventStackExampleName extends Component {
  state = {
    enabled: false,
    log: [],
    logCount: 0,
  }

  clearLog = () => this.setState({ log: [], logCount: 0 })

  toggleEnabled = () => this.setState({ enabled: !this.state.enabled })

  updateLog = eventName => () =>
    this.setState({
      log: [`${new Date().toLocaleTimeString()}: ${eventName}`, ...this.state.log].slice(0, 20),
      logCount: this.state.logCount + 1,
    })

  handleResize = this.updateLog('resize')

  handleScroll = this.updateLog('scroll')

  render() {
    const { enabled, log, logCount } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column>
          <Segment.Group>
            <Segment>
              <Checkbox
                checked={enabled}
                label='Enable listeners'
                onChange={this.toggleEnabled}
                toggle
              />
            </Segment>
            <Segment>
              {enabled && <EventStack name='resize' on={this.handleResize} target='window' />}
              {enabled && <EventStack name='scroll' on={this.handleScroll} target='window' />}

              <p>When listeners are enabled try to resize or scroll window.</p>
            </Segment>
          </Segment.Group>
        </Grid.Column>

        <Grid.Column>
          <Segment.Group>
            <Segment>
              <Button compact size='small' floated='right' onClick={this.clearLog}>
                Clear
              </Button>
              Event Log <Label circular>{logCount}</Label>
            </Segment>
            <Segment secondary>
              <pre>{log.map((e, i) => <div key={i}>{e}</div>)}</pre>
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    )
  }
}
