import _ from 'lodash'
import React, { Component } from 'react'
import {
  SegmentGroup,
  TableRow,
  TableCell,
  TableBody,
  GridColumn,
  Button,
  Checkbox,
  Grid,
  Segment,
  Table,
} from 'semantic-ui-react'

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
        `${new Date().toLocaleTimeString()}: ${_.padEnd(
          action,
          10,
        )} { checked: ${value} }`,
        ...log,
      ].slice(0, 15),
    }))

  toggle = () =>
    this.setState(({ suirChecked }) => ({ suirChecked: !suirChecked }))
  toggleDOM = () =>
    this.setState(({ domChecked }) => ({ domChecked: !domChecked }))

  handleMouseDown = (e, { checked }) => this.log('MouseDown', checked)
  handleMouseUp = (e, { checked }) => this.log('MouseUp', checked)
  handleClick = (e, { checked }) => this.log('Click', checked)
  handleChange = (e, { checked }) => {
    this.log('Change', checked)
    this.toggle()
  }

  handleDOMMouseDown = (e) => this.log('DOM MouseDown', e.target.checked)
  handleDOMMouseUp = (e) => this.log('DOM MouseUp', e.target.checked)
  handleDOMClick = (e) => this.log('DOM Click', e.target.checked)
  handleDOMChange = (e) => {
    this.log('DOM Change', e.target.checked)
    this.toggleDOM()
  }

  render() {
    const { domChecked, suirChecked, log } = this.state

    return (
      <Grid>
        <GridColumn width={10}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell collapsing>
                  <Button compact onClick={this.toggle}>
                    Toggle
                  </Button>
                </TableCell>
                <TableCell>
                  <Checkbox
                    checked={suirChecked}
                    label='SUIR Checkbox'
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                  />
                  <br />

                  <Checkbox
                    checked={suirChecked}
                    id='suir-checkbox'
                    label='SUIR Checkbox with id'
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                  />
                </TableCell>
                <TableCell collapsing>
                  <code>{`{ checked: ${suirChecked} }`}</code>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <Button compact onClick={this.toggleDOM}>
                    Toggle
                  </Button>
                </TableCell>
                <TableCell>
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
                  <br />

                  <input
                    checked={domChecked}
                    id='dom-checkbox'
                    onChange={this.handleDOMChange}
                    onClick={this.handleDOMClick}
                    onMouseDown={this.handleDOMMouseDown}
                    onMouseUp={this.handleDOMMouseUp}
                    type='checkbox'
                  />
                  <label htmlFor='dom-checkbox'> DOM Checkbox with id</label>
                </TableCell>
                <TableCell>
                  <code>{`{ checked: ${domChecked} }`}</code>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </GridColumn>

        <GridColumn width={6}>
          <SegmentGroup>
            <Segment>
              <Button
                compact
                size='small'
                floated='right'
                onClick={this.clearLog}
              >
                Clear
              </Button>
              Event Log
            </Segment>
            <Segment secondary>
              <pre>
                {log.map((e, i) => (
                  <div key={i}>{e}</div>
                ))}
              </pre>
            </Segment>
          </SegmentGroup>
        </GridColumn>
      </Grid>
    )
  }
}
