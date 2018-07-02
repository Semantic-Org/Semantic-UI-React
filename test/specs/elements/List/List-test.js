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
    it('can be omitted', () => {
      const click = () => shallow(<List items={items} />).simulate('click')
      expect(click).not.toThrowError()
    })

    it('is called with (e, itemProps) when clicked', () => {
      const onClick = sandbox.spy()
      const onItemClick = sandbox.spy()
      const event = { target: null }

      const callbackData = { content: 'Notes', 'data-foo': 'bar' }
      const itemProps = { key: 'notes', content: 'Notes', 'data-foo': 'bar', onClick }

      shallow(<List items={[itemProps]} onItemClick={onItemClick} />)
        .find('ListItem')
        .first()
        .shallow()
        .simulate('click', event)

      expect(onClick).have.been.calledOnce()
      expect(onClick).have.been.calledWithMatch(event, callbackData)

      expect(onItemClick).have.been.calledOnce()
      expect(onItemClick).have.been.calledWithMatch(event, callbackData)
    })
  })

  describe('role', () => {
    it('is accessibile with no items', () => {
      const wrapper = shallow(<List />)

      expect(wrapper).have.prop('role', 'list')
    })

    it('is accessibile with items', () => {
      const wrapper = shallow(<List items={items} />)

      expect(wrapper).have.prop('role', 'list')
    })
  })

  describe('shorthand', () => {
    it('renders empty tr with no shorthand', () => {
      const wrapper = shallow(<List />)

      expect(wrapper.find('ListItem')).toHaveLength(0)
    })

    it('renders the items', () => {
      const wrapper = shallow(<List items={items} />)

      expect(wrapper.find('ListItem')).toHaveLength(items.length)
    })
  })
})
