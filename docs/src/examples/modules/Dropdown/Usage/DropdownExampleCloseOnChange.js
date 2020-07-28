import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const getOptions = (number, prefix = 'Choice ') =>
  _.times(number, (index) => ({
    key: index,
    text: `${prefix}${index}`,
    value: index,
  }))

const DropdownExampleCloseOnChange = () => (
  <>
    <Dropdown
      multiple
      search
      selection
      closeOnChange
      options={getOptions(5)}
      placeholder='I close on change'
    />{' '}
    <Dropdown
      multiple
      search
      selection
      options={getOptions(5)}
      placeholder='I stay open on change'
    />
  </>
)

export default DropdownExampleCloseOnChange
