import React, { Component } from 'react'
import { Button, Checkbox, Divider, Grid, Segment } from 'semantic-ui-react'

export default class CheckboxExampleDOMComparison extends Component {
  state = {
    domChecked: false,
    suirChecked: false,
    log: [],
  }

  clearLog = () => this.setState({ log: [] })

  log = msg =>
    this.setState(({ log }) => ({
      log: [`${new Date().toLocaleTimeString()}: ${msg}`, ...log].slice(0, 15),
    }))

  toggle = () => this.setState(({ suirChecked }) => ({ suirChecked: !suirChecked }))
  toggleDOM = () => this.setState(({ domChecked }) => ({ domChecked: !domChecked }))

  handleMouseDown = (e, { checked }) => this.log(`MouseDown     { checked: ${checked} }`)
  handleMouseUp = (e, { checked }) => this.log(`MouseUp       { checked: ${checked} }`)
  handleClick = (e, { checked }) => this.log(`Click         { checked: ${checked} }`)
  handleChange = (e, { checked }) => {
    this.log(`Change        { checked: ${checked} }`)
    this.toggle()
  }

  handleDOMMouseDown = e => this.log(`DOM MouseDown { checked: ${e.target.checked} }`)
  handleDOMMouseUp = e => this.log(`DOM MouseUp   { checked: ${e.target.checked} }`)
  handleDOMClick = e => this.log(`DOM Click     { checked: ${e.target.checked} }`)
  handleDOMChange = (e) => {
    this.log(`DOM Change    { checked: ${e.target.checked} }`)
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
            label='SUIR Checkbox'
            checked={suirChecked}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
            onClick={this.handleClick}
            onChange={this.handleChange}
          />
          &emsp;<code>{`{ checked: ${suirChecked} }`}</code>
          <Divider hidden />
          <Button compact onClick={this.toggleDOM}>
            Toggle
          </Button>
          &emsp;
          <label>
            <input
              type='checkbox'
              checked={domChecked}
              onMouseDown={this.handleDOMMouseDown}
              onMouseUp={this.handleDOMMouseUp}
              onClick={this.handleDOMClick}
              onChange={this.handleDOMChange}
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
