import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Button, Dropdown, Grid, Header } from 'semantic-ui-react'

const getOptions = () => _.times(3, () => {
  const name = faker.name.findName()
  return { key: name, text: name, value: _.snakeCase(name) }
})

class DropdownExampleRemote extends Component {
  componentWillMount() {
    this.setState({
      isFetching: false,
      multiple: true,
      search: true,
      searchQuery: null,
      value: [],
      options: getOptions(),
    })
  }

  handleChange = (e, { value }) => this.setState({ value })
  handleSearchChange = (e, value) => this.setState({ searchQuery: value })

  fetchOptions = () => {
    this.setState({ isFetching: true })

    setTimeout(() => {
      this.setState({ isFetching: false, options: getOptions() })
      this.selectRandom()
    }, 500)
  }

  selectRandom = () => {
    const { multiple, options } = this.state
    const value = _.sample(options).value
    this.setState({ value: multiple ? [value] : value })
  }

  toggleSearch = e => this.setState({ search: e.target.checked })

  toggleMultiple = (e) => {
    const { value } = this.state
    const multiple = e.target.checked
    // convert the value to/from an array
    const newValue = multiple ? _.compact([value]) : _.head(value) || ''
    this.setState({ multiple, value: newValue })
  }

  render() {
    const { multiple, options, isFetching, search, value } = this.state

    return (
      <Grid>
        <Grid.Column width={8}>
          <p>
            <Button onClick={this.fetchOptions}>Fetch</Button>
            <Button onClick={this.selectRandom} disabled={_.isEmpty(options)}>Random</Button>
            <label>
              <input type='checkbox' checked={search} onChange={this.toggleSearch} /> Search
            </label>
            {' '}
            <label>
              <input type='checkbox' checked={multiple} onChange={this.toggleMultiple} /> Multiple
            </label>
          </p>
          <Dropdown
            fluid
            selection
            multiple={multiple}
            search={search}
            options={options}
            value={value}
            placeholder='Add Users'
            onChange={this.handleChange}
            onSearchChange={this.handleSearchChange}
            disabled={isFetching}
            loading={isFetching}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header>State</Header>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </Grid.Column>
      </Grid>
    )
  }
}

export default DropdownExampleRemote
