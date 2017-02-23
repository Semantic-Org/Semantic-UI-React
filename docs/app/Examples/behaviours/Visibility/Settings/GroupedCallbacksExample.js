import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Divider,
  Grid,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import Wireframe from '../Wireframe'

class VisibilityExample extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      continuous: false,
      log: [],
      once: true,
    }

    this.clearLog = this.clearLog.bind(this)
    this.toggleOnce = this.toggleOnce.bind(this)
    this.toggleContinuous = this.toggleContinuous.bind(this)
  }

  updateLog(eventName) {
    this.setState({
      log: [eventName, ...this.state.log],
    })
  }

  clearLog() {
    this.setState({
      log: [],
    })
  }

  toggleOnce() {
    this.setState({
      once: !this.state.once,
    })
  }

  toggleContinuous() {
    this.setState({
      continuous: !this.state.continuous,
    })
  }

  render() {
    const { continuous, log, once } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column>
          <Visibility
            continuous={continuous}
            once={once}
            onPassed={{
              10: () => this.updateLog('10px'),
              100: () => this.updateLog('100px'),
              500: () => this.updateLog('500px'),
              '10%': () => this.updateLog('10%'),
              '25%': () => this.updateLog('25%'),
              '80%': () => this.updateLog('80%'),
            }}
          >
            <Wireframe />
          </Visibility>
        </Grid.Column>

        <Grid.Column>
          <Segment.Group>
            <Segment>
              <Button floated='right' onClick={this.clearLog}>Clear</Button>
              <Checkbox toggle label='Once' checked={once} onChange={this.toggleOnce} />
              <Divider />
              <Checkbox toggle label='Continuous' checked={continuous} onChange={this.toggleContinuous} />
            </Segment>
            <Segment>
              Event Log
            </Segment>
            <Segment>
              <pre style={{ height: 300, overflowY: 'scroll' }}>
                {log.map((e, i) => <p key={i}>{e} passed</p>)}
              </pre>
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    )
  }
}

export default VisibilityExample
