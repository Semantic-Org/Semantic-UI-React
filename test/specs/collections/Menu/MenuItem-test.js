import React from 'react'

import MenuItem from 'src/collections/Menu/MenuItem'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('MenuItem', () => {
  common.isConformant(MenuItem)
  common.forwardsRef(MenuItem)
  common.forwardsRef(MenuItem, { requiredProps: { children: <span /> } })
  common.rendersChildren(MenuItem)

  common.implementsCreateMethod(MenuItem)
  common.implementsIconProp(MenuItem, { autoGenerateKey: false })

  common.propKeyOnlyToClassName(MenuItem, 'active')
  common.propKeyOnlyToClassName(MenuItem, 'disabled')
  common.propKeyOnlyToClassName(MenuItem, 'header')
  common.propKeyOnlyToClassName(MenuItem, 'icon')
  common.propKeyOnlyToClassName(MenuItem, 'link')

  common.propKeyOrValueAndKeyToClassName(MenuItem, 'fitted', ['horizontally', 'vertically'])

  common.propValueOnlyToClassName(MenuItem, 'color', SUI.COLORS)
  common.propValueOnlyToClassName(MenuItem, 'position', ['left', 'right'])

  describe('as', () => {
    it('renders a `div` by default', () => {
      shallow(<MenuItem />).should.have.tagName('div')
    })

    it('renders an `a` tag', () => {
      shallow(<MenuItem onClick={() => null} />).should.have.tagName('a')
    })
  })

  describe('name', () => {
    it('uses the name prop as Start Cased child text', () => {
      shallow(<MenuItem name='upcomingEvents' />).should.contain.text('Upcoming Events')
    })
  })

  describe('icon', () => {
    it('does not add `icon` className if there is also `name`', () => {
      shallow(<MenuItem icon='user' name='users' />).should.not.have.className('icon')
    })
    it('does not add `icon` className if there is also `content`', () => {
      shallow(<MenuItem icon='user' content='Users' />).should.not.have.className('icon')
    })
    it('adds `icon` className if there is an `icon` without `name` or `content`', () => {
      shallow(<MenuItem icon='user' />).should.have.className('icon')
    })
  })

  describe('onClick', () => {
    it('is called with (e, data) when clicked', () => {
      const onClick = sandbox.spy()
      const props = { name: 'home', index: 0 }

      mount(<MenuItem onClick={onClick} {...props} />).simulate('click')

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch({ type: 'click' }, props)
    })

    it('is not called when is disabled', () => {
      const onClick = sandbox.spy()

      mount(<MenuItem disabled onClick={onClick} />).simulate('click')
      onClick.should.have.callCount(0)
    })
  })
})
