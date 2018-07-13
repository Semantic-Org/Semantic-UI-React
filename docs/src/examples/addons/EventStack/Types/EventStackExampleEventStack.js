import React, { Component } from 'react'
import { Button, Checkbox, EventStack, Label, Grid, Icon, Segment } from 'semantic-ui-react'

export default class EventStackExampleEventStack extends Component {
  state = {
    enabled: false,
    log: [],
    logCount: 0,
  }

  clearLog = () => this.setState({ log: [], logCount: 0 })

  handleRef = node => this.setState({ node })

  toggleEnabled = () => this.setState({ enabled: !this.state.enabled })

  updateLog = () =>
    this.setState({
      log: [`${new Date().toLocaleTimeString()}: Click`, ...this.state.log].slice(0, 20),
      logCount: this.state.logCount + 1,
    })

  render() {
    const { enabled, log, logCount, node } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column>
          <Segment.Group>
            <Segment>
              <Checkbox
                checked={enabled}
                label='Enable listener'
                onChange={this.toggleEnabled}
                toggle
              />
            </Segment>
            <Segment>
              {enabled && <EventStack name='click' on={this.updateLog} target={node} />}

              <div ref={this.handleRef}>
                An example element, <Icon name='hand pointer outline' /> click there when listener
                is enabled.
              </div>
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
