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

  describe('name', () => {
    it('uses the name prop as Start Cased child text', () => {
      expect(shallow(<MenuItem name='upcomingEvents' />).text()).toBe('Upcoming Events')
    })
  })

  describe('icon', () => {
    it('does not add `icon` className if there is also `name`', () => {
      expect(shallow(<MenuItem icon='user' name='users' />).hasClass('icon')).toBe(false)
    })
    it('does not add `icon` className if there is also `content`', () => {
      expect(shallow(<MenuItem icon='user' content='Users' />).hasClass('icon')).toBe(false)
    })
    it('adds `icon` className if there is an `icon` without `name` or `content`', () => {
      expect(shallow(<MenuItem icon='user' />).hasClass('icon')).toBe(true)
    })
  })

  describe('onClick', () => {
    it('is called with (e, data) when clicked', () => {
      const onClick = jest.fn()
      const event = { target: null }
      const props = { name: 'home', index: 0 }

      shallow(<MenuItem onClick={onClick} {...props} />).simulate('click', event)

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining(props),
      )
    })

    it('is not called when is disabled', () => {
      const onClick = jest.fn()

      shallow(<MenuItem disabled onClick={onClick} />).simulate('click')
      expect(onClick).not.toHaveBeenCalled()
    })

    it('renders an `a` tag', () => {
      expect(shallow(<MenuItem onClick={() => null} />).type()).toBe('a')
    })
  })
})
