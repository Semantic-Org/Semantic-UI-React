import React, { Component } from 'react'
import { Dropdown, Grid, Header } from 'stardust'

const options = [
  { text: 'English', value: 'English' },
  { text: 'French', value: 'French' },
  { text: 'Spanish', value: 'Spanish' },
  { text: 'German', value: 'German' },
  { text: 'Chinese', value: 'Chinese' },
]

export default class AllowAdditionsExample extends Component {
  state = { optionsSingle: options, optionsMultiple: options }

  handleAdditionSingle = (e, { value }) => {
    // validate, save to server, show a message to the user ...
    this.setState({
      optionsSingle: [{ text: value, value }, ...this.state.optionsSingle],
    })
  }

  handleAdditionMultiple = (e, { value }) => {
    // validate, save to server, show a message to the user ...
    this.setState({
      optionsMultiple: [{ text: value, value }, ...this.state.optionsMultiple],
    })
  }

  handleChangeSingle = (e, { value }) => this.setState({ currentValue: value })

  handleChangeMultiple = (e, { value }) => this.setState({ currentValues: value })

  render() {
    const { currentValue, currentValues } = this.state

    return (
      <Grid>
        <Grid.Column width={8}>
          <Header>Single Option</Header>
          <pre>Current value: {currentValue}</pre>
          <Dropdown
            options={this.state.optionsSingle}
            placeholder='Choose Language'
            search
            selection
            fluid
            allowAdditions
            onAddItem={this.handleAdditionSingle}
            onChange={this.handleChangeSingle}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header>Multiple Options</Header>
          <pre>Current values: {JSON.stringify(currentValues)}</pre>
          <Dropdown
            options={this.state.optionsMultiple}
            placeholder='Choose Languages'
            search
            selection
            fluid
            multiple
            allowAdditions
            additionPosition='top'
            additionLabel=''
            onAddItem={this.handleAdditionMultiple}
            onChange={this.handleChangeMultiple}
          />
          Using <code>additionPosition='top' additionLabel=''</code>
        </Grid.Column>
      </Grid>
    )
  }
}
