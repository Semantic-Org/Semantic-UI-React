import React, { Component } from 'react'
import { Grid, Dropdown } from 'semantic-ui-react'

import { getOptions } from '../common'

export default class DropdownExampleCloseOnChange extends Component {
  constructor() {
    super()

    this.state = {}
  }

  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <Grid columns={2}>
        <Grid.Column>
          <div>
            <Dropdown
              options={getOptions(3)}
              placeholder='I will call onChange on keyboard navigation'
              onChange={this.handleChange}
            />
            {' '}
            <Dropdown
              selectOnKeydown={false}
              options={getOptions(3)}
              placeholder='I will not call onChange on keyboard navigation'
              onChange={this.handleChange}
            />
          </div>
        </Grid.Column>
        <Grid.Column>
          <pre>
            {JSON.stringify(this.state, null, 2)}
          </pre>
        </Grid.Column>
      </Grid>
    )
  }
}
