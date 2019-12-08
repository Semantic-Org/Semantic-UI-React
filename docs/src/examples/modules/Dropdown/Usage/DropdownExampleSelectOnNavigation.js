import _ from 'lodash'
import React, { Component } from 'react'
import { Grid, Dropdown, Form } from 'semantic-ui-react'

const getOptions = (number, prefix = 'Choice ') =>
  _.times(number, (index) => ({
    key: index,
    text: `${prefix}${index}`,
    value: index,
  }))

export default class DropdownExampleSelectOnNavigation extends Component {
  state = {
    default: '',
    false: '',
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    return (
      <Grid columns='equal'>
        <Grid.Column>
          <Form>
            <Form.Field>
              <label>Default selectOnNavigation</label>
              <Dropdown
                selection
                name='default'
                options={getOptions(3)}
                placeholder='I change value on keyboard navigation'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>{'selectOnNavigation={false}'}</label>
              <Dropdown
                selectOnNavigation={false}
                selection
                name='false'
                options={getOptions(3)}
                placeholder='I do not change value on keyboard navigation'
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form>
        </Grid.Column>
        <Grid.Column>
          Dropdown values:
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </Grid.Column>
      </Grid>
    )
  }
}
