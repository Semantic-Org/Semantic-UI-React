import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const items = [
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
  { key: 'German', text: 'German', value: 'German' },
  { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
]

class DropdownExampleAdditionLabelComponent extends Component {
  state = { items }

  handleAddition = (e, { value }) => {
    this.setState({
      items: [{ key: value, text: value, value }, ...this.state.items],
    })
  }

  handleChange = (e, { value }) => this.setState({ currentValue: value })

  render() {
    const { currentValue } = this.state

    return (
      <Dropdown
        items={this.state.items}
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
