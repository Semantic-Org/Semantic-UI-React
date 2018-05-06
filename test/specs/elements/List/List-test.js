import React from 'react'

import List from 'src/elements/List/List'
import ListContent from 'src/elements/List/ListContent'
import ListDescription from 'src/elements/List/ListDescription'
import ListHeader from 'src/elements/List/ListHeader'
import ListIcon from 'src/elements/List/ListIcon'
import ListItem from 'src/elements/List/ListItem'
import ListList from 'src/elements/List/ListList'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('List', () => {
  common.isConformant(List)
  common.hasSubComponents(List, [ListContent, ListDescription, ListHeader, ListIcon, ListItem, ListList])
  common.hasUIClassName(List)
  common.rendersChildren(List)

  common.implementsVerticalAlignProp(List)

  common.propKeyAndValueToClassName(List, 'floated', SUI.FLOATS)

  common.propKeyOnlyToClassName(List, 'animated')
  common.propKeyOnlyToClassName(List, 'bulleted')
  common.propKeyOnlyToClassName(List, 'celled')
  common.propKeyOnlyToClassName(List, 'divided')
  common.propKeyOnlyToClassName(List, 'horizontal')
  common.propKeyOnlyToClassName(List, 'inverted')
  common.propKeyOnlyToClassName(List, 'link')
  common.propKeyOnlyToClassName(List, 'ordered')
  common.propKeyOnlyToClassName(List, 'selection')

  common.propKeyOrValueAndKeyToClassName(List, 'relaxed', ['very'])

  common.propValueOnlyToClassName(List, 'size', SUI.SIZES)

  const items = ['Name', 'Status', 'Notes']

  describe('onItemClick', () => {
    it('is called with (e, itemProps) when clicked', () => {
      const onClick = sandbox.spy()
      const onItemClick = sandbox.spy()
      const event = { target: null }

      const callbackData = { content: 'Notes', 'data-foo': 'bar' }
      const itemProps = { key: 'notes', content: 'Notes', 'data-foo': 'bar', onClick }

      mount(<List items={[itemProps]} onItemClick={onItemClick} />)
        .find(ListItem)
        .first()
        .simulate('click', event)

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch(event, callbackData)

      onItemClick.should.have.been.calledOnce()
      onItemClick.should.have.been.calledWithMatch(event, callbackData)
    })
  })

  describe('role', () => {
    it('is accessibile with no items', () => {
      shallow(<List />)
        .dive()
        .should.have.prop('role', 'list')
    })

    it('is accessibile with items', () => {
      shallow(<List items={items} />)
        .dive()
        .should.have.prop('role', 'list')
    })
  })

  describe('shorthand', () => {
    it('renders empty list with no shorthand', () => {
      shallow(<List />)
        .dive()
        .should.not.have.descendants(ListItem)
    })

    it('renders the items', () => {
      shallow(<List items={items} />)
        .dive()
        .should.have.exactly(3).descendants(ListItem)
    })
  })
})
