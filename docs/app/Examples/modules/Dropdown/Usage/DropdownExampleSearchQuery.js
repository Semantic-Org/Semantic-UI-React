import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

import { stateOptions } from '../common'
// stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]

export default class DropdownExampleSearchQuery extends Component {
  state = { searchQuery: '' }

  handleChange = (e, { searchQuery, value }) => this.setState({ searchQuery, value })

  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery })

  render() {
    const { searchQuery, value } = this.state

    return (
      <Dropdown
        fluid
        multiple
        onChange={this.handleChange}
        onSearchChange={this.handleSearchChange}
        options={stateOptions}
        placeholder='State'
        search
        searchQuery={searchQuery}
        selection
        value={value}
      />
    )
  }
}
