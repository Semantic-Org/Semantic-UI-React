import React, { Component } from 'react'
import {
  Form,
  Grid,
  Header,
  Segment,
  TransitionablePortal,
} from 'semantic-ui-react'

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

export default class TransitionablePortalExampleTransition extends Component {
  state = { animation: transitions[0], duration: 500, open: false }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleClick = () => this.setState((prevState) => ({ open: !prevState.open }))

  render() {
    const { animation, duration, open } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column>
          <Form>
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
              content={open ? 'Close Portal' : 'Open Portal'}
              negative={open}
              positive={!open}
              onClick={this.handleClick}
            />
          </Form>

          <TransitionablePortal
            open={open}
            transition={{ animation, duration }}
          >
            <Segment
              style={{
                left: '40%',
                position: 'fixed',
                top: '50%',
                zIndex: 1000,
              }}
            >
              <Header>This is a controlled portal</Header>
              <p>Portals have tons of great callback functions to hook into.</p>
              <p>To close, simply click the close button or click away</p>
            </Segment>
          </TransitionablePortal>
        </Grid.Column>
      </Grid>
    )
  }
}
