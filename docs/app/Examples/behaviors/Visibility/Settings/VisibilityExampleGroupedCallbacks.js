import React, { Component } from 'react'
import { Button, Checkbox, Divider, Grid, Label, Segment, Sticky, Visibility } from 'semantic-ui-react'

import Wireframe from '../Wireframe'

export default class VisibilityExampleGroupedCallbacks extends Component {
  state = {
    continuous: false,
    log: [],
    logCount: 0,
    once: true,
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  updateLog = eventName => () => this.setState(({
    log: [
      `${new Date().toLocaleTimeString()}: ${eventName}`,
      ...this.state.log,
    ].slice(0, 20),
    logCount: this.state.logCount + 1,
  }))

  clearLog = () => this.setState({ log: [], logCount: 0 })

  toggleOnce = () => this.setState({ once: !this.state.once })

  toggleContinuous = () => this.setState({ continuous: !this.state.continuous })

  render() {
    const { continuous, contextRef, log, logCount, once } = this.state

    return (
      <div ref={this.handleContextRef}>
        <Grid columns={2}>
          <Grid.Column>
            <Visibility
              continuous={continuous}
              once={once}
              onPassed={{
                10: this.updateLog('10px'),
                100: this.updateLog('100px'),
                500: this.updateLog('500px'),
                '10%': this.updateLog('10%'),
                '25%': this.updateLog('25%'),
                '80%': this.updateLog('80%'),
              }}
            >
              <Wireframe />
            </Visibility>
          </Grid.Column>

          <Grid.Column>
            <Sticky context={contextRef}>
              <Segment.Group>
                <Segment>
                  <Checkbox checked={once} label='Once' onChange={this.toggleOnce} toggle />
                  <Divider />
                  <Checkbox checked={continuous} label='Continuous' onChange={this.toggleContinuous} toggle />
                </Segment>
                <Segment>
                  <Button compact size='small' floated='right' onClick={this.clearLog}>Clear</Button>
                  Event Log <Label circular>{logCount}</Label>
                </Segment>
                <Segment secondary>
                  <pre>{log.map((e, i) => <div key={i}>{e}</div>)}</pre>
                </Segment>
              </Segment.Group>
            </Sticky>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
