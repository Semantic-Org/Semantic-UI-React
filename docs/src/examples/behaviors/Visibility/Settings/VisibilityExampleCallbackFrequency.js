import React, { Component } from 'react'
import { Button, Checkbox, Divider, Grid, Label, Segment, Sticky, Visibility } from 'semantic-ui-react'

import Wireframe from '../Wireframe'

export default class VisibilityExampleCallbackFrequency extends Component {
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
              onTopVisible={this.updateLog('onTopVisible')}
              onTopPassed={this.updateLog('onTopPassed')}
              onBottomVisible={this.updateLog('onBottomVisible')}
              onBottomPassed={this.updateLog('onBottomPassed')}
              onTopVisibleReverse={this.updateLog('onTopVisibleReverse')}
              onTopPassedReverse={this.updateLog('onTopPassedReverse')}
              onBottomVisibleReverse={this.updateLog('onBottomVisibleReverse')}
              onBottomPassedReverse={this.updateLog('onBottomPassedReverse')}
              onPassing={this.updateLog('onPassing')}
              onPassingReverse={this.updateLog('onPassingReverse')}
              onOnScreen={this.updateLog('onOnScreen')}
              onOffScreen={this.updateLog('onOffScreen')}
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
