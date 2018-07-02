import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import ListItem from 'src/elements/List/ListItem'
import ListContent from 'src/elements/List/ListContent'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('ListItem', () => {
  common.isConformant(ListItem)
  common.rendersChildren(ListItem)

  common.propKeyOnlyToClassName(ListItem, 'active')
  common.propKeyOnlyToClassName(ListItem, 'disabled')

  describe('as', () => {
    it('omits className `list` when rendered as `li`', () => {
      expect(shallow(<ListItem as='li' />)).not.have.className('item')
    })
  })

  describe('onClick', () => {
    it('is called with (e, data) when clicked', () => {
      const onClick = sandbox.spy()
      const event = { target: null }
      const props = { onClick, 'data-foo': 'bar' }

      shallow(<ListItem {...props} />).simulate('click', event)

      expect(onClick).have.been.calledOnce()
      expect(onClick).have.been.calledWithExactly(event, props)
    })

    it('is not called when is disabled', () => {
      const onClick = sandbox.spy()

      shallow(<ListItem disabled onClick={onClick} />).simulate('click')
      expect(onClick).have.callCount(0)
    })
  })

  describe('value', () => {
    it('adds data attribute by default', () => {
      const value = faker.hacker.phrase()

      expect(shallow(<ListItem value={value} />)).have.data('value', value)
    })

    it('adds attribute when rendered as `li`', () => {
      const value = faker.hacker.phrase()

      expect(shallow(<ListItem as='li' value={value} />)).have.attr('value', value)
    })
  })

  describe('shorthand', () => {
    const baseProps = {
      content: faker.hacker.phrase(),
      description: faker.hacker.phrase(),
      header: faker.hacker.phrase(),
    }

    it('renders without wrapping ListContent', () => {
      const wrapper = shallow(<ListItem {...baseProps} />)

      expect(wrapper.find('ListContent')).toHaveLength(0)
    })

    it('renders without wrapping ListContent when content passed as element', () => {
      const spy = sandbox.spy(ListContent, 'create')
      shallow(<ListItem {...baseProps} content={<div />} />)

      expect(spy).not.have.been.called()
    })

    it('renders wrapping ListContent when content passed as props', () => {
      const wrapper = shallow(<ListItem content={baseProps} />)

      expect(wrapper.find('ListContent')).toHaveLength(1)
    })

    _.each(baseProps, (value, key) => {
      it(`renders wrapping ListContent when icon and ${key} present`, () => {
        const wrapper = shallow(<ListItem {..._.pick(baseProps, key)} icon='user' />)

        expect(wrapper.find('ListIcon')).toHaveLength(1)
        expect(wrapper.find('ListContent')).toHaveLength(1)
      })

      it(`renders wrapping ListContent when image and ${key} present`, () => {
        const wrapper = shallow(
          <ListItem {..._.pick(baseProps, key)} image='/images/wireframe/image.png' />,
        )

        expect(wrapper.find('Image')).toHaveLength(1)
        expect(wrapper.find('ListContent')).toHaveLength(1)
      })
    })
  })

  describe('role', () => {
    it('adds role=listitem', () => {
      expect(shallow(<ListItem />)).have.prop('role', 'listitem')
    })
    it('adds role=listitem with children', () => {
      expect(
        shallow(
          <ListItem>
            <div>Test</div>
          </ListItem>,
        ),
      ).have.prop('role', 'listitem')
    })
    it('adds role=listitem with content', () => {
      expect(shallow(<ListItem content={<div />} />)).have.prop('role', 'listitem')
    })
    it('adds role=listitem with icon', () => {
      expect(shallow(<ListItem icon='user' />)).have.prop('role', 'listitem')
    })
  })
})
