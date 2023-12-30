import React, { Component } from 'react'
import {
  GridColumn,
  FormSelect,
  FormInput,
  FormButton,
  Form,
  Grid,
  Image,
  Transition,
} from 'semantic-ui-react'

const transitions = [
  'jiggle',
  'flash',
  'shake',
  'pulse',
  'tada',
  'bounce',
  'glow',
]

const options = transitions.map((name) => ({
  key: name,
  text: name,
  value: name,
}))

export default class TransitionExampleTransitionExplorer extends Component {
  state = { animation: transitions[0], duration: 500, visible: true }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))

  render() {
    const { animation, duration, visible } = this.state

    return (
      <Grid columns={2}>
        <GridColumn as={Form}>
          <FormSelect
            label='Choose transition'
            name='animation'
            onChange={this.handleChange}
            options={options}
            value={animation}
          />
          <FormInput
            label={`Duration: ${duration}ms `}
            min={100}
            max={2000}
            name='duration'
            onChange={this.handleChange}
            step={100}
            type='range'
            value={duration}
          />
          <FormButton content='Run' onClick={this.toggleVisibility} />
        </GridColumn>

        <GridColumn>
          <Transition
            animation={animation}
            duration={duration}
            visible={visible}
          >
            <Image centered size='small' src='/images/leaves/5.png' />
          </Transition>
        </GridColumn>
      </Grid>
    )
  }
}
