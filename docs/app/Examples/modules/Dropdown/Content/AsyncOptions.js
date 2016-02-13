import _ from 'lodash'
import cx from 'classnames'
import faker from 'faker'
import React, { Component } from 'react'
import { Button, Dropdown } from 'stardust'

const getOptions = () => _.times(3, () => {
  const name = faker.name.findName()
  return { text: name, value: _.snakeCase(name) }
})

export default class DropdownAsyncOptions extends Component {
  state = { isFetching: false, value: [], options: [] }

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

  render() {
    const { options, isFetching, value } = this.state
    const classes = cx('search selection multiple', { 'disabled loading': isFetching })

    return (
      <div>
        <Button onClick={this.fetchOptions}>Fetch</Button>
        <Button onClick={this.selectRandom} disabled={_.isEmpty(options)}>Random</Button>
        <Dropdown
          defaultText='Add Users'
          className={classes}
          options={options}
          value={value}
          onChange={this.handleChange}
        />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    )
  }
}
