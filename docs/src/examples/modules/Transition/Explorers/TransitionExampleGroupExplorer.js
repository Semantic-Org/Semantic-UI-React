import React, { Component } from 'react'
import { Form, Grid, Image, Transition } from 'semantic-ui-react'

const transitions = [
  'browse',
  'browse right',
  'drop',
  'fade',
  'fade up',
  'fade down',
  'fade left',
  'fade right',
  'fly up',
  'fly down',
  'fly left',
  'fly right',
  'horizontal flip',
  'vertical flip',
  'scale',
  'slide up',
  'slide down',
  'slide left',
  'slide right',
  'swing up',
  'swing down',
  'swing left',
  'swing right',
  'zoom',
]
const options = transitions.map((name) => ({
  key: name,
  text: name,
  value: name,
}))

export default class TransitionExampleSingleExplorer extends Component {
  state = { animation: transitions[0], duration: 500, visible: true }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))

  render() {
    const { animation, duration, visible } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column as={Form}>
          <Form.Select
            label='Choose transition'
            name='animation'
            onChange={this.handleChange}
            options={options}
            value={animation}
          />
          <Form.Input
            label={`Duration: ${duration}ms `}
            min={100}
            max={2000}
            name='duration'
            onChange={this.handleChange}
            step={100}
            type='range'
            value={duration}
          />
          <Form.Button
            content={visible ? 'Unmount' : 'Mount'}
            onClick={this.handleVisibility}
          />
        </Grid.Column>

        <Grid.Column>
          <Transition.Group animation={animation} duration={duration}>
            {visible && (
              <Image centered size='small' src='/images/leaves/4.png' />
            )}
          </Transition.Group>
        </Grid.Column>
      </Grid>
    )
  }
}
