import React, { Component } from 'react'
import { Button, Checkbox, Divider, Grid, Segment, Visibility } from 'semantic-ui-react'

import Wireframe from '../Wireframe'

export default class VisibilityExample extends Component {
  state = {
    continuous: false,
    log: [],
    once: true,
  }

  updateLog = eventName => () => this.setState({ log: [eventName, ...this.state.log] })

  clearLog = () => this.setState({ log: [] })

  toggleOnce = () => this.setState({ once: !this.state.once })

  toggleContinuous = () => this.setState({ continuous: !this.state.continuous })

  render() {
    const { continuous, log, once } = this.state

    return (
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
          <Segment.Group>
            <Segment>
              <Button floated='right' onClick={this.clearLog}>Clear</Button>
              <Checkbox checked={once} label='Once' onChange={this.toggleOnce} toggle />
              <Divider />
              <Checkbox checked={continuous} label='Continuous' onChange={this.toggleContinuous} toggle />
            </Segment>
            <Segment>Event Log</Segment>
            <Segment>
              <pre style={{ height: 300, overflowY: 'scroll' }}>
                {log.map((e, i) => <p key={i}>{e} fired</p>)}
              </pre>
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    )
  }
}
