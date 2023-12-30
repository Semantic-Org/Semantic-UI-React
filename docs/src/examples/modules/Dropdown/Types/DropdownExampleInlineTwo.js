import React from 'react'
import { HeaderContent, Dropdown, Header, Icon } from 'semantic-ui-react'

const options = [
  {
    key: 'today',
    text: 'today',
    value: 'today',
    content: 'Today',
  },
  {
    key: 'this week',
    text: 'this week',
    value: 'this week',
    content: 'This Week',
  },
  {
    key: 'this month',
    text: 'this month',
    value: 'this month',
    content: 'This Month',
  },
]

const DropdownExampleInlineTwo = () => (
  <Header as='h4'>
    <Icon name='trophy' />
    <HeaderContent>
      Trending repos{' '}
      <Dropdown
        inline
        header='Adjust time span'
        options={options}
        defaultValue={options[0].value}
      />
    </HeaderContent>
  </Header>
)

export default DropdownExampleInlineTwo
