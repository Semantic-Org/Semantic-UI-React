import React from 'react'

import MenuItem from 'src/collections/Menu/MenuItem'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

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
    expect(shallow(<MenuItem />)).have.tagName('div')
  })

  describe('name', () => {
    it('uses the name prop as Start Cased child text', () => {
      expect(shallow(<MenuItem name='upcomingEvents' />)).contain.text('Upcoming Events')
    })
  })

  describe('icon', () => {
    it('does not add `icon` className if there is also `name`', () => {
      expect(shallow(<MenuItem icon='user' name='users' />)).not.have.className('icon')
    })
    it('does not add `icon` className if there is also `content`', () => {
      expect(shallow(<MenuItem icon='user' content='Users' />)).not.have.className('icon')
    })
    it('adds `icon` className if there is an `icon` without `name` or `content`', () => {
      expect(shallow(<MenuItem icon='user' />)).have.className('icon')
    })
  })

  describe('onClick', () => {
    it('is called with (e, data) when clicked', () => {
      const onClick = jest.fn()
      const event = { target: null }
      const props = { name: 'home', index: 0 }

      shallow(<MenuItem onClick={onClick} {...props} />).simulate('click', event)

      expect(onClick).have.been.calledOnce()
      expect(onClick).have.been.calledWithMatch(event, props)
    })

    it('is not called when is disabled', () => {
      const onClick = jest.fn()

      shallow(<MenuItem disabled onClick={onClick} />).simulate('click')
      expect(onClick).have.callCount(0)
    })

    it('renders an `a` tag', () => {
      expect(shallow(<MenuItem onClick={() => null} />)).have.tagName('a')
    })
  })
})
