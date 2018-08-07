import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Checkbox, Divider, Grid, Segment } from 'semantic-ui-react'

export default class CheckboxExampleDOMComparison extends Component {
  state = {
    domChecked: false,
    suirChecked: false,
    log: [],
  }

  clearLog = () => this.setState({ log: [] })

  log = (action, value) =>
    this.setState(({ log }) => ({
      log: [
        `${new Date().toLocaleTimeString()}: ${_.padEnd(action, 10)} { checked: ${value} }`,
        ...log,
      ].slice(0, 15),
    }))

  toggle = () => this.setState(({ suirChecked }) => ({ suirChecked: !suirChecked }))
  toggleDOM = () => this.setState(({ domChecked }) => ({ domChecked: !domChecked }))

  handleMouseDown = (e, { checked }) => this.log('MouseDown', checked)
  handleMouseUp = (e, { checked }) => this.log('MouseUp', checked)
  handleClick = (e, { checked }) => this.log('Click', checked)
  handleChange = (e, { checked }) => {
    this.log('Change', checked)
    this.toggle()
  }

  handleDOMMouseDown = e => this.log('DOM MouseDown', e.target.checked)
  handleDOMMouseUp = e => this.log('DOM MouseUp', e.target.checked)
  handleDOMClick = e => this.log('DOM Click', e.target.checked)
  handleDOMChange = (e) => {
    this.log('DOM Change', e.target.checked)
    this.toggleDOM()
  }

  render() {
    const { domChecked, suirChecked, log } = this.state

    return (
      <Grid columns='equal'>
        <Grid.Column>
          <Button compact onClick={this.toggle}>
            Toggle
          </Button>
          &emsp;
          <Checkbox
            checked={suirChecked}
            label='SUIR Checkbox'
            onChange={this.handleChange}
            onClick={this.handleClick}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
          />
          &emsp;<code>{`{ checked: ${suirChecked} }`}</code>
          <Divider hidden />
          <Button compact onClick={this.toggleDOM}>
            Toggle
          </Button>
          &emsp;
          <label>
            <input
              checked={domChecked}
              onChange={this.handleDOMChange}
              onClick={this.handleDOMClick}
              onMouseDown={this.handleDOMMouseDown}
              onMouseUp={this.handleDOMMouseUp}
              type='checkbox'
            />{' '}
            DOM Checkbox
          </label>
          &emsp;<code>{`{ checked: ${domChecked} }`}</code>
        </Grid.Column>

        <Grid.Column>
          <Segment.Group>
            <Segment>
              <Button compact size='small' floated='right' onClick={this.clearLog}>
                Clear
              </Button>
              Event Log
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
