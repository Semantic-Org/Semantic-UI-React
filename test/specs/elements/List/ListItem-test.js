import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import ListItem from 'src/elements/List/ListItem'
import ListContent from 'src/elements/List/ListContent'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('ListItem', () => {
  common.isConformant(ListItem)
  common.forwardsRef(ListItem)
  common.forwardsRef(ListItem, { requiredProps: { children: <span /> } })
  common.forwardsRef(ListItem, { requiredProps: { image: '/images/wireframe/image.png' } })
  common.rendersChildren(ListItem)

  common.propKeyOnlyToClassName(ListItem, 'active')
  common.propKeyOnlyToClassName(ListItem, 'disabled')

  describe('as', () => {
    it('omits className `list` when rendered as `li`', () => {
      shallow(<ListItem as='li' />).should.not.have.className('item')
    })
  })

  describe('onClick', () => {
    it('is called with (e, data) when clicked', () => {
      const onClick = sandbox.spy()
      const props = { onClick, 'data-foo': 'bar' }

      mount(<ListItem {...props} />).simulate('click')

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch({ type: 'click' }, props)
    })

    it('is not called when is disabled', () => {
      const onClick = sandbox.spy()

      mount(<ListItem disabled onClick={onClick} />).simulate('click')
      onClick.should.have.callCount(0)
    })
  })

  describe('value', () => {
    it('adds data attribute by default', () => {
      const value = faker.hacker.phrase()

      shallow(<ListItem value={value} />).should.have.data('value', value)
    })

    it('adds attribute when rendered as `li`', () => {
      const value = faker.hacker.phrase()

      shallow(<ListItem as='li' value={value} />).should.have.attr('value', value)
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

      wrapper.find('ListContent').should.have.lengthOf(0)
    })

    it('renders without wrapping ListContent when content passed as element', () => {
      const spy = sandbox.spy(ListContent, 'create')
      shallow(<ListItem {...baseProps} content={<div />} />)

      spy.should.not.have.been.called()
    })

    it('renders wrapping ListContent when content passed as props', () => {
      const wrapper = shallow(<ListItem content={baseProps} />)

      wrapper.find('ListContent').should.have.lengthOf(1)
    })

    _.each(baseProps, (value, key) => {
      it(`renders wrapping ListContent when icon and ${key} present`, () => {
        const wrapper = shallow(<ListItem {..._.pick(baseProps, key)} icon='user' />)

        wrapper.find('ListIcon').should.have.lengthOf(1)
        wrapper.find('ListContent').should.have.lengthOf(1)
      })

      it(`renders wrapping ListContent when image and ${key} present`, () => {
        const wrapper = shallow(
          <ListItem {..._.pick(baseProps, key)} image='/images/wireframe/image.png' />,
        )

        wrapper.find('Image').should.have.lengthOf(1)
        wrapper.find('ListContent').should.have.lengthOf(1)
      })
    })
  })

  describe('role', () => {
    it('adds role=listitem', () => {
      shallow(<ListItem />).should.have.prop('role', 'listitem')
    })

    it('adds role=listitem with children', () => {
      shallow(
        <ListItem>
          <div>Test</div>
        </ListItem>,
      ).should.have.prop('role', 'listitem')
    })

    it('adds role=listitem with content', () => {
      shallow(<ListItem content={<div />} />).should.have.prop('role', 'listitem')
    })

    it('adds role=listitem with icon', () => {
      shallow(<ListItem icon='user' />).should.have.prop('role', 'listitem')
    })

    it('allows role override without children', () => {
      shallow(<ListItem role='option' />).should.have.prop('role', 'option')
    })

    it('allows role override with children', () => {
      shallow(
        <ListItem role='option'>
          <div>Test</div>
        </ListItem>,
      ).should.have.prop('role', 'option')
    })

    it('allows role override with content', () => {
      shallow(<ListItem role='option' content={<div />} />).should.have.prop('role', 'option')
    })

    it('allows role override with icon', () => {
      shallow(<ListItem role='option' icon='user' />).should.have.prop('role', 'option')
    })
  })
})
