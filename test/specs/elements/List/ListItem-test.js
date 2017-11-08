import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import Image from 'src/elements/Image/Image'
import ListIcon from 'src/elements/List/ListIcon'
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
      shallow(<ListItem as='li' />)
        .should.not.have.className('item')
    })
  })

  describe('onClick', () => {
    it('is called with (e, data) when clicked', () => {
      const onClick = sandbox.spy()
      const event = { target: null }
      const props = { onClick, 'data-foo': 'bar' }
      const wrapper = mount(<ListItem {...props} />)

      wrapper.simulate('click', event)
      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch(event, props)
    })

    it('is not called when is disabled', () => {
      const onClick = sandbox.spy()
      const wrapper = mount(<ListItem disabled onClick={onClick} />)

      wrapper.simulate('click')
      onClick.should.have.not.been.called()
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

  describe('shorthand', () => {
    const baseProps = {
      content: faker.hacker.phrase(),
      description: faker.hacker.phrase(),
      header: faker.hacker.phrase(),
    }

    it('renders without wrapping ListContent', () => {
      shallow(<ListItem {...baseProps} />)
        .dive()
        .find('ListContent').should.have.lengthOf(0)
    })

    it('renders without wrapping ListContent when content passed as element', () => {
      const spy = sandbox.spy(ListContent, 'create')
      shallow(<ListItem {...baseProps} content={<div />} />)

      spy.should.not.have.been.called()
    })

    it('renders wrapping ListContent when content passed as props', () => {
      shallow(<ListItem content={baseProps} />)
        .dive()
        .should.have.exactly(1).descendants(ListContent)
    })

    _.each(baseProps, (value, key) => {
      it(`renders wrapping ListContent when icon and ${key} present`, () => {
        const wrapper = shallow(<ListItem {..._.pick(baseProps, key)} icon='user' />).dive()

        wrapper.should.have.exactly(1).descendants(ListIcon)
        wrapper.should.have.exactly(1).descendants(ListContent)
      })

      it(`renders wrapping ListContent when image and ${key} present`, () => {
        const wrapper = shallow(<ListItem {..._.pick(baseProps, key)} image='foo.png' />).dive()

        wrapper.should.have.exactly(1).descendants(Image)
        wrapper.should.have.exactly(1).descendants(ListContent)
      })
    })
  })

  describe('role', () => {
    it('adds role="listitem"', () => {
      shallow(<ListItem />)
        .dive()
        .should.have.prop('role', 'listitem')
    })

    it('adds role="listitem" with children', () => {
      shallow(
        <ListItem>
          <div>Test</div>
        </ListItem>,
      )
        .dive()
        .should.have.prop('role', 'listitem')
    })

    it('adds role="listitem" with content', () => {
      shallow(<ListItem content={<div />} />)
        .dive()
        .should.have.prop('role', 'listitem')
    })

    it('adds role="listitem" with icon', () => {
      shallow(<ListItem icon='user' />)
        .dive()
        .should.have.prop('role', 'listitem')
    })
  })
})
