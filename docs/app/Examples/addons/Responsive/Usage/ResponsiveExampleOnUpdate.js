import React, { Component } from 'react'
import { Button, Grid, Label, Responsive, Segment } from 'semantic-ui-react'

export default class ResponsiveExampleOnUpdate extends Component {
  state = {
    log: [],
    logCount: 0,
  }

  handleOnUpdate = () => this.setState({
    log: [
      `${new Date().toLocaleTimeString()}: onUpdate()`,
      ...this.state.log,
    ].slice(0, 20),
    logCount: this.state.logCount + 1,
  })

  clearLog = () => this.setState({ log: [], logCount: 0 })

  render() {
    const { log, logCount } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column>
          <Responsive as={Segment} onUpdate={this.handleOnUpdate}>
            Responsive Segment
          </Responsive>
        </Grid.Column>

        <Grid.Column>
          <Segment.Group>
            <Segment>
              <Button
                compact
                content='Clear'
                floated='right'
                onClick={this.clearLog}
                size='small'
              />
              Event Log <Label circular>{logCount}</Label>
            </Segment>
            {log.length > 0 && (
              <Segment secondary>
                <pre>{log.map((e, i) => <div key={i}>{e}</div>)}</pre>
              </Segment>
            )}
          </Segment.Group>
        </Grid.Column>
      </Grid>
    )
  }
}
