import faker from 'faker'
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
  common.forwardsRef(List)
  common.forwardsRef(List, { requiredProps: { children: <span /> } })
  common.forwardsRef(List, { requiredProps: { content: faker.lorem.word() } })
  common.hasSubcomponents(List, [
    ListContent,
    ListDescription,
    ListHeader,
    ListIcon,
    ListItem,
    ListList,
  ])
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
        .find('ListItem')
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
      const wrapper = shallow(<List />)
      wrapper.should.have.prop('role', 'list')
    })

    it('is accessibile with items', () => {
      const wrapper = shallow(<List items={items} />)
      wrapper.should.have.prop('role', 'list')
    })

    it('allows overriding with no items', () => {
      const wrapper = shallow(<List role='listbox' />)
      wrapper.should.have.prop('role', 'listbox')
    })

    it('allows overriding with items', () => {
      const wrapper = shallow(<List role='listbox' items={items} />)
      wrapper.should.have.prop('role', 'listbox')
    })

    it('allows overriding with children', () => {
      const wrapper = shallow(
        <List role='listbox'>
          <ListItem />
        </List>,
      )
      wrapper.should.have.prop('role', 'listbox')
    })
  })

  describe('shorthand', () => {
    it('renders empty tr with no shorthand', () => {
      const wrapper = shallow(<List />)

      wrapper.find('ListItem').should.have.lengthOf(0)
    })

    it('renders the items', () => {
      const wrapper = shallow(<List items={items} />)

      wrapper.find('ListItem').should.have.lengthOf(items.length)
    })
  })
})
