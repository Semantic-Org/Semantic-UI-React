import _ from 'lodash'
import React, { Component } from 'react'
import { GridColumn, FormField, Grid, Dropdown, Form } from 'semantic-ui-react'

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
        <GridColumn>
          <Form>
            <FormField>
              <label>Default selectOnNavigation</label>
              <Dropdown
                selection
                name='default'
                options={getOptions(3)}
                placeholder='I change value on keyboard navigation'
                onChange={this.handleChange}
              />
            </FormField>
            <FormField>
              <label>{'selectOnNavigation={false}'}</label>
              <Dropdown
                selectOnNavigation={false}
                selection
                name='false'
                options={getOptions(3)}
                placeholder='I do not change value on keyboard navigation'
                onChange={this.handleChange}
              />
            </FormField>
          </Form>
        </GridColumn>
        <GridColumn>
          Dropdown values:
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </GridColumn>
      </Grid>
    )
  }
}
