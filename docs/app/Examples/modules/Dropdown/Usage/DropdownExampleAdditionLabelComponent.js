import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { text: 'English', value: 'English' },
  { text: 'French', value: 'French' },
  { text: 'Spanish', value: 'Spanish' },
  { text: 'German', value: 'German' },
  { text: 'Chinese', value: 'Chinese' },
]

class DropdownExampleAdditionLabelComponent extends Component {
  state = { options }

  handleAddition = (e, { value }) => {
    this.setState({
      options: [{ text: value, value }, ...this.state.options],
    })
  }

  handleChange = (e, { value }) => this.setState({ currentValue: value })

  render() {
    const { currentValue } = this.state

    return (
      <Dropdown
        options={this.state.options}
        placeholder='Choose Language'
        search
        selection
        fluid
        allowAdditions
        additionLabel={<i style={{ color: 'red' }}>Custom Language: </i>}
        value={currentValue}
        onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
    )
  }
}

export default DropdownExampleAdditionLabelComponent
