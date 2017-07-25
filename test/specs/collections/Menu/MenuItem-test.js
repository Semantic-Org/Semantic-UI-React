import faker from 'faker'
import React from 'react'

import MenuItem from 'src/collections/Menu/MenuItem'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('MenuItem', () => {
  common.isConformant(MenuItem)
  common.rendersChildren(MenuItem)

  common.implementsCreateMethod(MenuItem)
  common.implementsIconProp(MenuItem)

  common.propKeyOnlyToClassName(MenuItem, 'active')
  common.propKeyOnlyToClassName(MenuItem, 'disabled')
  common.propKeyOnlyToClassName(MenuItem, 'header')
  common.propKeyOnlyToClassName(MenuItem, 'icon')
  common.propKeyOnlyToClassName(MenuItem, 'link')

  common.propKeyOrValueAndKeyToClassName(MenuItem, 'fitted', ['horizontally', 'vertically'])

  common.propValueOnlyToClassName(MenuItem, 'color', SUI.COLORS)
  common.propValueOnlyToClassName(MenuItem, 'position', ['left', 'right'])

  it('renders a `div` by default', () => {
    shallow(<MenuItem />)
      .should.have.tagName('div')
  })

  describe('content', () => {
    it('renders text', () => {
      const text = faker.hacker.phrase()

      shallow(<MenuItem content={text} />)
        .should.contain.text(text)
    })
  })

  describe('name', () => {
    it('uses the name prop as Start Cased child text', () => {
      shallow(<MenuItem name='upcomingEvents' />)
        .should.contain.text('Upcoming Events')
    })
  })

  describe('icon', () => {
    it('does not add `icon` className if there is also `name`', () => {
      shallow(<MenuItem icon='user' name='users' />)
        .should.not.have.className('icon')
    })
    it('does not add `icon` className if there is also `content`', () => {
      shallow(<MenuItem icon='user' content='Users' />)
        .should.not.have.className('icon')
    })
    it('adds `icon` className if there is an `icon` without `name` or `content`', () => {
      shallow(<MenuItem icon='user' />)
        .should.have.className('icon')
    })
  })

  describe('onClick', () => {
    it('omitted when not defined', () => {
      const click = () => shallow(<MenuItem />).simulate('click')
      expect(click).to.not.throw()
    })

    it('is called with (e, { name, index }) when clicked', () => {
      const spy = sandbox.spy()
      const event = { target: null }
      const props = { name: 'home', index: 0 }

      shallow(<MenuItem onClick={spy} {...props} />)
        .simulate('click', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event, props)
    })

    it('renders an `a` tag', () => {
      shallow(<MenuItem onClick={() => null} />)
        .should.have.tagName('a')
    })
  })
})
