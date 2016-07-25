import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Button, Dropdown } from 'stardust'

const getOptions = () => _.times(5, () => {
  const name = faker.name.findName()
  return { text: name, value: _.snakeCase(name) }
})

export default class DropdownAsyncOptions extends Component {
  componentWillMount() {
    const options = getOptions()
    this.setState({ isFetching: false, search: true, multiple: true, value: [], options })
  }

  handleChange = (e, value) => this.setState({ value })

  // fake api call
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

  toggleSearch = (e) => this.setState({ search: e.target.checked })

  toggleMultiple = (e) => {
    const { value } = this.state
    // convert the value to/from an array
    const newValue = e.target.checked ? _.compact([value]) : value[0]
    this.setState({ multiple: e.target.checked, value: newValue })
  }

  render() {
    const { multiple, options, isFetching, search, value } = this.state

    return (
      <div>
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
          options={options}
          value={value}
          placeholder='Add Users'
          multiple={multiple}
          search={search}
          selection
          fluid
          onChange={this.handleChange}
          disabled={isFetching}
          loading={isFetching}
        />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    )
  }
}
