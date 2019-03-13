import faker from 'faker'
import _ from 'lodash'
import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const addressDefinitions = faker.definitions.address
const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
  key: addressDefinitions.state_abbr[index],
  text: state,
  value: addressDefinitions.state_abbr[index],
}))

export default class DropdownExampleSearchQuery extends Component {
  state = { searchQuery: '' }

  handleChange = (e, { searchQuery, value }) =>
    this.setState({ searchQuery, value })

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
