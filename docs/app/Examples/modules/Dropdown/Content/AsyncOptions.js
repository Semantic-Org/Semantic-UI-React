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
    const value = _.sample(options).value
    this.setState({ isFetching: false, search: true, value, options })
  }

  handleChange = value => this.setState({ value })

  // fake api call
  fetchOptions = () => {
    this.setState({ isFetching: true })

    setTimeout(() => {
      this.setState({ isFetching: false, options: getOptions() })
      this.selectRandom()
    }, 500)
  }

  selectRandom = () => this.setState({ value: _.sample(this.state.options).value })
  toggleSearch = (e) => this.setState({ search: e.target.checked })

  render() {
    const { options, isFetching, search, value } = this.state

    return (
      <div>
        <Button onClick={this.fetchOptions}>Fetch</Button>
        <Button onClick={this.selectRandom} disabled={_.isEmpty(options)}>Random</Button>
        <Dropdown
          options={options}
          value={value}
          placeholder='Add Users'
          search={search}
          selection
          onChange={this.handleChange}
          disabled={isFetching}
          loading={isFetching}
        />
        <p>
          <label>
            <input type='checkbox' value={search} onChange={this.toggleSearch} />
            {' '}Search
          </label>
        </p>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    )
  }
}
