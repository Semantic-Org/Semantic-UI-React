import React from 'react'
import { Dropdown, Header, Icon } from 'semantic-ui-react'

/**
 * Heads up!
 *
 * SUI core has these 4 fields on the Dropdown.Item:
 *
 * "name"  : "Choice 1", // name displayed in dropdown
 * "value" : "value1", // selected value
 * "text"  : "Choice 1" // name displayed after selection (optional)
 * "disabled"  : false // whether field should be displayed as disabled (optional)
 *
 * We don't currently make a distinction between 'text' and 'name', but this
 * example does in the core docs. It would be a breaking change and so let's
 * save the change for a larger refactor. Also, we should also probably
 * use 'content' instead of 'name' to stick with the conventions of this project.
 */

const options = [
  {
    text: 'today',
    value: 'today',
    // content: 'Today',
  },
  {
    text: 'this week',
    value: 'this week',
    // content: 'This Week',
  },
  {
    text: 'this month',
    value: 'this month',
    // content: 'This Month',
  },
]

const DropdownExampleInlineTwo = () => (
  <Header as='h4'>
    <Icon name='trophy' />
    <Header.Content>
      Trending repos
      {' '}
      <Dropdown inline header='Adjust time span' options={options} defaultValue={options[0].value} />
    </Header.Content>
  </Header>
)

export default DropdownExampleInlineTwo
