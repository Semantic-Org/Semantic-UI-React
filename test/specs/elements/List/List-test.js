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
      const onClick = jest.fn()
      const onItemClick = jest.fn()
      const event = { target: null }

      const callbackData = { content: 'Notes', 'data-foo': 'bar' }
      const itemProps = { key: 'notes', content: 'Notes', 'data-foo': 'bar', onClick }

      shallow(<List items={[itemProps]} onItemClick={onItemClick} />)
        .find('ListItem')
        .first()
        .shallow()
        .simulate('click', event)

      expect(onClick).toHaveBeenCalled()
      expect(onClick).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining(callbackData),
      )

      expect(onItemClick).toHaveBeenCalled()
      expect(onItemClick).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining(callbackData),
      )
    })
  })

  describe('role', () => {
    it('is accessibile with no items', () => {
      expect(shallow(<List />).prop('role')).toBe('list')
    })

    it('is accessibile with items', () => {
      expect(shallow(<List items={items} />).prop('role')).toBe('list')
    })
  })

  describe('shorthand', () => {
    it('renders empty tr with no shorthand', () => {
      expect(shallow(<List />).find('ListItem')).toHaveLength(0)
    })

    it('renders the items', () => {
      expect(shallow(<List items={items} />).find('ListItem')).toHaveLength(items.length)
    })
  })
})
