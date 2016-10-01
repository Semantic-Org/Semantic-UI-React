import faker from 'faker'
import React from 'react'
import * as common from 'test/specs/commonTests'

import ListItem from 'src/elements/List/ListItem'

describe('ListItem', () => {
  common.isConformant(ListItem)
  common.rendersChildren(ListItem)

  common.propKeyOnlyToClassName(ListItem, 'active')
  common.propKeyOnlyToClassName(ListItem, 'disabled')

  describe('list', () => {
    it('omitted when rendered as `li`', () => {
      shallow(<ListItem as='li' />)
        .should.not.have.className('item')
    })
  })

  describe('value', () => {
    it('adds data attribute by default', () => {
      const value = faker.hacker.phrase()

      shallow(<ListItem value={value} />)
        .should.have.data('value', value)
    })

    it('adds attribute when rendered as `li`', () => {
      const value = faker.hacker.phrase()

      shallow(<ListItem as='li' value={value} />)
        .should.have.attr('value', value)
    })
  })
})
