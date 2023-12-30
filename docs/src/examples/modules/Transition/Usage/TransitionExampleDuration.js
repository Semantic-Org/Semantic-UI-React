import React, { Component } from 'react'
import {
  GridColumn,
  FormInput,
  FormButton,
  Form,
  Grid,
  Image,
  Transition,
} from 'semantic-ui-react'

export default class TransitionExampleDuration extends Component {
  state = { hide: 500, show: 500, visible: true }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))

  render() {
    const { hide, show, visible } = this.state

    return (
      <Grid columns={2}>
        <GridColumn as={Form}>
          <FormInput
            label={`Hide duration: ${hide}ms `}
            min={100}
            max={5000}
            name='hide'
            onChange={this.handleChange}
            step={100}
            type='range'
            value={hide}
          />
          <FormInput
            label={`Show duration: ${show}ms `}
            min={100}
            max={5000}
            name='show'
            onChange={this.handleChange}
            step={100}
            type='range'
            value={show}
          />
          <FormButton content='Run' onClick={this.toggleVisibility} />
        </GridColumn>

        <GridColumn>
          <Transition duration={{ hide, show }} visible={visible}>
            <Image centered size='small' src='/images/leaves/3.png' />
          </Transition>
        </GridColumn>
      </Grid>
    )
  }
}
